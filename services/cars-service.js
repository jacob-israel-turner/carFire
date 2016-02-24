angular.module('cars')
  .service('carsService', function () {
    var ref = new Firebase('https://devmtn-demo.firebaseio.com/')
    this.getCarsRef = function () {
      return ref.child('cars')
    }
    this.getCarRef = function (carId) {
      return ref.child('cars').child(carId)
    }
    this.getCommentsRef = function (carId) {
      return ref.child('cars/' + carId + '/comments')
    }
  })
