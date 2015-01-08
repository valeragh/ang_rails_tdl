angular.module('todoList')
  .controller('TasksCtrl', [
  '$scope',
  'projects',
  'post',
  function($scope, projects, post){
    $scope.post = post;
    $scope.addTask = function(){
      if($scope.name === ''){ return; }
      projects.addTask(project.id, {
        name: $scope.name,
        status: 'true',
        rang: 1,
      }).success.project.tasks.push(task);
      $scope.name = '';
    };
  }])