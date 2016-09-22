import { IComponentOptions } from 'angular';

export class HelloWorldComponent implements IComponentOptions {
  static NAME: string = 'helloWorld';

  public template: string = require<string>('./hello-world.component.html');
}