declare module "node:fs" {
  export function existsSync(path: string): boolean;
}

declare module "node:fs/promises" {
  export function readFile(path: string, encoding: "utf8"): Promise<string>;
}
