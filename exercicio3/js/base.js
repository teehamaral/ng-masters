if(!window.Global){
    window.Global = {};
}
if(!Global.angular_dependencies){
    Global.angular_dependencies = ['myalerts'];
}

angular.module("myApp", Global.angular_dependencies);
angular.module("myApp").config(function($interpolateProvider){
	$interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});