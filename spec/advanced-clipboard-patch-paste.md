# Advanced Clipboard / Patch-Paste UI — Specification

## 1. Overview and goals

**Purpose:** Support the patch-transfer workflow (commit range → patches → empty files on target → paste via UI) with minimal errors and cognitive overhead when syncing patch sets from a source machine to a remote device through the glkvm-cloud web terminal.

**Target users:** Developers syncing patch sets from a Mac (or other source) to a Windows machine (or other target) via the glkvm-cloud web UI, using the remote terminal to paste patch content into pre-created empty files.

**Goals:**
- Minimize mistakes (wrong patch, duplicate paste, skipped patch).
- Reduce cognitive load (clear “next” patch, progress, optional validation).
- Keep the workflow compatible with a single-command creation of empty `.patch` files on the target.

---

## 2. Workflow summary (reference)

1. **Source (e.g. Mac):** Developer has a branch and a commit range (commit A → commit B). They generate one or more `.patch` files per commit (commit → patches = 1:M).
2. **Target (e.g. Windows):** For each patch file that exists on the source, create a corresponding empty `.patch` file using a **single** PowerShell or Bash command (patch on source → patch on target = 1:1).
3. **Transfer:** Using the glkvm-cloud UI (remote terminal to the target device), the developer pastes each patch’s **content** into the terminal (e.g. redirect into the empty file or into an editor), in the same order as the patch list.
4. The **same ordered list** of patch filenames is used both for (2) creating empty files and (3) the paste queue in the UI.

### 2.1 Repository and commit range selection

- **Repository:** User selects a repository either from a list of **recent** repositories or by **selecting from folder** (e.g. directory picker or path input).
- **Branch and/or commit range:** User selects a **branch** and/or a **start commit** and **end commit** (commit A → commit B) to define the set of commits that produce the patch list.
- The patch list (ordered filenames) is derived from this selection (e.g. one or more `.patch` files per commit in range).

### 2.2 Patch files location

- Patch files must reside in a **subfolder of the selected repository** (e.g. `patches/`, `out/`, or a user-specified subfolder). The UI or workflow may assume or enforce that all patches for the queue come from this subfolder so paths and names stay consistent between source and target.

### 2.3 Paste input and throttled send

- **Input:** The developer may provide content for each patch in either form:
  - **Text:** Paste or type the patch content directly (e.g. from clipboard).
  - **File path:** Provide a path (e.g. to a `.patch` file on the source); the system reads the file content and uses it as the patch body for that queue item.
- **Send behavior:** Actual pasting into the terminal must be **throttled**: content is sent in **bursts of X characters per second** (configurable X), **not** instantaneously. This avoids overwhelming the terminal/device and can improve reliability (e.g. with slow or buffered connections). The spec does not mandate a specific X; implementation should allow configuration (e.g. a default such as 500–2000 chars/sec and an optional user setting).

---

## Implementation context (code snippet)

**This repository does not contain the application source code.** The glkvm-cloud UI is built and deployed elsewhere; the bundle is minified (e.g. vendor chunks, single-file assets). Customization of the paste workflow is intended to be done via a **code snippet** (e.g. a userscript, browser extension script, or injected script) that runs in the browser against the loaded app. The snippet must:

- Intercept or replace the relevant paste/clipboard behavior (e.g. the handler that calls `sendTermData`).
- Implement throttled sending (bursts of X characters per second) when sending content to the terminal.
- Optionally add or hook into UI surfaces (e.g. patch queue panel) if the snippet can inject DOM or override component behavior.

The rest of this spec describes the **desired behavior**; the implementer chooses how to achieve it within the constraints of snippet-based modification (no access to Vue source in this repo).

---

## 3. Single command for empty .patch files on target

The UI may later reference or generate these one-liners. The **patch list** (ordered list of `.patch` filenames) is the same list the UI uses for the paste queue.

### PowerShell

- From a file (e.g. `patch-list.txt`), one line per filename:
  ```powershell
  Get-Content patch-list.txt | ForEach-Object { New-Item -ItemType File -Path $_ -Force }
  ```
- From clipboard (list of filenames, one per line):
  ```powershell
  Get-Clipboard | ForEach-Object { New-Item -ItemType File -Path $_ -Force }
  ```

### Bash (e.g. WSL on Windows)

- From a file:
  ```bash
  while IFS= read -r f; do touch "$f"; done < patch-list.txt
  ```

---

## 4. Current behavior (baseline)

- **Paste:** Context menu “Paste” (and Shift+Insert) reads `navigator.clipboard.readText()` and sends the text to the terminal via WebSocket (`sendTermData`). There is no queue, no progress indicator, and no association with patch names.
- **File upload:** Separate flow via a modal; user selects a file and it is transferred in chunks over the WebSocket. Not used for the patch-paste workflow described here.
- **Copy:** Selection in the terminal is copied to the system clipboard via `vue-clipboard3` / `toClipboard()`.

---

## 5. Functional requirements for the advanced paste UI

### 5.1 Patch queue

- The user can define an **ordered list** of patch identifiers (e.g. filenames such as `0001-foo.patch`, `0002-bar.patch`). The list may be derived from repository + branch + commit range selection (2.1), with patches assumed to lie in the repo subfolder (2.2).
- **Entry methods:** At least one of:
  - Paste a list of names (e.g. from clipboard; one filename per line).
  - Add entries one by one (e.g. type or paste a single name and add to queue).
  - Populate from repo/commit selection (2.1) so that each commit in range contributes one or more queue entries (filenames or paths relative to the patch subfolder).
- **Per-entry file path (optional):** For file-path paste mode (2.3), each queue entry may store an optional path; when “Paste next” is triggered for that entry, content is read from the file at that path (relative to the repo subfolder if applicable) instead of from the clipboard.
- **Persistence (optional):** Queue may be persisted in the session (e.g. `sessionStorage`) or kept in memory for the tab so it survives page refresh if desired; the spec leaves this as an implementation choice.

### 5.2 Progress and “current patch”

- Each queue entry has a state: **pending** / **current** / **done** (or equivalent).
- The UI clearly indicates the **next patch to paste** (e.g. name and index: “3 of 12 – 0003-baz.patch”).
- After a successful “Paste next” action, the pasted entry is marked **done** and the **current** pointer advances to the next **pending** item.

### 5.3 One-action paste

- **Primary action:** “Paste next patch” (or “Paste current”).
- **Input source (see also 2.3):** For each patch, the developer provides content either as:
  - **Text:** Clipboard or typed text (e.g. read via `navigator.clipboard.readText()` when user triggers paste).
  - **File path:** A path to a `.patch` file; the system reads the file content and uses it as the patch body (path may be relative to the repo subfolder from 2.2).
- **On trigger:**
  1. Obtain content: from clipboard (if text mode) or by reading the file at the given path (if file-path mode).
  2. Optionally validate (e.g. non-empty; optional: basic “looks like a patch” heuristic).
  3. **Send the content to the terminal in bursts of X characters per second** (throttled), not instantaneously. Use the existing channel (e.g. `sendTermData`) but invoke it repeatedly for small chunks at the configured rate until the full content is sent.
  4. Mark the current queue entry as **done** and advance **current** to the next pending entry.
- **User responsibility (text mode):** The user is expected to have copied the patch content on the source machine before clicking “Paste next” in the UI (or to have set the file path for that queue item).

### 5.4 Error reduction

- Show the **name of the patch** that will be pasted before the action (and after, as “just pasted”).
- **Optional:** Show approximate size (character count) or line count of clipboard content before sending so the user can sanity-check.
- **Optional:** Simple “patch header” check (e.g. first line contains `diff --git` or `From `) and warn if not.
- **Avoid double-paste:** After “Paste next,” advance immediately; optional confirmation (e.g. “Paste 0003-baz.patch?”) before sending may be offered.

### 5.5 Integration with existing UI

- **Entry point:** Either extend the rtty **context menu** with an item that opens a “Patch paste” panel/drawer, or add a small **toolbar/panel** near the terminal (e.g. “Patch queue” or “Clipboard – Patch mode”) that is visible when the user chooses.
- **Panel/drawer contents:**
  - Queue list: index, name, status (pending / current / done).
  - “Paste next” button (primary action).
  - Optional: “Set queue from clipboard” (paste list of filenames to define the queue).
  - Optional: Clear queue, edit queue (add/remove/reorder).

---

## 6. Non-goals / out of scope

- **Backend changes:** No server-side patch queue is required for this spec; optional future extension may store the queue on the backend.
- **Automatic creation of empty files on the device:** The spec only documents the single command; the UI is not required to execute it on the device.
- **Full file upload of patches:** The primary path is paste-of-content; the existing file upload feature remains as-is and is not replaced.

---

## 7. UI mockup / wireframe (reference)

```
+------------------------------------------+  +---------------------------+
|                                          |  | Patch queue               |
|  Terminal (rtty)                         |  | ------------------------- |
|                                          |  | [1] 0001-foo.patch   done |
|  $ cat > 0003-baz.patch << 'EOF'         |  | [2] 0002-bar.patch   done |
|  (paste here)                             |  | [3] 0003-baz.patch  current|
|                                          |  | [4] 0004-qux.patch pending|
|                                          |  | ...                       |
|                                          |  | [Paste next patch]        |
|                                          |  | (3 of 12)                 |
+------------------------------------------+  +---------------------------+
```

- Terminal occupies main area; patch panel is a small side panel or drawer.
- Queue shows index, filename, status; “Paste next” sends clipboard to terminal and advances.

---

## 8. Implementation notes

- **Code-snippet context:** Because this repo does not contain the app source, implementation is via a **code snippet** (userscript, extension, or injected script) that runs against the built/minified app. The snippet must locate or hook the existing paste/WebSocket send path and add throttling and queue behavior as described above.
- **Throttling:** When sending paste content to the terminal, send in chunks (e.g. every N ms, or every frame) such that the effective rate is at most X characters per second. X should be configurable (e.g. default 500–2000); implementation may expose this as a setting or constant in the snippet.
- **Reuse:** The snippet should reuse the same WebSocket send mechanism the app uses for terminal data (e.g. the binary message format with type 0 and UTF-8 payload); no server or protocol change is required. Throttling is implemented by splitting the payload into smaller pieces and sending them over time instead of in one call.
- **State:** Queue and current index can live in the snippet’s own state (e.g. closure or module scope); optional persistence via `sessionStorage` as noted in 5.1.
- **Repository/commit UI (2.1, 2.2):** If the snippet cannot access a real file system or git, “recent repos” and “select from folder” may be implemented as a saved list of paths plus a text input or dialog; branch and start/end commit may be text inputs. The important part is that the **patch list** and **subfolder** are well-defined so that file-path input (2.3) is unambiguous.

---

## 9. i18n

All user-facing strings (e.g. “Paste next patch”, “Patch queue”, “3 of 12”, “Set queue from clipboard”, status labels) must be localizable. Add keys to [ui/src/lang/locales/en.json](ui/src/lang/locales/en.json) and [ui/src/lang/locales/zh.json](ui/src/lang/locales/zh.json) as part of implementation.
