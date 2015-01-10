angular.module('todoList')
  .controller('MainCtrl', [
  '$scope',
  'projects',

  function($scope, projects){
    $scope.projects = projects.projects;

    $scope.addProject = function(){
      projects.create({
        title: 'New Projects',
        tasks: '[]'
        });
      $scope.title = '';
    };

    $scope.addTask = function(){
      if($scope.name === ''){ return; }
      projects.addTask(project, {
        name: $scope.name,
        status: 'true',
        rang: 1
      });
      $scope.name = '';
    };
  }])