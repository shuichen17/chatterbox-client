var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function(data) {
    console.log(data)

  //  for (var i = 0; i < 100; i++) {
      
    var message = data.results[0].text
    var user = data.results[0].username
    console.log(message, 'this is the message');
    console.log(user, 'this is the user')
 
 
 
    var temp = MessageView.render(); 
    this.$chats.append(temp);
    $('.username').html(user)
    $('.message').html(message)


  //  }
    


  }


};
