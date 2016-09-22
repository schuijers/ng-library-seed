interface RequireContext {
  keys(): string[];
  <T>(id: string): T;
  resolve(id: string): string;
}

interface RequireFunction {
  <T>(path: string): T;
  (paths: string[], callback: (...modules: any[]) => void): void;
  context: (path: string, deep?: boolean, filter?: RegExp) => RequireContext;
}

declare var require: RequireFunction;