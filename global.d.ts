declare module 'stein-js-client' {
    export default class SteinStore {
      constructor(url: string);
      read(sheetName: string, options?: Record<string, unknown>): Promise<unknown[]>;
      write(sheetName: string, data: unknown[]): Promise<unknown>;
      delete(sheetName: string, options?: Record<string, unknown>): Promise<unknown>;
      edit(sheetName: string, options?: Record<string, unknown>): Promise<unknown>;
    }
  }
  