(function() {
  'use strict';
  angular
  .module('app')
  .factory('$sessions', Sessions);

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


})();
