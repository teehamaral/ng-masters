angular.module('apiGIT', []);
angular.module('apiGIT').factory('apiGIT', function($http){
    
    var api = {};
	api.load = function(url){
        return $http.get(url);
    }
	return api;
    
});