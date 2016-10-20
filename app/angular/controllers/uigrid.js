// code style: https://github.com/johnpapa/angular-styleguide

(function() {
    'use strict';
    angular
        .module('app')
        .controller('UiGridCtrl', UiGridCtrl);
        UiGridCtrl.$inject = ['$scope', 'uiGridConstants'];
        function UiGridCtrl($scope, uiGridConstants) {
          var vm = $scope;

          vm.gridOptionsComplex = {
            enableFiltering: true,
            showFooter: false,
            rowHeight: 36,
            columnDefs: [
              { name: 'folio', aggregationType: uiGridConstants.aggregationTypes.count},
              { name: 'empleado', enableCellEdit: false,},
              { name: 'monto', aggregationType: uiGridConstants.aggregationTypes.avg },
              { name: 'fecha', enableFiltering: true }
            ],
            data: [
              {
                  "folio": 1022542,
                  "empleado": "José Manuel",
                  "monto": 128,
                  "fecha": "25/08/2016"
              },
              {
                  "folio": 9022542,
                  "empleado": "Leonardo Prado",
                  "monto": 768,
                  "fecha": "25/08/2016"
              },
              {
                  "folio": 1075542,
                  "empleado": "Medardo Requena",
                  "monto": 1358,
                  "fecha": "25/08/2016"
              },
              {
                  "folio": 1090542,
                  "empleado": "Guillermo Willy",
                  "monto": 1968,
                  "fecha": "25/08/2016"
              },
              {
                  "folio": 1054542,
                  "empleado": "Sanchez López",
                  "monto": 8358,
                  "fecha": "25/08/2016"
              },
              {
                  "folio": 122542,
                  "empleado": "Nombre dek agyb enokeadi",
                  "monto": 1358,
                  "fecha": "25/08/2016"
              },
              {
                  "folio": 4022542,
                  "empleado": "Nombre dek agyb enokeadi",
                  "monto": 1358,
                  "fecha": "25/08/2016"
              },
              {
                  "folio": 1022542,
                  "empleado": "José Manuel",
                  "monto": 128,
                  "fecha": "25/08/2016"
              },
              {
                  "folio": 9022542,
                  "empleado": "Leonardo Prado",
                  "monto": 768,
                  "fecha": "25/08/2016"
              },
              {
                  "folio": 1075542,
                  "empleado": "Medardo Requena",
                  "monto": 1358,
                  "fecha": "25/08/2016"
              },
              {
                  "folio": 1090542,
                  "empleado": "Guillermo Willy",
                  "monto": 1968,
                  "fecha": "25/08/2016"
              },
              {
                  "folio": 1054542,
                  "empleado": "Sanchez López",
                  "monto": 8358,
                  "fecha": "25/08/2016"
              },
              {
                  "folio": 122542,
                  "empleado": "Nombre dek agyb enokeadi",
                  "monto": 1358,
                  "fecha": "25/08/2016"
              },
              {
                  "folio": 4022542,
                  "empleado": "Nombre dek agyb enokeadi",
                  "monto": 1358,
                  "fecha": "25/08/2016"
              }
            ]
          };
        }
})();
