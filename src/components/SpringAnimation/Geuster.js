import React from 'react'
import { useGesture } from 'react-with-gesture'
import { animated, useSpring, to } from 'react-spring'

const Geuster = () => {
    // const [{xy},set] = useSpring(() => ({xy:[0,0]}))

    const [{ x }, set] = useSpring(() => ({ x: 0 }))

    // const bind = useGesture(({down,delta}) => {
    //     set({xy: down ? delta : [0,0]})
    // })

    const bind = useGesture(({ down, delta }) => {
        // set({x: down ? delta[0] : 0})
        if (down) {
            set({ x: delta[0] })
        } else {
            if (delta[0] > 400) {
                set({ x: 500 })

            } else if (delta[0] < -400) {
                set({ x: -500 })

            } else {
                set({ x: 0 })
            }
        }


    })
    return (
        <animated.div
            style={{
                opacity: x.to({
                    map: Math.abs,
                    range: [0, 400], output: [1, 0]
                }),
                transform: to(x, (x) => `translate3d(${x}px,0,0)`
                )
            }}
            {...bind()} className='box'
        />
    )
}

export default Geuster