var app = angular.module("app", ["xeditable"]);

app.run(function(editableOptions) {
  editableOptions.theme = 'bs2';
});

app.controller('Ctrl', function($scope, $filter, $q, $http) {
	$scope.loadUsers = function(){
		
		console.log("test");
	$http.get("http://127.0.0.1:5000/users").then(function(response) {
		
		console.log(angular.toJson(response.data));
		$scope.names = response.data;
		//$scope.names = [{"id":"id1", "text":"text1"}, {"id":"id2", "text":"text2"}];
		//$scope.names= [{"name":"system.indexes"}, {"name":"test"}, {"name":"testanv"}, {"name":"testanvnr2"}, {"name":"testanvnr3"}, {"name":"testanvnr5"}, {"name":"testanvnr6"}];
	});
	};
	
	$scope.user = null;
	$scope.setDocumentlist = function(user) {
		console.log("GGGG");
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
 $scope.users = [
    {id: 1, name: 'awesome user1', status: 2, group: 4, groupName: 'admin'},
    {id: 2, name: 'awesome user2', status: undefined, group: 3, groupName: 'vip'},
    {id: 3, name: 'awesome user3', status: 2, group: null}
  ]; 

  $scope.statuses = [
    {value: 1, text: 'status1'},
    {value: 2, text: 'status2'},
    {value: 3, text: 'status3'},
    {value: 4, text: 'status4'}
  ]; 

  $scope.groups = [];
  $scope.loadGroups = function() {
  	console.log("ffff");
    return $scope.groups.length ? null : $http.get('/groups').success(function(data) {
      $scope.groups = data;
    });
  };

  $scope.showGroup = function(user) {
    if(user.group && $scope.groups.length) {
      var selected = $filter('filter')($scope.groups, {id: user.group});
      return selected.length ? selected[0].text : 'Not set';
    } else {
      return user.groupName || 'Not set';
    }
  };

  $scope.showStatus = function(user) {
    var selected = [];
    if(user.status) {
      selected = $filter('filter')($scope.statuses, {value: user.status});
    }
    return selected.length ? selected[0].text : 'Not set';
  };

  $scope.checkName = function(data, id) {
    if (id === 2 && data !== 'awesome') {
      return "Username 2 should be `awesome`";
    }
  };

  // filter users to show
  $scope.filterUser = function(user) {
    return user.isDeleted !== true;
  };

  // mark user as deleted
  $scope.deleteUser = function(id) {
    var filtered = $filter('filter')($scope.users, {id: id});
    if (filtered.length) {
      filtered[0].isDeleted = true;
    }
  };

  // add user
  $scope.addUser = function() {
    $scope.users.push({
      id: $scope.users.length+1,
      name: '',
      status: null,
      group: null,
      isNew: true
    });
  };

  // cancel all changes
  $scope.cancel = function() {
    for (var i = $scope.users.length; i--;) {
      var user = $scope.users[i];    
      // undelete
      if (user.isDeleted) {
        delete user.isDeleted;
      }
      // remove new 
      if (user.isNew) {
        $scope.users.splice(i, 1);
      }      
    };
  };

});

