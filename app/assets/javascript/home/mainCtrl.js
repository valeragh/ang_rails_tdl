angular.module('todoList')
  .controller('MainCtrl', [
  '$scope',
  'projects',
  function($scope, projects){
    $scope.projects = projects.projects;

    $scope.addProject = function(){
      projects.create({
        title: 'New Projects',
        tasks: '[]',
        });
      $scope.title = '';

    };
  }])