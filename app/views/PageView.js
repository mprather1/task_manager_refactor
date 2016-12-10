var Task = require("../models/Task");
var TableView = require("./TableView");

var PageView = Backbone.Marionette.View.extend({
  tagName: 'div',
  className: 'container-fluid',
  template: require("../templates/page-view-template.html"),
  regions: {
    main: {
      el: '#main-view'
    }
  },
  events: {
    'mouseover .table-row': 'mouseoverFunc',
    'mouseout .table-row': 'mouseoutFunc',
    'click .submit-button': 'submitForm',
  },
  onRender: function(){
    this.showChildView('main', new TableView({
      collection: this.collection
    }));
  },
  mouseoverFunc: function(event){
    $(event.currentTarget).css({"background-color":"rgb(255, 255, 117)","cursor":"pointer"});
  },
  mouseoutFunc: function(event){
    $(event.currentTarget).css("background-color", "");
  }
});

module.exports = PageView;