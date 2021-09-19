import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useSpring ,animated,to} from 'react-spring';
import useMeasure from './useMeasure'
import './style.css';


export const FrameMotion = () => {
    const [active, toggle] = useState(false)
    const [bind, {width}] = useMeasure()
    
    const props = useSpring({
      width: active ? width : 0,
      backgroundColor: active ? 'hotpink':'turquoise',
      config:{duration:3000}
    })
    return(
    <div {...bind} className="main" onClick={() => toggle(!active)}>
      <animated.div className="fill" style={props} />
      {/* <div className='content'>
      {active? 100 : 0}
      </div> */}
      <animated.div className="content">
       {props.width.interpolate(x => Math.floor(x * 100 / width))}
      </animated.div>
    </div>
    )
}

// export const FrameMotion: React.FC = () => {
//   const [state, toggle] = useState(true)
//   const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 1000 } })
//   return (
//     <div onClick={() => toggle(!state)}>
//       <animated.div
//         style={{
//           opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
//           transform: x
//             .interpolate({
//               range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
//               output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
//             })
//             .interpolate(x => `scale(${x})`)
//         }}>
//         Hello React Spring
//       </animated.div>
//     </div>
//   )
// }

