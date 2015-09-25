var socketio = require('socket.io')
  , io
  , guestNumber = 1 
  , nickName = {}
  , namesUsed = []
  , currrentRoom = {}
  ;

  exports.listen = function (server) {
  	io = socketio.listen(server);
  	io.set('log level', 1);

  	io.sockets.on('connection', function (socket) {
  		guestNumber = assignGuestName(socket, guestNumber, nickName, namesUsed);
  		joinRom(socket, 'Lobby');

  		handleMessageBroadcasting(socket, nickName);

  		handleNameChangeAttempts(socket, nickName, namesUsed);

  		handleRoomJoining(socket);

  		socket.oi('rooms', function () {
  			socket.emit('rooms', io.sockets.manager.rooms);
  		});

  		handleClientDisconnection(socket, nickNames, namesUsed);

  	});

    function assignGuestName(socket, guestNumber, nickNames, namesUsed){
      var name = 'Guest' + guestNumber;
      nickNames[socket.id] = name;
      socket.emit('nameResult', {
        success: true,
        name: name
      });
      namesUsed.push(name);
      return guestNumber + 1;
    }

  };