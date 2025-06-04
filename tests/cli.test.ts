import { execSync } from "node:child_process";

describe("gen-cuid2 CLI", () => {
  const cliPath = "dist/index.js"; // Path to your compiled CLI

  it("should generate a single CUID2 ID by default", () => {
    const output = execSync(`node ${cliPath}`).toString().trim();
    expect(output).toMatch(/^[a-z0-9]{24}$/); // default length 24, lowercase + digits
  });

  it("should generate multiple IDs when --count is specified", () => {
    const output = execSync(`node ${cliPath} --count 3`).toString().trim();
    const lines = output.split("\n");
    expect(lines.length).toBe(3);
    lines.forEach((line) => expect(line).toMatch(/^[a-z0-9]{24}$/));
  });

  it("should generate IDs of specified length when --length is used", () => {
    const length = 10;
    const output = execSync(`node ${cliPath} --length ${length}`)
      .toString()
      .trim();
    expect(output.length).toBe(length);
  });
});
