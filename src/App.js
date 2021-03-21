import React, {useEffect, useState} from 'react';
import {Button, FormControl, Input, InputLabel} from '@material-ui/core';
import './App.css';
import Message from "./Message";

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessage] = useState([
      {username: 'rock', text: 'hey' },
      {username: 'will', text: 'hi' }
      ])
  const [username, setUserName] = useState('');

  useEffect(()=> {
    setUserName(prompt('Enter username'))
  }, [])

  const sentMessage = (event) =>{
    //all the logic to send messages
    event.preventDefault();
    setMessage([...messages, {username: username, text: input}])
    setInput('');
  }
  console.log('input', input);
  console.log('mes', messages);
  return (
    <div className="App">
      <h1>Hello Facebook Messenger</h1>
      <h2>Welcome {username}</h2>
      <form>
        <FormControl>
          <InputLabel>Enter message</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
          <Button disabled={!input} variant='contained' color='primary' type='submit' onClick={sentMessage}>Send message</Button>
        </FormControl>
      </form>

      {
        messages.map(message => (
             <Message username={message.username} text={message.text} />
        ))
      }
    </div>
  );
}

export default App;
//npm install -g firebase-tools, firebase login, firebase init
