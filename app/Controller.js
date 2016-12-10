var Controller = Marionette.Object.extend({
  initialize: function(){
    
    var activeTasks = new ActiveTasks();
    var completedTasks = new CompletedTasks();
    
    activeTasks.fetch({
      success: function(data){
        console.log(data)
       }
    })
  
    completedTasks.fetch({
      success: function(data){
        console.log(data)
      }
    });
  
    var activeTasksView = new TasksView({collection: activeTasks})
    var completedTasksView = new TasksView({ collection: completedTasks })
    
    activeTasksView.render()
    completedTasksView.render()
    
    this.options.activeTasksView = activeTasksView;
    this.options.completedTasksView = completedTasksView;
    
  },
  tasksList: function(){
    console.log('taskslist')
  },
  activeTasksList: function(){
    var activeTasksView = this.getOption('activeTasksView');
    activeTasksView.triggerMethod('show:')
  },
  completedTasksList: function(){
  }
});