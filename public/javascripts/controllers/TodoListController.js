function TodoListController($scope) {
  $scope.todos = [];

  $scope.bs = 'thisis';

  $scope.doneFilter = {done : true};
  $scope.notDoneFilter = {done : false};

  $scope.loadFromServer = function (todos) { 
    $scope.todos = todos;
  }
}
