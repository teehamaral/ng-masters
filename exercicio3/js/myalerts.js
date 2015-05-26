angular.module('myalerts', ['popup']);

angular.module('myalerts').factory('MyAlerts', function($timeout){
	var alert = {
		popup: null,
		alert: null,
		showPopup: showPopup,
		removePopup: removePopup,
		showAlert: showAlert,
		removeAlert: removeAlert,
	};

	function showPopup(title, message, options){
		alert.popup = {
			title: title,
			message: message,
			options: options,
		};
	}

	function removePopup(){
		alert.popup = null;
	}

	function showAlert(message){
		Materialize.toast(message, 3000);
	}

	function removeAlert(){
		alert.alert = null;
	}

	return alert;
});