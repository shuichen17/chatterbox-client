var Rooms = {
  add: function(event){
      //console.log('test')
   
      event.preventDefault();
      var roomValue = $("input[id=addroom]").val();
      console.log(roomValue)
  
      Parse.create({roomname: roomValue}, () => {
        console.log("works?");
      })

  }
};