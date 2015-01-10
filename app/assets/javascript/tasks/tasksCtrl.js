angular.module('todoList')
  .controller('TasksCtrl', [
  '$scope',
  'tasks',
  'task',
  function($scope, tasks, task){
    $scope.task = task;
    $scope.addComment = function(){
      if($scope.name === ''){ return; }
      tasks.addTask(task.id, {
        body: $scope.body,
      }).success(function(comment) {
        $scope.task.comments.push(comment);
      });
      $scope.body = '';
    };
  }])