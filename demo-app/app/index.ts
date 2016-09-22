import * as ng from 'angular';

import { MyComponentsModule } from 'my-components';

import { AppComponent } from './app.component';

export const AppModule: ng.IModule = ng
  .module('app', [
    MyComponentsModule
  ].map(mod => mod.name))
  .component(AppComponent.NAME, new AppComponent());