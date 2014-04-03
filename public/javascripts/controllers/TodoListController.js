function TodoListController($scope, $http) {
    $scope.todos = [];
    $scope.newTodo = {
        'done': false,
        'description': ''
    };

    $scope.bs = 'thisis';

    $scope.doneFilter = {
        done: true
    };
    $scope.notDoneFilter = {
        done: false
    };

    $scope.loadFromServer = function(todos) {
        $scope.todos = todos;
    }

    $scope.addNewTodo = function() {
        $http.post('/todo', $scope.newTodo).success(function(data) {
            if (data.todo) {
                $scope.todos.push(data.todo);
                $scope.newTodo.description = '';
            }
        });
    }
}
