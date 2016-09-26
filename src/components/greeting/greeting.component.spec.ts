import * as ng from 'angular';
import { assert } from 'chai';

import { GreetingComponent } from './greeting.component';
import { GreetingModule } from './index';

let element: JQuery;
let scope: ng.IScope;

describe('GreetingComponent', () => {
  beforeEach(() => {
    ng.mock.module(GreetingModule.name);
  });

  beforeEach(inject(($compile: ng.ICompileService, $rootScope: ng.IRootScopeService) => {
    element = ng.element('<greeting></greeting>');
    scope = $rootScope.$new();

    $compile(element)(scope);
    scope.$digest();
  }));

  it('should display default greetings', () => {
    let heading = element.find('h1');
    let englishGreeting = element.find('span')[0];
    let spanishGreeting = element.find('span')[1];

    assert.equal(heading.text(), 'Greetings!');
    assert.equal(englishGreeting.innerText, 'Hello Martijn!');
    assert.equal(spanishGreeting.innerText, 'Hola Martijn!');
  });

  it('should change the greetings based on the user\'s input', () => {
    let input = element.find('input');
    let englishGreeting = element.find('span')[0];
    let spanishGreeting = element.find('span')[1];

    input.val('John').triggerHandler('input');

    assert.equal(englishGreeting.innerText, 'Hello John!');
    assert.equal(spanishGreeting.innerText, 'Hola John!');
  });
});