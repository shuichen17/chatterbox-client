var MessagesView = {

  $chats: $('#chats'),
  $roomList: $('select'),

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
      // var test = this.$roomList.find(":selected").text();
      // console.log(test)
      this.$roomList.change(function(){
        var select = '';
        $( "select option:selected" ).each(function() {
          select = $(this).text()
        });
        console.log(select)
      });
      

      
    }

    
  }


};
