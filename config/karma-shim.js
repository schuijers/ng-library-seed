require('angular');
require('angular-mocks');

var testContext = require.context('../src', true, /\.spec\.ts/);
testContext.keys().forEach(testContext);