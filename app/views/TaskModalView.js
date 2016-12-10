var TaskModalView = Backbone.Marionette.View.extend({
  tagName: 'div',
  className: 'modal fade',
  id: 'taskModal',
  template: require("../templates/task-modal-template.html"),
  attributes: {
    'role': 'dialog'
  },
  events: {
    'click .complete-button': 'complete',
    'click': 'remove'
  },
  initialize: function(){
    this.render();
  },
  onRender: function(){
    this.$el.modal('show')
    var footer = this.el.lastElementChild.lastElementChild.lastElementChild
    if (this.options.model.attributes.completed == false){
     $(footer).prepend('<button type="button" class="complete-button btn btn-default" data-dismiss="modal">Complete</button>')
    }
  },
  remove: function(){
    this.on('hidden', this.$el.remove())
    if ($('.modal-backdrop').length){
      $('.modal-backdrop').remove()
    }
  },
  complete: function(e){
    e.preventDefault();
    this.model.set('completed', true)
    this.model.save(null, {
      success: function(model, response){
        console.log(response.message)
      }
    })
    Backbone.trigger('task:complete')
  }
});

module.exports = TaskModalView;