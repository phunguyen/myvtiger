var app = angular.module('myvtiger', ['ionic', 'myvtiger.controllers', 'myvtiger.services'])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'login.html',
        controller: 'LoginCtrl'
    }).state('page11', {
        url: '/signup',
        templateUrl: 'page11.html',
        controller: 'SignupCtrl'
    }).state('page12', {
        url: '/home',
        templateUrl: 'page12.html',
        controller: 'HomeCtrl'
    });
    $urlRouterProvider.otherwise('/login');
})

.run(function($ionicPlatform, $rootScope, $ionicLoading, $location, $timeout, SessionFactory) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
    $rootScope.authktd = false;
    $rootScope.showLoading = function(msg) {
        $ionicLoading.show({
            template: msg || 'Loading',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
        });
    }
    $rootScope.hideLoading = function() {
        $ionicLoading.hide();
    };
    $rootScope.toast = function(msg) {
        $rootScope.showLoading(msg);
        $timeout(function() {
            $rootScope.hideLoading();
        }, 2999);
    };
    $rootScope.logout = function() {
        SessionFactory.deleteSession();
        $location.path('/login');
    }
})