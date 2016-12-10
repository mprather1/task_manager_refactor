var TasksView = require("./TasksView");
var TaskModalView = require("./TaskModalView");

var TableView = Backbone.Marionette.View.extend({
  tagName: 'div',
  className: 'panel panel-default',
  template: require("../templates/table-template.html"),
  initialize: function(options){
    this.collection = options.collection
    this.render()
  },
  // ui: {
  //   tableRowClicker: '.table-row',
  //   sortButton: '.table-header'
  // },
  // events: {
  //   'mouseover .table-header': 'mouseoverFunc',
  //   'mouseout .table-header': 'mouseoutFunc',
  //   'change input[type=radio]': 'changedRadio',
  //   'click @ui.tableRowClicker': 'handleClick',
  //   'click @ui.sortButton': 'sortCollection'
  // },
  regions: {
    body: {
      el: 'tbody',
      replaceElement: true
    }
  },
  onRender: function(){
    console.log(this.collection)
    this.showChildView('body', new TasksView({
      collection: this.collection
    }));
  },
  mouseoverFunc: function(event){
    $(event.currentTarget).css({"background-color":"lightgrey","cursor":"pointer"});
  },
  mouseoutFunc: function(event){
    $(event.currentTarget).css("background-color", "rgb(231, 231, 230)");
  },
  changedRadio: function(e){
    this.showChildView('body', new TasksView({
      collection: this.collection,
      active_flag: e.currentTarget.value
    }));
  },
  handleClick: function(e){
    var id = $(e.currentTarget).data("id");
    var task = this.collection.get(id);
    var taskModal = new TaskModalView({ model: task });
  },
});

module.exports = TableView;
