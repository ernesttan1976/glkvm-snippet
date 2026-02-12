# i18n keys for Advanced Clipboard / Patch-Paste UI

Add these keys to the main app locale files when integrating the snippet:

- **en.json** path: `ui/src/lang/locales/en.json`
- **zh.json** path: `ui/src/lang/locales/zh.json`

## Keys (under `main` or equivalent namespace)

| Key | English (en) | 中文 (zh) |
|-----|--------------|-----------|
| `main.patchQueue` | Patch queue | 补丁队列 |
| `main.pasteNextPatch` | Paste next patch | 粘贴下一个补丁 |
| `main.setQueueFromClipboard` | Set queue from clipboard | 从剪贴板设置队列 |
| `main.clearQueue` | Clear queue | 清空队列 |
| `main.patchQueueEmpty` | Patch list is empty. Paste a list of patch filenames (one per line) first. | 补丁列表为空。请先粘贴补丁文件名列表（每行一个）。 |
| `main.patchQueueProgress` | `{current}` of `{total}` | 第 `{current}` 个，共 `{total}` 个 |
| `main.patchStatusPending` | pending | 待处理 |
| `main.patchStatusCurrent` | current | 当前 |
| `main.patchStatusDone` | done | 已完成 |
| `main.patchHeaderWarning` | Content does not look like a patch (expected "diff --git" or "From " at start). Send anyway? | 内容不像补丁（开头应为 "diff --git" 或 "From "）。是否仍要发送？ |

## Note

- `main.patchQueueProgress` uses placeholders `{current}` and `{total}`; the snippet replaces them with the current index and total count.
- If `Lt.warning` is not available in the host app, the optional patch-header check will not show a warning (only `Lt.error` is used for blocking errors).
