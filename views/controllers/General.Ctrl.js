(function() {
  'use strict';
  angular
  .module('app')
  .controller('GeneralCtrl', GeneralCtrl);

  GeneralCtrl.$inject = ['$http', '$alert', '$scope', '$filter', '$sessions'];
  function GeneralCtrl($http, $alert, $scope, $filter, $sessions) {
    var vm = this;

    //Datos de modelos
    vm.InstitucionSeleccionada = null;

    //HEADER
    vm.Tipo = 'Usuario';
    vm.Sesion = {
      Usuario: '',
      Clave: ''
    }

    if($sessions.getSession('1-admin') != null){
      vm.Usuario = $sessions.getSession('1-admin');
    }else if($sessions.getSession('1-user') != null){
      vm.Usuario = $sessions.getSession('1-user');
    }else{
      $sessions.clear();
      vm.Usuario = null;
    }

    //Asignacion de funciones
    vm.IniciarSesion = IniciarSesion;
    vm.CerrarSesion = CerrarSesion;

    //funciones
    function IniciarSesion(){
      if(vm.Tipo == 'Usuario'){
        IniciarUsuario();
      }else if(vm.Tipo == 'Administrador'){
        IniciarAdministrador();
      }
    }

    function IniciarUsuario(){

    }

    function IniciarAdministrador(){
      console.log("Obteniendo administrador");
      $http.post('app/php/mysql/queries/sesion/iniciarAdministrador.php', {datas: vm.Sesion})
      .success(function(response){
        if(response.estado === '0'){
          console.log("Error al inicar sesion");
          showAlert('Error ',response.mensaje,'danger');
        }else if(response.estado === '1'){
          response.mensaje.TipoU = "Adm"
          $sessions.setSession('1-admin', response.mensaje);
          vm.Usuario = $sessions.getSession('1-admin');
          console.log(vm.Usuario);
        }else{
            console.log(response);
              console.log("Error al inicar sesion");
            showAlert('Error ','No se pudo iniciar la sesion','danger');
        }
        vm.Buscando = false;
      })
      .error(function(response){
        console.log("Error al inicar sesion");
        showAlert('Error','Sin acceso al servidor','danger');
        vm.Buscando = false;
      });
    }

    function CerrarSesion(){
      $sessions.clear();
      vm.Usuario = null;
    }

    function showAlert(titulo, mensaje, tipo) {
      var myAlert = $alert({title: titulo, content: mensaje, placement: 'top-right', duration: 2, type: tipo, keyboard: true, show: false});
      myAlert.$promise.then(myAlert.show);
    };

}
})();
