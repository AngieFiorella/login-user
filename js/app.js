var app = angular.module('myApp', []);
app.controller('myController', myFunction);
function myFunction($scope, $window){
	$scope.user = "admin@rcp.pe";
	$scope.password = 12345;
	$scope.messageId = 0;
	$scope.message = "";
	$scope.class="invisible";
	/*if (myForm.myUser.$valid === true){
		$scope.messageId = 1;
	} else {
		$scope.messageId = 2;
	}
	if ($scope.messageId === 1){
		$scope.message = "Valido";
	} else {
		$scope.message = "Inválido";
	}*/
	$scope.setData = function(){
		/*if($scope.myUser === "admin@rcp.pe" && $scope.myPassword === 12345){
			if ($scope.class==="invisible"){
					$scope.class="visible";
			} else {
					$scope.class="invisible";
			}
		}*/
		if($scope.myUser === "admin@rcp.pe" && $scope.myPassword === 12345){
			window.alert("Usuario autenticado correctamente");
		} else {
			window.alert("Usuario y/o contraseña incorrecta");
		}
	};

};
