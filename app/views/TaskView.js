var TaskView = Backbone.Marionette.View.extend({
  tagName: 'tr',
  className: 'table-row',
  template: require("../templates/task-view-template.html"),
});

module.exports = TaskView;