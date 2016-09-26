export interface IGreetingService {
  greet(name: string, language?: string);
}

export class GreetingService implements IGreetingService {
  static NAME: string = 'greetingService';

  greet(name: string, language: string = 'en') {
    switch (language) {
      case 'en':
        return `Hello ${name}!`;
      case 'es':
        return `Hola ${name}!`;
      default:
        throw new Error(`Unsupported language: ${language}`);
    }
  }
}