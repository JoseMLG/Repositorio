(function() {
  'use strict';
  angular
  .module('app')
  .controller('RInstitucionesCtrl', RInstitucionesCtrl);

  RInstitucionesCtrl.$inject = ['$http', '$alert', '$scope', '$filter', '$sessions'];
  function RInstitucionesCtrl($http, $alert, $scope, $filter, $sessions) {
    var vm = this;

    //Datos del administrador logueado
    vm.DatosLogin = $sessions.getSession('0');

    //Datos del controlador
    vm.DatosInstitucion = {
      ClaveInstitucion: '',
      Nombre: '',
      Direccion: '',
      Logo: '',
      Telefono: '',
      Correo: ''
    };

    vm.DatosAdministrador = {
      ClaveInstitucion: '',
      Nombre: '',
      Usuario: '',
      Clave: ''
    };

    vm.DatosCorreoInstitucional = {
      ClaveInstitucion: '',
      Formato: '',
      Tipo: ''
    }

    //Asignaciones de funciones
    vm.RegistrarInstitucion = RegistrarInstitucion;
    vm.RegistrarAdministrador = RegistrarAdministrador;
    vm.RegistrarCorreoInstitucional = RegistrarCorreoInstitucional;

    //Funciones del controlador
    function RegistrarInstitucion(){
      console.log("Registrando institucion");
      $http.post('app/php/mysql/queries/admin/registro/institucion/registrar.php', {datas: vm.DatosInstitucion})
      .success(function(response){
        if(response.estado === '0'){
          console.log("Registro erroneo");
          showAlert('Error ',response.mensaje,'danger');
        }else if(response.estado === '1'){
          console.log("Registro completo");
          showAlert('Completado! ',response.mensaje,'success');
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

    function RegistrarAdministrador(){
      console.log("Registrando administrador");
      $http.post('app/php/mysql/queries/admin/registro/administrador/registrar.php', {datas: vm.DatosAdministrador})
      .success(function(response){
        if(response.estado === '0'){
          console.log("Registro erroneo");
          showAlert('Error ',response.mensaje,'danger');
        }else if(response.estado === '1'){
          console.log("Registro completo");
          showAlert('Completado! ',response.mensaje,'success');
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

    function RegistrarCorreoInstitucional(){
      console.log("Registrando correo");
      $http.post('app/php/mysql/queries/admin/registro/correo/registrar.php', {datas: vm.DatosCorreoInstitucional, user: vm.DatosLogin})
      .success(function(response){
        if(response.estado === '0'){
          console.log("Registro erroneo");
          showAlert('Error ',response.mensaje,'danger');
        }else if(response.estado === '1'){
          console.log("Registro completo");
          showAlert('Completado! ',response.mensaje,'success');
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
