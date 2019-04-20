var MessagesView = {

  $chats: $('#chats'),
  $roomList: $('select'),

  initialize: function() {
    this.filterMessageByRoom()
  },
  
  renderMessage: function(data) {
    if (data.username !== undefined && data.text !== undefined && data.roomname !== undefined) {
      this.$chats.append(MessageView.render(data))
      this.$roomList.change(function(){
        var select = '';
        var roomname = data.roomname
        $( "select option:selected" ).each(function() {
          select = $(this).text()
          if (roomname === select){
            $('#chats').toggle();
            console.log(data)
            console.log(select)
           $('#user').empty();
            $('#user').append(MessageView.render(data))
          }
        });
        
      });
    }
  },
  
  filterMessageByRoom: function(data) {
    // if (data) {
    // }
  }


};
