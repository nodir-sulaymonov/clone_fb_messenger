import React, {useEffect, useState} from 'react';
import { FormControl, Input } from '@material-ui/core';
import './App.css';
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from "@material-ui/core";

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
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Messenger_logo_2018.svg/100px-Facebook_Messenger_logo_2018.svg.png" alt=""/>
      <h1>Hello Facebook Messenger</h1>
      <h2>Welcome {username}</h2>

      <form className='app__form'>
        <FormControl className='app__formControl'>
          <Input className='app__input' placeholder='Enter messages ...' value={input} onChange={event => setInput(event.target.value)}/>

          <IconButton className='app__iconButton'
                      disabled={!input}
                  variant='contained'
                  color='primary'
                  type='submit'
                  onClick={sentMessage}>
              <SendIcon />
          </IconButton>
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
