import React, {useEffect, useState} from 'react';
import {Button, FormControl, Input, InputLabel} from '@material-ui/core';
import './App.css';
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
function App() {
  const [input, setInput] = useState('');
  const [messages, setMessage] = useState([])
  const [username, setUserName] = useState('');

  useEffect(() => {
      db.collection('messages')
          .orderBy('timestamp', 'desc')
          .onSnapshot(snapshot => {
          setMessage(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
      });
  }, [] )

  useEffect(()=> {
    setUserName(prompt('Enter username'))
  }, [])

  const sentMessage = (event) =>{
    //all the logic to send messages
    event.preventDefault();
    db.collection('messages').add({
        message: input,
        username: username,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
/*    setMessage([
        ...messages, {username: username, text: input} // local sent message
        ])*/
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello Facebook Messenger</h1>
      <h2>Welcome {username}</h2>
      <form>
        <FormControl>
          <InputLabel>Enter message</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
          <Button disabled={!input}
                  variant='contained'
                  color='primary'
                  type='submit'
                  onClick={sentMessage}>
              Send message
          </Button>
        </FormControl>
      </form>

      <FlipMove>
          {
              messages.map(({id, message}) => (
                  <Message key={id} username={username} message={message} />
              ))
          }
      </FlipMove>
    </div>
  );
}

export default App;
//npm install -g firebase-tools, firebase login, firebase init
