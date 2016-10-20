(function() {
  'use strict';
  angular
  .module('app')
  .factory('$sessions', Sessions)
  .run(Auth);

  function Sessions() {
    return{
      getSession: function(key){
        return JSON.parse(sessionStorage.getItem(key));
      },
      setSession: function(key,list){
        return sessionStorage.setItem(key, JSON.stringify(list));
      },
      unset: function(key){
        return sessionStorage.removeItem(key);
      },
      clear: function(){
        return sessionStorage.clear();
      }
    };
  }

  Auth.$inject = ['$rootScope', '$state', '$sessions'];
  function Auth($rootScope,   $state, $sessions) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams){
      var user = $sessions.getSession('user');
      if(toState.data !== undefined){
        if(user != null){
          console.log(toState.name);
          switch (toState.name) {
            case 'app.empleados.agregar':
            if(user.REmpleado != '1'){
              event.preventDefault();
              console.log("Denegado");
              $state.go('app.dashboard');
            }
            break;
            default:
          }
        }
        else{
          event.preventDefault();
          console.log("Denegado");
        }
      }
      else{
        if(toState.name === 'auth.login'){
          if(user != null){
            event.preventDefault();
            console.log("Ya logueado");
            $state.go('app.dashboard');
          }
        }
        else{
          event.preventDefault();
          $state.go('auth.login');
        }
      }
    });
  }

})();
