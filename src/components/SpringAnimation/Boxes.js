import React,{useState} from 'react'
import {animated,useSprings,useTrail} from'react-spring'

const items = [.5,.3,.2,.7,1]

const Boxes = () => {
    // const springs = useSprings(items.length,items.map(item => ({
    //     from:{
    //         opacity:0
    //     },
    //     to:{
    //         opacity:item
    //     }
    // })))
const [on,toggle] = useState(false)
    const trail = useTrail(items.length,{
      opacity: on ? 0:1,
      transform: on ? 'scale(0.3)':'scale(1)'
    })

    return (
        <div className='boxes-grid' >
            {/* {springs.map(animation => <animated.div className='box' style={animation} />)} */}
<button onClick={() => toggle(!on)}>toggle</button>
            {trail.map(animation => <animated.div className='box' style={animation} />)}

        </div>
    )
}

export default Boxes