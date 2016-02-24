angular.module('cars')
  .controller('carsCtrl', function ($scope, $firebaseArray, carsRef) {
    $scope.cars = $firebaseArray(carsRef)
  })
