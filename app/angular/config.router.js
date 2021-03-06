(function() {
    'use strict';
    angular
      .module('app')
      .run(runBlock)
      .config(config);

      runBlock.$inject = ['$rootScope', '$state', '$stateParams'];
      function runBlock($rootScope,   $state,   $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;
      }

      config.$inject =  ['$stateProvider', '$urlRouterProvider', 'MODULE_CONFIG'];
      function config( $stateProvider,   $urlRouterProvider,  MODULE_CONFIG) {

        $urlRouterProvider
          .otherwise('/raa/inicio');
        $stateProvider
          .state('raa', {
            abstract: true,
            url: '/raa',
            views: {
              '': {
                templateUrl: 'views/layout.html',
                controller: "GeneralCtrl",
                controllerAs: "general",
                resolve: load(['mgcrea.ngStrap', 'views/controllers/General.Ctrl.js'])
              }
            }
          })

          //Inicio
            .state('raa.inicio', {
              url: '/inicio',
              templateUrl: 'views/inicio.html',
              data : { title: 'Inicio del RAA'},
              controller: "InicioCtrl",
              controllerAs: "Inicio",
              resolve: load(['mgcrea.ngStrap', 'views/controllers/Inicio.Ctrl.js'])
            })

            //Explorar
             .state('raa.explorar', {
              url: '/explorar',
              templateUrl: 'views/explorar/explorar.html',
              data : { title: 'Explorar Repositorio'}
            })

              //Acerca
             .state('raa.acerca', {
              url: '/acerca',
              templateUrl: 'views/acerca/acerca.html',
              data : { title: 'Acerca'}
            })


              //Subir
             .state('raa.subir', {
              url: '/subir',
              templateUrl: 'views/subir/subir.html',
              data : { title: 'Subir Archivos'}
            })

          //instituciones
            .state('raa.instituciones', {
              url: '/instituciones',
              templateUrl: 'views/instituciones/inicio.html',
              data : { title: 'Colecciones de las universidades'},
              controller: "InstitucionesCtrl",
              controllerAs: "instituciones",
              resolve: load(['mgcrea.ngStrap', 'views/instituciones/controllers/Instituciones.Ctrl.js'])
            })

            .state('raa.institucion', {
              url: '/institucion/:params',
              templateUrl: 'views/institucion/inicio.html',
              controller: "InstitucionCtrl",
              controllerAs: "institucion",
              resolve: load(['mgcrea.ngStrap', 'views/institucion/controllers/Institucion.Ctrl.js'])
            })

              //Registrar Institución
             .state('raa.registrarins', {
              url: '/registrarins',
              templateUrl: 'views/administracion/registro/instituciones/registrar.html',
              data : { title: 'Registrar Institución'}
               controller: "RInstitucionesCtrl",
              controllerAs: "institucionreg",
              resolve: load(['mgcrea.ngStrap', 'views/administracion/registro/instituciones/controller/registrar.js'])
            })

              //Registrar Usuario
             .state('raa.registrarusu', {
              url: '/registrarusu',
              templateUrl: 'views/administracion/registro/usuarios/registrar.html',
              data : { title: 'Registrar Usuario'}
            })

             .state('raa.mostrar', {
              url: '/mostrar',
              templateUrl: 'views/mostrar/mostrar.html',
              data : { title: 'Publicación'}
            })



            //Otras vistas
            .state('raa.docs', {
              url: '/documentacion',
              templateUrl: 'views/documentacion/main.html',
              data : { title: 'Documentacion'}
            })

            .state('404', {
              url: '/404',
              templateUrl: 'views/misc/404.html'
            })
            .state('505', {
              url: '/505',
              templateUrl: 'views/misc/505.html'
            })

          ;

        function load(srcs, callback) {
          return {
              deps: ['$ocLazyLoad', '$q',
                function( $ocLazyLoad, $q ){
                  var deferred = $q.defer();
                  var promise  = false;
                  srcs = angular.isArray(srcs) ? srcs : srcs.split(/\s+/);
                  if(!promise){
                    promise = deferred.promise;
                  }
                  angular.forEach(srcs, function(src) {
                    promise = promise.then( function(){
                      angular.forEach(MODULE_CONFIG, function(module) {
                        if( module.name == src){
                          src = module.module ? module.name : module.files;
                        }
                      });
                      return $ocLazyLoad.load(src);
                    } );
                  });
                  deferred.resolve();
                  return callback ? promise.then(function(){ return callback(); }) : promise;
              }]
          }
        }
      }
})();
