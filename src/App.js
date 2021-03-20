import React, { useState } from 'react';
import {Button, FormControl, Input, InputLabel} from '@material-ui/core';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessage] = useState(['hello', 'hi', 'wats up'])

  console.log('input', input);
  console.log('mes', messages);

  const sentMessage = (event) =>{
    //all the logic to send messages
    event.preventDefault();
    setMessage([...messages, input])
    setInput('');
  }

  return (
    <div className="App">

      <h1>Hello Facebook Messenger</h1>

      <form>
        <FormControl>
          <InputLabel>Enter message</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
          <Button disabled={!input} variant='contained' color='primary' type='submit' onClick={sentMessage}>Send message</Button>
        </FormControl>
      </form>

      {
        messages.map(message=> (
            <p>{message}</p>
        ))
      }
    </div>
  );
}

export default App;
//npm install -g firebase-tools, firebase login, firebase init
