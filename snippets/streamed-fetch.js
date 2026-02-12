/**
 * Streamed fetch: send the request body in a throttled ReadableStream
 * instead of one large POST. Uses chunked transfer encoding.
 *
 * Use this in place of a single fetch() when the body is large and you
 * want to stream it (e.g. for /api/hid/print).
 *
 * @param {string} url - Same as fetch(url)
 * @param {RequestInit} options - Same as fetch options. options.body (string) will be streamed.
 * @param {Object} streamOpts - { charsPerSecond?: number, chunkSize?: number }
 * @returns {Promise<Response>} - Same as fetch()
 */
export function streamedFetch(url, options = {}, streamOpts = {}) {
  const { charsPerSecond = 2000, chunkSize: rawChunkSize } = streamOpts;
  const body = options.body;
  const rest = { ...options };

  if (typeof body !== "string" || body.length === 0) {
    return fetch(url, options);
  }

  const chunkSize = Math.max(
    1,
    rawChunkSize ?? Math.max(1, Math.floor(charsPerSecond / 10))
  );
  const intervalMs = Math.round((chunkSize / charsPerSecond) * 1000);

  const stream = new ReadableStream({
    start(controller) {
      let i = 0;
      function push() {
        if (i >= body.length) {
          controller.close();
          return;
        }
        const chunk = body.slice(i, i + chunkSize);
        i += chunkSize;
        controller.enqueue(new TextEncoder().encode(chunk));
        if (i < body.length) {
          setTimeout(push, intervalMs);
        } else {
          controller.close();
        }
      }
      push();
    },
  });

  const headers = new Headers(rest.headers);
  if (!headers.has("content-type")) {
    headers.set("content-type", "application/x-www-form-urlencoded");
  }
  rest.body = stream;
  rest.headers = headers;
  return fetch(url, rest);
}

/**
 * Example: replace a single fetch with streamed fetch
 *
 * Before (single fetch):
 *   fetch("https://.../api/hid/print?limit=0&keymap=en-us", {
 *     method: "POST",
 *     headers: { "content-type": "application/x-www-form-urlencoded", ... },
 *     body: hugeString,
 *     credentials: "include"
 *   });
 *
 * After (streamed):
 *   streamedFetch("https://.../api/hid/print?limit=0&keymap=en-us", {
 *     method: "POST",
 *     headers: { "content-type": "application/x-www-form-urlencoded", ... },
 *     body: hugeString,
 *     credentials: "include"
 *   }, { charsPerSecond: 2000 });
 */

// When loaded as a script (no import), expose globally
if (typeof window !== "undefined") {
  window.streamedFetch = streamedFetch;
}
