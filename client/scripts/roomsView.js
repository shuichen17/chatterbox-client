var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  obj: {},

  initialize: function() {
  },

  renderRoom: function(data) {
    var rooms = data.roomname;
    if (this.obj[rooms] === undefined) {
      this.obj[rooms] = 1
      this.$select.append($('<option></option>').text(`${rooms}`));
    }
    
      

    
    //console.log(this.obj)



  }

};
