var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {
	$scope.loadUsers = function(){
	$http.get("http://127.0.0.1:5000/users").then(function(response) {
		
		console.log(angular.toJson(response.data));
		$scope.names = response.data;
		//$scope.names = [{"id":"id1", "text":"text1"}, {"id":"id2", "text":"text2"}];
		//$scope.names= [{"name":"system.indexes"}, {"name":"test"}, {"name":"testanv"}, {"name":"testanvnr2"}, {"name":"testanvnr3"}, {"name":"testanvnr5"}, {"name":"testanvnr6"}];
	});
	};
	$scope.user = null;
	$scope.setDocumentlist = function(user) {
		$http.get("http://127.0.0.1:5000/users/" + user).then(function(response) {
			
			$scope.documents = response.data;
		});
	};
	$scope.setDocument = function(user,document){
		$http.get("http://127.0.0.1:5000/users/"+user+"/"+document).then(function(response){
			console.log(response.data);
			$scope.budget =response.data;
		});
	};

}

);


loadUsers();