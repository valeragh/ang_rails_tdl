angular.module('todoList')
  .controller('TasksCtrl', [
  '$scope',
  'projects',
  'project',
  function($scope, projects, project){
    $scope.project = project;
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