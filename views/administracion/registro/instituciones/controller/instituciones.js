(function() {
  'use strict';
  angular
  .module('app')
  .controller('RInstitucionesCtrl', RInstitucionesCtrl);

  RInstitucionesCtrl.$inject = ['$http', '$alert', '$scope', '$filter'];
  function RInstitucionesCtrl($http, $alert, $scope, $filter) {
    var vm = this;

    //Datos del controlador
    vm.DatosInstitucion = {
      ClaveInstitucion: '',
      Nombre: '',
      Direccion: '',
      Logo: '',
      Telefono: '',
      Correo: ''
    };

    //Asignaciones de funciones
    vm.RegistrarInstitucion = RegistrarInstitucion;

    //Funciones del controlador
    function RegistrarInstitucion(){
      console.log("Registrando institucion");
      $http.post('app/php/mysql/queries/admin/registro/institucion/registrar.php', {})
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
