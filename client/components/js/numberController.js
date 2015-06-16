angular.module('gdirectoryApp', [])
  .controller('numberController', function($scope) {

    $scope.numbers = [];
    $scope.addNumber = function(number) {
       if($scope.numbers.length > 6)
            return;
        $scope.numbers.push(number);
    }

  });
