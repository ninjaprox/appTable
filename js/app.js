(function() {
    'use strict';

    var app = angular.module('app', []);

    app.controller('MainController', ['$scope', '$sce', function($scope, $sce) {
        $scope.fields = [{
            fieldName: 'field1',
            columnName: 'Field 1'
        }, {
            fieldName: 'field2',
            columnName: 'Field 2'
        }, {
            fieldName: 'field3',
            columnName: 'Field 3'
        }, {
            fieldName: 'field4',
            columnName: 'Field 4',
            customContent: function(content) {
                return $sce.trustAsHtml(content);
            }
        }, {
            fieldName: 'field5',
            columnName: 'Field 5'
        }];
        $scope.fixedFields = [{
            fieldName: 'field1',
            columnName: 'Field 1'
        }];
        $scope.fluidFields = [{
            fieldName: 'field2',
            columnName: 'Field 2',
            customContent: function(content) {
                return $sce.trustAsHtml("<span class='glyphicon glyphicon-trash'></span>");
            }
        }, {
            fieldName: 'field3',
            columnName: 'Field 3'
        }, {
            fieldName: 'field4',
            columnName: 'Field 4'
        }, {
            fieldName: 'field5',
            columnName: 'Field 5'
        }];
        $scope.data = [{
            id: 1,
            field1: 'data',
            field2: 'data',
            field3: 'data',
            field4: 'data',
            field5: 'data'
        }, {
            id: 2,
            field1: 'data',
            field2: 'data',
            field3: 'data',
            field4: 'data',
            field5: 'data'
        }, {
            id: 3,
            field1: 'data',
            field2: 'data',
            field3: 'data',
            field4: 'data',
            field5: 'data'
        }, {
            id: 4,
            field1: 'data',
            field2: 'data',
            field3: 'data',
            field4: 'data',
            field5: 'data'
        }, {
            id: 5,
            field1: 'data',
            field2: 'data',
            field3: 'data',
            field4: 'data',
            field5: 'data'
        }, {
            id: 6,
            field1: 'data',
            field2: 'data',
            field3: 'data',
            field4: 'data',
            field5: 'data'
        }, {
            id: 7,
            field1: 'data',
            field2: 'data',
            field3: 'data',
            field4: 'data',
            field5: 'data'
        }, {
            id: 8,
            field1: 'data',
            field2: 'data',
            field3: 'data',
            field4: 'data',
            field5: 'data'
        }, {
            id: 9,
            field1: 'data',
            field2: 'data',
            field3: 'data',
            field4: 'data',
            field5: 'data'
        }, {
            id: 10,
            field1: 'data',
            field2: 'data',
            field3: 'data',
            field4: 'data',
            field5: 'data'
        }];

        $scope.onDelete = function(selection) {
            console.log('onDelete: ' + JSON.stringify(selection));
        };
        $scope.onAdd = function() {
            console.log('onAdd');
        };
        $scope.onDetail = function(data) {
            console.log('onDetail: ' + JSON.stringify(data));
        };
    }]);
})();