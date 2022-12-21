// Controlador 
let app = angular.module("MyApp",[]);
app.controller('desarrolloController', ['$scope', function($scope) {
    // Variables 
    $scope.horasTrabajadas = 0;
    $scope.tarifaPorHora = 0;
    // Función 
    $scope.calculoPago = function() {
      $scope.salarioBasico = $scope.horasTrabajadas * $scope.tarifaPorHora;
      if ($scope.salarioBasico < 500) {
        //Descuento del 0%
        $scope.pago = $scope.salarioBasico;
        $scope.descuento = 1;
        $scope.neto = $scope.pago - $scope.descuento;
      } else if ($scope.salarioBasico > 500 < 1001) {
        //Descuento del 2%
        $scope.pago = $scope.salarioBasico;
        $scope.descuento = $scope.salarioBasico * 0.02;
        $scope.neto = $scope.pago - $scope.descuento;
      } else if ($scope.salarioBasico > 1001 < 4000) {
         //Descuento del 8%
         $scope.pago = $scope.salarioBasico;
         $scope.descuento = $scope.salarioBasico * 0.08;
         $scope.neto = $scope.pago - $scope.descuento;
        }
        // Descuento del 15%
        else if ($scope.salarioBasico > 4001 < 8000){
          $scope.pago = $scope.salarioBasico;
          $scope.descuento = $scope.salarioBasico * 0.15
          $scope.neto = $scope.pago - $scope.descuento;
        }
        // Descuento del 21%
        else if ($scope.salarioBasico > 8001 < 10000){
          $scope.pago = $scope.salarioBasico;
          $scope.descuento = $scope.salarioBasico * 0.21;
          $scope.neto = $scope.pago - $scope.descuento;
        }
        // Descuento del 30
        else if ($scope.salarioBasico > 10000){
          $scope.pago = $scope.salarioBasico;
          $scope.descuento = $scope.salarioBasico * 0.3;
          $scope.neto = $scope.pago - $scope.descuento;
        }
    }
  }]);