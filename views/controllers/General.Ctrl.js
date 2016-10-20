(function() {
  'use strict';
  angular
  .module('app')
  .controller('GeneralCtrl', GeneralCtrl);

  GeneralCtrl.$inject = ['$http', '$alert', '$scope', '$filter'];
  function GeneralCtrl($http, $alert, $scope, $filter) {
    var vm = this;
    
}
})();
