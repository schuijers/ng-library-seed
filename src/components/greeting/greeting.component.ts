import { GreetingController } from './greeting.controller';

export const GreetingComponent = {
  controller: GreetingController,
  name: 'greeting',
  template: require<string>('./greeting.component.html')
};