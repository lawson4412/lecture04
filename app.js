(function () {
  'user strict';

  angular.module('myFirstApp',[])

  .controller('MyFirstController',function ($scope) {
    $scope.name = "lawson"
    $scope.sayHello = function (){
      return "Hello Coursera!";
    }
  });

})();
