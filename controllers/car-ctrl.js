angular.module('cars')
  .controller('carCtrl', function ($scope, carRef, commentsRef, $firebaseObject, $firebaseArray) {
    $scope.car = $firebaseObject(carRef)
    $scope.comments = $firebaseArray(commentsRef)

    $scope.sendComment = function () {
      $scope.comments.$add({
        text: $scope.newComment,
        timestamp: new Date().getTime()
      })
      $scope.newComment = ''
    }
  })
