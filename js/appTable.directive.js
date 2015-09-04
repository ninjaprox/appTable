(function() {
    'use strict';

    angular.module('app')
        .directive('appTable', [function() {
            return {
                restrict: 'E',
                templateUrl: 'template/appTable.html',
                scope: {},
                link: function($scope, $element, $attrs) {

                },
                controller: function($scope, $element, $attrs) {
                    var vm = this;
                },
                controllerAs: 'appTableCtrl'
            }
        }]);
})();