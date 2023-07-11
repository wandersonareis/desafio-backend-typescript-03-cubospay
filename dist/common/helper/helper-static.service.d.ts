export declare class Helper {
    static generateApiKey(): string;
    static filterProperties<T extends object>(object: T, properties: (keyof T)[]): Partial<T>;
}
