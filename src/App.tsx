import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from './components/TextField/TextField';
import Buttons from './components/Buttons/Buttons'
import BreadCrumb from './components/BreadCrumb/BreadCrumb'
import { FrameMotion } from './components/FrameMotion/FrameMotion.js';

import {useSpring,animated} from 'react-spring'
import SpringAnimation from './components/SpringAnimation/RangeAndOutput';
import Transation from './components/SpringAnimation/Transation';

import Nav from './components/SpringAnimation/Nav'
import Checkout from './components/SpringAnimation/Checkout'
import Routes from './components/SpringAnimation/Routes'
import ModelWrapper from './components/SpringAnimation/Model'
import Accoridion from './components/SpringAnimation/Accordion'
import Waypoints from './components/SpringAnimation/Waypoints'
import Geuster from './components/SpringAnimation/Geuster'

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
    {/* <main> */}
    {/* <SpringAnimation />
    <Transation/> */}
    {/* <Routes/>
    </main> */}
    <main>
      <ModelWrapper/>
      <Accoridion/>
      {/* <Waypoints/> */}
      <Geuster/>
          </main>
    <Checkout isOpen={isNavOpen}/>
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
