import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from './components/TextField/TextField';
import Buttons from './components/Buttons/Buttons'

const App: React.FC = () => {

  const [value,setValue] = useState<string>('')

  const handleGetValues = (e:React.MouseEvent<HTMLButtonElement>,values:string) => {
    setValue(values)
    console.log({values})
  }

  const labels:{value:string; label:string;}[] = [
    {
      value:'male',
      label:'male'
    },
    {
      value:'female',
      label:'female'
    },
    {
      value:'other',
      label:'other'
    }
  ]
  return (
    <div>
      <TextField 
      text='hello' 
      person={{firstName:'', lastName:''}} 
      handleChange={e => {
      //  console.log({e:e.target.value})
      }}
      handleGetValues={handleGetValues}
      />
      <Buttons label={labels}/>
    </div>
  );
}

export default App;
