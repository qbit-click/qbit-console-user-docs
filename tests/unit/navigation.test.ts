import { existsSync } from "node:fs";
import { resolve } from "node:path";

import { describe, expect, it } from "vitest";

import { enNav, enSidebar, faNav, faSidebar } from "../../docs/.vitepress/site";

const markdownPathForLink = (link: string) => {
  const relative = link.replace(/^\//, "");
  return resolve(process.cwd(), "docs", `${relative}.md`);
};

describe("documentation navigation", () => {
  it("keeps Persian and English guide coverage in parity", () => {
    expect(faSidebar).toHaveLength(enSidebar.length);
    expect(faSidebar).toHaveLength(10);

    const faSlugs = faSidebar.map(({ link }) => link.replace(/^\/guide\//, ""));
    const enSlugs = enSidebar.map(({ link }) => link.replace(/^\/en\/guide\//, ""));

    expect(enSlugs).toEqual(faSlugs);
  });

  it("points every sidebar item at a real Markdown document", () => {
    for (const item of [...faSidebar, ...enSidebar]) {
      expect(existsSync(markdownPathForLink(item.link)), item.link).toBe(true);
    }
  });

  it("keeps top-level navigation inside documented guide routes", () => {
    const sidebarLinks = new Set([...faSidebar, ...enSidebar].map(({ link }) => link));

    for (const item of [...faNav, ...enNav]) {
      expect(sidebarLinks.has(item.link), item.link).toBe(true);
    }
  });
});
