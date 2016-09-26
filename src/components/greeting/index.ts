import * as ng from 'angular';

import { GreetingComponent } from './greeting.component';
import { GreetingService } from './greeting.service';

export * from './greeting.service';

export const GreetingModule: ng.IModule = ng
  .module('greeting', [])
  .service(GreetingService.NAME, GreetingService)
  .component(GreetingComponent.name, GreetingComponent);