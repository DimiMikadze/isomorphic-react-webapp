var app = angular.module('app', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(true);

    $stateProvider
        .state('me', {
            url: "/",
            templateUrl: '/templates/me.html'
        })
        .state('work', {
            url: "/work",
            templateUrl: '/templates/work.html'
        })
        .state('skills', {
            url: "/skills",
            templateUrl: '/templates/skills.html'
        });
}]);