var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  obj: {},

  initialize: function() {
    RoomsView.$button.on("click", RoomsView.roomClickHandler);
  },

  renderRoom: function(data) {
    var rooms = data.roomname;
    if (this.obj[rooms] === undefined) {
      this.obj[rooms] = 1
      this.$select.append($('<option></option>').text(`${rooms}`));
    }
  },

  roomClickHandler: function(event) {
    event.preventDefault();
    var roomValue = $("input[id=addroom]").val();
    console.log(roomValue)

    Parse.create({roomname: roomValue}, () => {
      console.log("works?");
    })


  }

};
