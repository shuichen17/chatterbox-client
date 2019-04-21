var MessagesView = {

  $chats: $('#chats'),
  $roomList: $('select'),
  $users: $('#user'),

  initialize: function() {
    this.filterMessageByRoom()
  },
  
  renderMessage: function(data) {
    if (data.username !== undefined && data.text !== undefined) {
      this.$chats.append(MessageView.render(data))
    }
  },
  
  filterMessageByRoom: function(data) {
    if (data) {
      this.$roomList.change(function(){
        var select = '';
        $( "select option:selected" ).each(function() {
          if (data.roomname !== undefined){
            var roomname = data.roomname
          select = $(this).text()
          if (roomname === select){
            $('#chats').toggle();
            // this.renderMessage(data)
            console.log(data)
            console.log(select)
          //  $('#user').empty();
            // this.$users.append(MessageView.renderRoom(data))
          }
          }
          
        });
        
      });
      }
  }


};
