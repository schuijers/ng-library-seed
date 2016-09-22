import * as ng from 'angular';

import { HelloWorldModule } from './hello-world';

export const MyComponentsModule: ng.IModule = ng
  .module('MyComponents', [
    HelloWorldModule
  ].map(mod => mod.name));