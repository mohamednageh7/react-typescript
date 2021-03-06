import React,{useState} from 'react'
import {animated,useTransition} from 'react-spring'
const Model = ({closeModal,animation,pointerEvents}) => {

    return (
        <div className='modal' style={{pointerEvents}}>
            <animated.div className='modal-card' style={animation}>
            <h1>Model</h1>
            <button onClick={closeModal}> Close</button>
            </animated.div>
        </div>
    )
 
}

const ModelWrapper = () => {
const [on,toggle] = useState(false)
const transition = useTransition(on,{
    from:{opacity:0,transform: 'translate3d(0,-40px,0)'},
    enter:{opacity:1,transform: 'translate3d(0,0,0)'},
    leave:{opacity:0,transform: 'translate3d(0,-40px,0)'}
})

const pointerEvents = on ? 'all': 'none'
    return (
        <div>
            {transition((props,item) => item && <Model 
            pointerEvents={pointerEvents} animation={props} closeModal={() => toggle(false)}/>)}
            
            <button onClick={() => toggle(true)}>Open</button>
        </div>
    )
 
}

export default ModelWrapper