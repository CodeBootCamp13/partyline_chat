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
    chat(party_id, user_id, message){
        this.db.query('INSERT INTO messages (party_id, user_id, message) VALUES (?,?,?)',[party_id, user_id, message], (err, results) => {
            console.log(results);
            console.log(err)
        })
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


// add new parties
addParty(parent_id, user_id, name, description){
    this.db.query('INSERT INTO parties (parent_id, user_id, name, description) VALUES (?,?,?,?)',[parent_id, user_id, name, description], (err, results) => {
        console.log(results);
        console.log(err)
    })
};


// delete parties
    delete(id){
    this.db.query('DELETE FROM parties WHERE id = ?', [id], (err, results) => {
        console.log(results);
        console.log(err)
    })
    };



// invite a member to a group
};


module.exports = PartyChat;