angular.module('cars', ['ui.router', 'firebase'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/cars')
    $stateProvider
      .state('cars', {
        url: '/cars',
        templateUrl: 'views/cars.html',
        controller: 'carsCtrl',
        resolve: {
          carsRef: function (carsService) {
            return carsService.getCarsRef()
          }
        }
      })
      .state('car', {
        url: '/cars/:carId',
        templateUrl: 'views/car.html',
        controller: 'carCtrl',
        resolve: {
          carRef: function (carsService, $stateParams) {
            return carsService.getCarRef($stateParams.carId)
          },
          commentsRef: function (carsService, $stateParams) {
            return carsService.getCommentsRef($stateParams.carId)
          }
        }
      })
  })
