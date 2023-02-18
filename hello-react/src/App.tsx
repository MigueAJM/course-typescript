import React, { ChangeEventHandler, MouseEventHandler } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';

function App() {
    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        console.log(e.target.value)
    }

    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
        console.log("Hello world")
    }

  return (
    <div className="App">
        <Input placeholder='Nombre' handleChange={handleChange} />
        <Button handleClick={handleClick}>Primary</Button>
    </div>
  );
}

export default App;
