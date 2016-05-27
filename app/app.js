'use strict';

export default angular.module('app', [
    'ui.router', 
    'oc.lazyLoad',
    require('./features/home/home.routing').name,
    require('./features/messages/messages.routing').name
]);
