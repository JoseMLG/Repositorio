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

    //Datos del controlador
    vm.Instituciones = [];

    //Asignacion de funciones
    vm.listarInstituciones = listarInstituciones;

    //Autoinicio de Funciones
    listarInstituciones();

    //Funciones del controlador
    function listarInstituciones(){
      vm.Instituciones = [];
      console.log("Obteniendo universidades");
      $http.post('app/php/mysql/queries/instituciones/listarInstituciones.php', {})
      .success(function(response){
        if(response.estado === '0'){
          console.log("Error al listar las instituciones");
          showAlert('Error ',response.mensaje,'danger');
        }else if(response.estado === '1'){
          console.log("Registro completo");
          vm.Instituciones = response.mensaje;
          ordenarColecciones();
        }else{
            console.log(response);
            console.log("Error al listar las instituciones");
            showAlert('Error ','El registro no se pudo completar','danger');
        }
      })
      .error(function(response){
        console.log("Error al listar las instituciones");
        showAlert('Error','Sin acceso al servidor','danger');
      });
    }

    function ordenarColecciones(){
      console.log(vm.Instituciones);
    }

    function showAlert(titulo, mensaje, tipo) {
      var myAlert = $alert({title: titulo, content: mensaje, placement: 'top-right', duration: 2, type: tipo, keyboard: true, show: false});
      myAlert.$promise.then(myAlert.show);
    };
}
})();
