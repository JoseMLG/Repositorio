(function() {
  'use strict';
  angular
  .module('app')
  .controller('InstitucionCtrl', InstitucionCtrl);

  InstitucionCtrl.$inject = ['$http', '$alert', '$scope', '$filter', '$sessions'];
  function InstitucionCtrl($http, $alert, $scope, $filter, $sessions) {
    var vm = this;

    //Datos del administrador logueado
    vm.DatosLogin = $sessions.getSession('0');

}
})();
