angular.module('popup', []);

angular.module('popup').directive('mypopup', function() {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: 'popup.html',
        scope: {
            visible: '=',
            titulo: '@',
        },
        controller: function ($scope) {
            $scope.close = function(){
                $scope.visible = false;
            }
        }
    }
});