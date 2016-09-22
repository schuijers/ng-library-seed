import * as ng from 'angular';
import { assert } from 'chai';

import { HelloWorldComponent } from './hello-world.component';
import { HelloWorldModule } from './index';

let element: JQuery;
let scope: ng.IScope;

describe('HelloWorldComponent', function () {
  beforeEach(() => {
    ng.mock.module(HelloWorldModule.name);
  });

  beforeEach(inject(($compile: ng.ICompileService, $rootScope: ng.IRootScopeService) => {
    element = ng.element('<hello-world></hello-world>');
    scope = $rootScope.$new();

    $compile(element)(scope);
    scope.$digest();
  }));

  it('should display the message "Hello world"', function () {
    let h1 = element.find('h1');
    assert.equal(h1.text(), 'Hello world!');
  });
});