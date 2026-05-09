## 2025-04-28 - Add Standard Security Headers
**Vulnerability:** The application was missing standard HTTP security headers (like HSTS, X-Frame-Options, X-Content-Type-Options), which help mitigate various attacks such as Clickjacking and MIME-sniffing.
**Learning:** Next.js allows configuring these headers easily within the `next.config.ts` file using the `headers()` async function, applying them globally to all routes (`/(.*)`).
**Prevention:** Include a standard set of security headers in the initial setup of Next.js projects to establish a baseline defense in depth.

## 2026-05-09 - Patch-Level Framework Pins Can Hide Critical Exposure
**Vulnerability:** `next` was pinned at `14.2.4`, which carried multiple known advisories including a critical authorization bypass.
**Learning:** Strict version pinning without routine security upgrades can keep production locked on known-vulnerable framework releases.
**Prevention:** Run dependency audit checks regularly and prioritize non-breaking security patch upgrades for core framework packages.
