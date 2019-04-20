var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(data) {
    if (data.username !== undefined && data.text !== undefined) {
      this.$chats.append(MessageView.render(data))
    }
  }


};
