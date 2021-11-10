const app = require('express');
const mysql = require('mysql2');


class PartyChat {
    constructor(dbInfo){
        this.db = mysql.createConnection(dbInfo);
    }

// list of all parties a user is subscribed to
    partiesList (username){

    };

// store a sent chat message
    chat(party_id, user_id, message, sent_on){
        let inserts = [];
        inserts.push([party_id, user_id, message, sent_on]);
        return this.db.query('INSERT INTO messages(party_id, user_id, message, sent_on) VALUES (?, ?, ?, ?)', inserts);
    };

// display the title of the chat
    title(party_id){

    };

// search for new chats
    search(keyword){

    };

// browse through different parties to join
    browse(){
        this.db.query('SELECT `name` FROM `parties`', (err, results) => {
            console.log(results);
            console.log(err)
        })
    };



// subscribe to a new party/ request access
    sub(party_id){

    };


// delete parties
    delete(party_id){

    };

}

// invite a member to a group

module.exports = PartyChat;