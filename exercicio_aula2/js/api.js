angular.module('apiGIT', []);
angular.module('apiGIT').factory('apiGIT', function($http){
    
    var api = {};
	api.load = function(user, repository){
        var url = 'https://api.github.com/repos/' + user + '/' + repository + '/issues';
        return $http.get(url);
    }
	return api;
    
});