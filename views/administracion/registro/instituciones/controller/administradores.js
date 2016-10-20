(function() {
  'use strict';
  angular
  .module('app')
  .controller('RAdministradorICtrl', RAdministradorICtrl);

  RAdministradorICtrl.$inject = ['$http', '$alert', '$scope', '$filter'];
  function RAdministradorICtrl($http, $alert, $scope, $filter) {
    var vm = this;

    //Datos del controlador
    vm.DatosAdministrador = {
      ClaveInstitucion: '',
      Nombre: '',
      Usuario: '',
      Clave: ''
    };

    //Asignaciones de funciones
    vm.RegistrarAdministrador = RegistrarAdministrador;

    //Funciones del controlador
    function RegistrarAdministrador(){
      console.log("Registrando administrador");
      $http.post('app/php/mysql/queries/admin/registro/administrador/registrar.php', {datas: vm.DatosAdministrador})
      .success(function(response){
        if(response.estado === '0'){
          console.log("Registro erroneo");
          showAlert('Error ',response.mensaje,'danger');
        }else if(response.estado === '1'){
          console.log("Registro completo");
          showAlert('Completado! ',"Solicitudes actualizadas",'success');
        }else{
            console.log(response);
            console.log("Registro erroneo");
            showAlert('Error ','El registro no se pudo completar','danger');
        }
      })
      .error(function(response){
        console.log("Registro erroneo");
        showAlert('Error','Sin acceso al servidor','danger');
      });
    }
}
})();
