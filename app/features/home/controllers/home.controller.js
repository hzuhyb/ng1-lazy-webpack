'use strict';


export default angular.module('home.controller', [])
    .controller('HomeController', function($scope) {
        $scope.showInfo = function() {
            alert('这是homeAbout页面。');
        }
    });
