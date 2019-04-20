var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function(data) {
    console.log(data.results[0])
    
    for (var i = 0; i < 100; i++) {
      var temp = MessageView.render;
      var obj = data.results[i];
      var html = temp(obj)
      this.$chats.append(html)

  }
}


};
