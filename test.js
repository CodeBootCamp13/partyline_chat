var pl = require('./app.js');
var PartyChat = new pl({'host': 'localhost', 'user': 'root', 'database': 'partyline', 'password': ''});
PartyChat.chat("1234", "5678", "Lorem Ipsum");