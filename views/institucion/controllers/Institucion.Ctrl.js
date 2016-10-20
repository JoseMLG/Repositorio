(function() {
  'use strict';
  angular
  .module('app')
  .controller('InstitucionCtrl', InstitucionCtrl);

  InstitucionCtrl.$inject = ['$http', '$alert', '$scope', '$filter', '$sessions','$stateParams'];
  function InstitucionCtrl($http, $alert, $scope, $filter, $sessions, $stateParams) {
    var vm = this;

    //Datos del administrador logueado
    vm.DatosLogin = $sessions.getSession('0');
    vm.Buscando = true;

    //Datos del controlador
    vm.Institucion = null;
    vm.Colecciones = [];

    //Asignacion de funciones

    //Autoinicio de funciones
    obtenerInstitucion();

    //Funciones del controlador
    function obtenerInstitucion(){
      console.log("Obteniendo institucion");
      $http.post('app/php/mysql/queries/instituciones/obtenerInstitucion.php', {data: $stateParams.params})
      .success(function(response){
        if(response.estado === '0'){
          console.log("Error al listar la institucion");
          showAlert('Error ',response.mensaje,'danger');
        }else if(response.estado === '1'){
          vm.Institucion = response.mensaje;
          console.log(vm.Institucion);
        }else{
            console.log(response);
            console.log("Error al obtener la institucion");
            showAlert('Error ','No se pudo obtener la institucion','danger');
        }
        vm.Buscando = false;
      })
      .error(function(response){
        console.log("Error al listar las instituciones");
        showAlert('Error','Sin acceso al servidor','danger');
        vm.Buscando = false;
      });
    }

    function showAlert(titulo, mensaje, tipo) {
      var myAlert = $alert({title: titulo, content: mensaje, placement: 'top-right', duration: 2, type: tipo, keyboard: true, show: false});
      myAlert.$promise.then(myAlert.show);
    };
}
})();
