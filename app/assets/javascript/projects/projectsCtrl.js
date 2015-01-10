angular.module('todoList')
  .controller('ProjectsCtrl', [
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
        project_id: project.id
      }).success(function(task) {
        $scope.project.tasks.push(task);
      });
      $scope.name = '';
    };
  }])