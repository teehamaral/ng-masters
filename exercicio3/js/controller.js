angular.module('myApp').controller('MyCtrl', function($scope, MyAlerts){
    
    $scope.m = MyAlerts;
    
    $scope.mostra_alerta = function(){
        MyAlerts.showAlert('Você mostrou um alerta.');
    };
    
    $scope.mostra_popup = function(){
        MyAlerts.showPopup('Você mostrou um popup', 'Uma mensagem muito grande precisa de um popup pra poder ser visualizada.');
    };
    
});