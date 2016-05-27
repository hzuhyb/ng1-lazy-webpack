'use strict';

require('./vendor')();
let appModule = require('../app');

angular.element(document).ready(function() {
    angular.bootstrap(document, [appModule.name], {
        // strictDi: true
    });
});
