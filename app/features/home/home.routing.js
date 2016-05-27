'use strict';

function homeRouting($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            template: require('./views/home.html'),
            controller: 'HomeController as vm',
            resolve: {
                loadHomeController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            // load whole module
                            let module = require('./controllers/home.controller');
                            $ocLazyLoad.load({
                                name: module.name
                            });
                            resolve(module.controller);
                        });
                    });
                }
            }
        }).state('home.about', {
            url: '/about',
            template: require('./views/home.about.html'),
            controller: 'HomeAboutController as vm',
            resolve: {
                loadHomeController: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            // load whole module
                            let module = require('./controllers/home.about.controller');
                            $ocLazyLoad.load({
                                name: module.name
                            });
                            resolve(module.controller);
                        });
                    });
                }
            }
        });
}

export default angular.module('home.routing', [])
    .config(homeRouting);
