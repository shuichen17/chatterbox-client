var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(data) {
    if (data.username !== undefined) {
      this.$chats.append(MessageView.render(data))
    }
  }


};
