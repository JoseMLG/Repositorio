(function() {
  'use strict';
  angular
  .module('app')
  .controller('InstitucionesCtrl', InstitucionesCtrl);

  InstitucionesCtrl.$inject = ['$http', '$alert', '$scope', '$filter', '$sessions'];
  function InstitucionesCtrl($http, $alert, $scope, $filter, $sessions) {
    var vm = this;

    //Datos del administrador logueado
    vm.DatosLogin = $sessions.getSession('0');

}
})();
