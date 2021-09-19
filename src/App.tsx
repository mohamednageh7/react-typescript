import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from './components/TextField/TextField';
import Buttons from './components/Buttons/Buttons'
import BreadCrumb from './components/BreadCrumb/BreadCrumb'
import { FrameMotion } from './components/FrameMotion/FrameMotion.js';

import {useSpring,animated} from 'react-spring'
import SpringAnimation from './components/SpringAnimation/SpringAnimation';

import Nav from './components/SpringAnimation/Nav'
import Checkout from './components/SpringAnimation/Checkout'


const App = () => {
const [isNavOpen,setNavOpen] = useState(false)
const navAnimation = useSpring({
  transform: isNavOpen ? 'translate3d(0%,0,0) scale(1)':'translate3d(100%,0,0) scale(0.6)'
})
  const fade = useSpring({
    from: {
      opacity: 0
    },
      opacity: 1
  })


  return (
    <animated.div style={fade}> 
     <header className="App-header">
        <img src={logo} className="logo" />
        <button className="menu-button"
        onClick={() => setNavOpen(!isNavOpen)}
        >Menu</button>
        {/* <Nav style={navAnimation}/> */}
      </header>
    <main>
    <SpringAnimation />
    <Checkout isOpen={isNavOpen}/>
    </main>
    </animated.div>
  )
}

// const App: React.FC = () => {

  // const [value,setValue] = useState<string>('')

  // const handleGetValues = (e:React.MouseEvent<HTMLButtonElement>,values:string) => {
  //   setValue(values)
  //   console.log({values})
  // }

  // const labels:{value:string; label:string;}[] = [
  //   {
  //     value:'male',
  //     label:'male'
  //   },
  //   {
  //     value:'female',
  //     label:'female'
  //   },
  //   {
  //     value:'other',
  //     label:'other'
  //   }
  // ]

  // const breadcrumbValue:string[] = ['one','two','three']
  // return (
  //   <div>
      {/* <TextField 
      text='hello' 
      person={{firstName:'', lastName:''}} 
      handleChange={e => {
      //  console.log({e:e.target.value})
      }}
      handleGetValues={handleGetValues}
      />
      <Buttons label={labels}/>
      <BreadCrumb breadcrumbValue={breadcrumbValue}/>
      <FrameMotion/> */}

    {/* </div>
  );
} */}

export default App;
