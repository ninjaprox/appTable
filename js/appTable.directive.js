(function() {
    'use strict';

    angular.module('app')
        .directive('appTable', [function() {
            return {
                restrict: 'E',
                templateUrl: function(element, attrs) {
                    return 'template/appTable-' + attrs.type + '.html';
                },
                scope: {
                    data: '=',
                    fields: '=?',
                    fixedFields: '=?',
                    fluidFields: '=?',
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
                    vm.noData = true;

                    init();

                    function init() {
                        // Extract headers
                        vm.headers = extractHeaders(vm.fields);
                        vm.fixedHeaders = extractHeaders(vm.fixedFields);
                        vm.fluidHeaders = extractHeaders(vm.fluidFields);

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

                        // Watch for data
                        $scope.$watchCollection('appTableCtrl.data', function(value) {
                            vm.noData = !value || value.length == 0;
                        });
                    }

                    // Privates
                    function extractHeaders(fields) {
                        if (!fields) {
                            return null;
                        }

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