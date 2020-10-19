var helloWorldControllers = angular.module('helloWorldControllers', []);

helloWorldControllers.controller('MainCtrl', ['$scope', '$location', '$http',
    function MainCtrl($scope, $location, $http) {
        $scope.message = 'Hello World';
        $scope.master = {};

        $scope.submit = function(user) {
          $scope.master = angular.copy(user);
          console.log("final user", $scope.master)
        };

        $scope.reset = function() {
          $scope.user = angular.copy($scope.master);
        };

        $scope.reset();

    }]);


helloWorldControllers.controller('ShowCtrl', ['$scope', '$location', '$http',
    function ShowCtrl($scope, $location, $http) {
        $scope.message = 'Show World';
    }]);
