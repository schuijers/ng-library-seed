import { IController } from 'angular';

import { IGreetingService } from './greeting.service';

export class GreetingController implements IController {
  private name: string;

  // @ngInject
  constructor(private greetingService: IGreetingService) {
  }

  $onInit() {
    this.name = 'Martijn';
  }

  englishGreeting(): string {
    return this.greetingService.greet(this.name);
  }

  spanishGreeting(): string {
    return this.greetingService.greet(this.name, 'es');
  }
}