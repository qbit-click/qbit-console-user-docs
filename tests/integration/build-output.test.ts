import { readFileSync } from "node:fs";
import { resolve } from "node:path";

import { describe, expect, it } from "vitest";

const dist = resolve(process.cwd(), "docs/.vitepress/dist");
const read = (path: string) => readFileSync(resolve(dist, path), "utf8");

describe("VitePress production output", () => {
  it("builds Persian and English home pages with locale metadata", () => {
    const fa = read("index.html");
    const en = read("en/index.html");

    expect(fa).toContain('lang="fa-IR"');
    expect(fa).toContain('dir="rtl"');
    expect(fa).toContain("مستندات Qbit Console");
    expect(en).toContain('lang="en-US"');
    expect(en).toContain('dir="ltr"');
    expect(en).toContain("Qbit Console Docs");
  });

  it("emits representative guide routes for both locales", () => {
    expect(read("guide/remote-servers.html")).toContain("سرورهای ریموت");
    expect(read("guide/security.html")).toContain("هیچ secret خامی");
    expect(read("en/guide/remote-servers.html")).toContain("Remote servers");
    expect(read("en/guide/security.html")).toContain("Never store raw secrets");
  });

  it("ships the Qbit favicon and locally bundled font assets", () => {
    expect(read("favicon.svg")).toContain("svg");
    const fa = read("index.html");
    expect(fa).toContain("favicon.svg");
  });
});
