(function() {
  'use strict';
  angular
  .module('app')
  .controller('InicioCtrl', InicioCtrl);

  InicioCtrl.$inject = ['$http', '$alert', '$scope', '$filter'];
  function InicioCtrl($http, $alert, $scope, $filter) {
    var vm = this;

}
})();
