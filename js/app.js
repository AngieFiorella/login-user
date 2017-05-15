var app = angular.module('myApp', []);
app.controller('myController', ['$http', '$scope', function($http, $scope){
	$scope.user = {
		email: null,
		password: null
	};
	$scope.error = '';
	$scope.login = function(){
		if( $scope.user.email === null || $scope.user.password === null){
			console.log("no params");
			return;
		}
		$http({
			method: 'POST',
			url: 'http://sandbox.urbaner.com/api/client/authenticate',
			data: JSON.stringify($scope.user),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(function(response){
			if(response.status == 200 && response.data.status=='success'){
				window.location.href='../shopping-list/shopping.html';
			} else {
				$scope.error= 'Usuario y/o contraseña inválidos';
			}
		}, function(error){
				console.log(error);
				$scope.error= 'Usuario y/o contraseña inválidos';
		});
	};
}]);