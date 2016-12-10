global.jQuery = require('jquery');
require('bootstrap');

var Backbone = require("backbone");
var Marionette = require('marionette');

var ActiveTasks = require("./collections/ActiveTasks");
var CompletedTasks = require("./collections/CompletedTasks");
var TableView = require("./views/TableView");
var PageView = require("./views/PageView");

var style = require("./public/css/style.scss");

var Controller = Marionette.Object.extend({
  initialize: function(){
    var activeTasks = new ActiveTasks();
    var completedTasks = new CompletedTasks();
    
    activeTasks.fetch({
      success: function(data){
        console.log('activeTasks fetch success...')
       }
    })
  
    completedTasks.fetch({
      success: function(data){
        console.log('completedTasks fetch success...')
      }
    });
    
    this.options.activeTasks = activeTasks;
    this.options.completedTasks = completedTasks;
    
  },
  activeTasksList: function(){
    App.view.showChildView('main', new TableView({collection: this.options.activeTasks}))
  },
  completedTasksList: function(){
    App.view.showChildView('main', new TableView({collection: this.options.completedTasks}))
  }
});

var Router = Marionette.AppRouter.extend({
  controller: new Controller,
  appRoutes: {
    '': 'activeTasksList',
    'tasks/active': 'activeTasksList',
    'tasks/completed': 'completedTasksList'
  }
});

var App = new Marionette.Application({
  region: 'body',
  onStart: function(options){
    this.view = new PageView()
    this.showView(this.view)
    this.Router = new Router()
    Backbone.history.start()
  }
});

App.start()


