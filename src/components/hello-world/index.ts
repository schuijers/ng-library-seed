import * as ng from 'angular';

import { HelloWorldComponent } from './hello-world.component';

export const HelloWorldModule: ng.IModule = ng
  .module('helloWorld', [])
  .component(HelloWorldComponent.NAME, new HelloWorldComponent());