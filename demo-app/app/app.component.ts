import { IComponentOptions } from 'angular';

export class AppComponent implements IComponentOptions {
  static NAME: string = 'myApp';

  template: string = require<string>('./app.component.html');
}