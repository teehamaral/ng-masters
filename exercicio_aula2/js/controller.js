angular.module('myApp').controller('ProgressController', function($scope, loadingModel){
    $scope.model = loadingModel;

    $scope.button = function(){

        if($scope.model.progress_active){
            return 'Carregando...';
        } else {
            return 'Iniciar';
        }

    }

});

angular.module('myApp').controller('IssuesController', function($scope, issuesModel){
    $scope.model = issuesModel;

    $scope.button = function(){

        if($scope.model.loading){
            return 'Carregando...';
        } else {
            return 'Consultar';
        }

    }

})