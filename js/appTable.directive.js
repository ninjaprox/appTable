(function() {
    'use strict';

    angular.module('app')
        .directive('appTable', [function() {
            return {
                restrict: 'E',
                templateUrl: 'template/appTable-fixed.html',
                scope: {
                    data: '=',
                    type: '@',
                    fields: '=?',
                    fixedFields: '=?',
                    fluidFieldx: '=?',
                    fixedTableClass: '@',
                    fluidTableClass: '@',
                    customContent: '=?',
                    onDetail: '@',
                    onAdd: '@',
                    onDelete: '@'
                },
                link: function($scope, $element, $attrs) {

                },
                controller: function($scope, $element, $attrs) {
                    var vm = this;

                    // Properties
                    vm.headerNames = [];

                    init();

                    function init() {
                        // Extract headers
                        vm.headers = extractHeaders(vm.fields);
                    }

                    // Privates
                    function extractHeaders(fields) {
                        return fields.map(function(field) {
                            return field.columnName || field.fieldName;
                        });
                    }
                },
                controllerAs: 'appTableCtrl',
                bindToController: true
            }
        }]);
})();