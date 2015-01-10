angular.module('todoList', ['ui.router', 'templates'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      controller: 'MainCtrl',
      resolve: {
        postPromise: ['projects', function(projects){
          return projects.getAll();
       }]


      }
    })
      .state('projects', {
        url: '/projects/{id}',
        templateUrl: 'projects/_projects.html',
        controller: 'ProjectsCtrl',
        resolve: {
          project: ['$stateParams', 'projects', function($stateParams, projects) {
            return projects.get($stateParams.id);
          }]
        }
    })
    .state('tasks', {
      url: '/tasks/{id}',
      templateUrl: 'tasks/_tasks.html',
      controller: 'TasksCtrl',
      resorve: {
        task: ['$stateParams', 'tasks', function($stateParams, tasks) {
            return tasks.getTask($stateParams.id);
          }]
      }
    });
}])


.factory('projects', ['$http', function($http){
  var o = {
    projects: []
  };

  o.getAll = function(){
    return $http.get('/projects.json').success(function(data){
      angular.copy(data, o.projects);
    });
  };

  o.create = function(project){
    return $http.post('/projects.json', project).success(function(data){
      o.projects.push(data);
    });
  };

  o.get = function(id) {
    return $http.get('/projects/' + id).then(function(res){
      return res.data;
    });
  };

  o.getTask = function(id) {
    return $http.get('/tasks/' + id).then(function(res){
      return res.data;
    });
  };

  o.addTask = function(id, task){
    return $http.post('/projects/' + id + '/tasks.json', task);
  };

  o.addComment = function(id, comment){
    return $http.post('/tasks/' + id + '/comments.json', comment);
  };

  return o;
}])




