import * as ng from 'angular';
import { assert } from 'chai';

import { GreetingService } from './greeting.service';
import { GreetingModule } from './index';

let service: GreetingService;

describe('GreetingService', () => {
  beforeEach(() => {
    ng.mock.module(GreetingModule.name);
  });

  beforeEach(inject((greetingService: GreetingService) => {
    service = greetingService;
  }));

  it('should expose a greet function', () => {
    assert.isDefined(service.greet);
  });

  it('should return an English greeting', () => {
    assert.equal(service.greet('Martijn'), 'Hello Martijn!');
  });

  it('should return a Spanish greeting', () => {
    assert.equal(service.greet('Martijn', 'es'), 'Hola Martijn!');
  });

  it('should throw an exception if the provided language is unsupported', () => {
    assert.throws(() => service.greet('Martijn', 'nl'), 'Unsupported language: nl');
  });
});