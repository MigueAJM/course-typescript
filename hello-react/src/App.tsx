import React, { MouseEventHandler } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import Button from './components/Button';

function App() {
    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        console.log("Hello world")
    }

  return (
    <div className="App">
        <Button handleClick={handleClick}>Primary</Button>
    </div>
  );
}

export default App;
