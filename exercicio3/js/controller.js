angular.module('myApp').controller('MyCtrl', function($scope, MyAlerts){
    
    $scope.m = MyAlerts;
    
    $scope.mostra_alerta = function(){
        MyAlerts.showAlert('Você mostrou um alerta');
    };
    
    $scope.mostra_popup = function(){
        MyAlerts.showPopup('Título do PopUp', 'Uma mensagem muito grande que precisa de um popup pra poder ser visualizada');
    };
    
});