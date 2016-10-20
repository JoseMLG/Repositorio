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

    //Datos del controlador
    vm.Institucion = null;
    vm.Colecciones = [];

    //Asignacion de funciones
    vm.listarColecciones = listarColecciones;

    //Funciones del controlador
    function listarInstituciones(){
      if(vm.Institucion == null){
        return;
      }
      console.log("Obteniendo universidades");
      $http.post('app/php/mysql/queries/institucion/listarColecciones.php', {datas: vm.Institucion})
      .success(function(response){
        if(response.estado === '0'){
          console.log("Error al listar las colecciones");
          showAlert('Error ',response.mensaje,'danger');
        }else if(response.estado === '1'){
          vm.Colecciones = response.mensaje;
        }else{
            console.log(response);
            console.log("Error al listar las colecciones");
            showAlert('Error ','Error al cargar los datos','danger');
        }
      })
      .error(function(response){
        console.log("Error al listar las colecciones");
        showAlert('Error','Sin acceso al servidor','danger');
      });
    }
    function showAlert(titulo, mensaje, tipo) {
      var myAlert = $alert({title: titulo, content: mensaje, placement: 'top-right', duration: 2, type: tipo, keyboard: true, show: false});
      myAlert.$promise.then(myAlert.show);
    };
}
})();
