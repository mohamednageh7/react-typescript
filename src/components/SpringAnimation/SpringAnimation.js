import React,{useState} from 'react'
import {useSpring,animated,to} from 'react-spring'


const SpringAnimation = () => {
    const [isToggled,setToggled] = useState(false)
    const {color,y} = useSpring({
        // opacity: isToggled ? 1 : 0,
        color: isToggled? '#000':'green',
        // fontSize: isToggled? '2rem':'5em',
        // transform: isToggled ? 'translate3d(0,0,0)':'translate3d(-50px,-50px,-50px)'
        y: isToggled ? 0 : -50
    })

    return (
        <div style={{textAlign:'center',marginTop:'5em'}}>
            <animated.h1 style={{
                transform: to(y,top =>`translate3d(0,${top}px,0)`),
                color,
            }}>Hello</animated.h1>
            <button onClick={() => setToggled(!isToggled)}>
                Toggle
            </button>
        </div>
    )
}

// const AnimatedTile = animated(component)
// const AnimatedTile = animated.h1

export default SpringAnimation