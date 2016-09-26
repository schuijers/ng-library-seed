import * as ng from 'angular';

import { GreetingModule } from './greeting';

export const MyComponentsModule: ng.IModule = ng
  .module('MyComponents', [
    GreetingModule
  ].map(mod => mod.name));