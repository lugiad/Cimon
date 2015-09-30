/**
 * Created by Administrator on 2015/9/29.
 */
angular.module('insurance',['insurance.controllers','insurance.directives','ui.router','ngTouch'])
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app', {
            url: '/app',
            views: {
                'main': {
                    templateUrl: 'templates/view-insurance-detail.html',
                    controller: 'InsuranceCtrl'
                }
            }
        })
        .state('form', {
            url: '/form/:fee',
            views: {
                'main': {
                    templateUrl: 'templates/view-form.html',
                    controller: 'FormCtrl'
                }
            }
        })

    $urlRouterProvider.otherwise('/app');
});
