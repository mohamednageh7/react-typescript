import React,{useState,useRef} from 'react'
import {animated,useSprings,useTrail,useSpring,useSpringRef,useChain,useTransition} from'react-spring'

const items = [.5,.3,.2,.7,1]

const Boxes = () => {
    const [on,toggle] = useState(false)
    const springRef = useSpringRef()

    const {x} = useSpring({
        ref:springRef,
        from:{size:'20%'},
        to:{x:on?'100%':'20%'}
    })
    const transationRef = useSpringRef()
    // const trail = useTrail(items.length,{
    //     ref:transationRef,
    //     from:{opacity:0, 
    //         transform:'scale(0)'},
    //   to:{opacity: on ? 1:0, 
    //   transform: on ? 'scale(1)':'scale(0)'}
    // })


    const transition = useTransition(on ? items:[],{
        ref:transationRef,
        trail:400/items.length,
        from:{opacity:0, 
            transform:'scale(0)'},
      enter:{opacity:  1, 
      transform:'scale(1)'},
      leave:{opacity:0, 
        transform:'scale(0)'},
      keys: item => item
    })

    useChain(on ? [springRef,transationRef]:[transationRef,springRef])
    return (
        <div className='full-height'>

   
        <animated.div style={{width:x,height:x}} className='boxes-grid-two'  onClick={() => toggle(!on)}>
            {/* {trail.map(animation => <animated.div className='box-two' style={animation} />)} */}
            {transition((props,item) => item && <animated.div className='box-two' style={props} key={item} />)}

        </animated.div>
        </div>
    )
}

export default Boxes