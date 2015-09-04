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
                    selectField: '@',
                    detailField: '@',
                    fixedTableClass: '@',
                    fluidTableClass: '@',
                    customContent: '=?',
                    onDetail: '&',
                    onAdd: '&',
                    onDelete: '&'
                },
                link: function($scope, $element, $attrs) {

                },
                controller: function($scope, $element, $attrs) {
                    var vm = this;

                    // Properties
                    vm.headerNames = [];
                    vm.selectAll = false;
                    vm.selection = {};
                    vm.atLeastOneSelection = false;

                    init();

                    function init() {
                        // Extract headers
                        vm.headers = extractHeaders(vm.fields);

                        // Watch for selection
                        $scope.$watch('appTableCtrl.selectAll', function(selectAll) {
                            angular.forEach(vm.data, function(value) {
                                vm.selection[value[vm.selectField]] = selectAll;
                            });
                        });
                        $scope.$watch('appTableCtrl.selection', function(value) {
                            var selectionCount = 0;

                            angular.forEach(vm.selection, function(value) {
                                if (value) {
                                    selectionCount++;
                                }
                            });
                            vm.atLeastOneSelection = (selectionCount > 0);
                        }, true);
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