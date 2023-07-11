import { ApiKeyResults, generateApiKey } from 'generate-api-key';

export class Helper {
  static generateApiKey(): string {
    const hash: ApiKeyResults = generateApiKey({
      method: 'uuidv4',
      dashes: false,
      prefix: 'key_',
    });

    return hash as string;
  }

  static filterProperties<T extends object>(
    object: T,
    properties: (keyof T)[],
  ): Partial<T> {
    const partial: Partial<T> = {};

    properties.forEach((property) => {
      if (property in object) {
        partial[property] = object[property];
      }
    });

    return partial;
  }
}
