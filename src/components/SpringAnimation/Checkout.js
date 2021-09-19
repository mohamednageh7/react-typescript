import React,{useState} from 'react'
import {useSpring,animated,to} from 'react-spring'

const Checkout = ({isOpen}) => {
    const {x} = useSpring({
        x: isOpen ? 0: 100
      })
    return (
        <div className='checkout'
        style={{
            pointerEvents: isOpen? 'all':'none'
        }}
        >
            <animated.div style={{
                transform: to(x,left => `translate3d(${left * -1}%,0,0)`)
            }} className='checkout-left'/>
            <animated.div style={{
                transform: to(x,right => `translate3d(${right}%,0,0)`)
            }} className='checkout-right'/>
        </div>
    )
}

export default Checkout