import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from './components/TextField';

const App: React.FC = () => {
  return (
    <div>
      <TextField text='hello' person={{firstName:'', lastName:''}} handleChange={e => {
       console.log({e:e.target.value})
      }} />
    </div>
  );
}

export default App;
