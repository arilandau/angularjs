var helloWorldApp = angular.module('helloWorldApp', [
    'ngRoute',     
    'helloWorldControllers', 
    'ngResource'
]);

helloWorldApp.config(['$routeProvider', '$locationProvider', 
    function($routeProvider, $locationProvider) {
        $routeProvider.
            when('/', {
            templateUrl: './partials/main.html',
            controller: 'MainCtrl'
        }).when('/show', {
            templateUrl: './partials/show.html',
            controller: 'ShowCtrl'
        }).otherwise({
            templateUrl: './partials/main.html',
            controller: 'MainCtrl'
        });
        
    $locationProvider.html5Mode(false).hashPrefix('!');
//    $locationProvider.html5mode(false).hashPrefix('!');
        
    }]);
