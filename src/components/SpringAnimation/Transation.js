import React,{useState} from 'react'
import {useTransition,animated,to} from 'react-spring'

// used to mount and unmount component from the page

const Transation = () => {
    const [items,setItems] = useState([{
        letter: 'S',
        key: 1
    },
    {
        letter: 'C',
        key:2
    },
    {
        letter: 'O',
        key: 3
    },
    {
        letter: 'T',
        key: 4
    },
    {
        letter: 'W',
        key: 5
    }])
    const transation = useTransition(items,{
        from:{opacity: 0,position:'absolute'},
        enter:{opacity: 1},
        leave:{opacity: 0},
    })


    return (
        <div style={{textAlign:'center',marginTop:'5em', position:'relative'}}>
            {transation((props,item) => 
                item ?
                 <animated.h1 style={props}>Hello</animated.h1> :
                 <animated.h1 style={props}>world</animated.h1>
            )}
      
            <button onClick={() => setToggled(!isToggled)}>
                Transation
            </button>
        </div>
    )
}


// const [isToggled,setToggled] = useState(false)

// const transation = useTransition(isToggled,{
//     from:{opacity: 0,position:'absolute'},
//     enter:{opacity: 1},
//     leave:{opacity: 0},
// })

{/* <div style={{textAlign:'center',marginTop:'5em', position:'relative'}}>
{transation((props,item) => 
    item ?
     <animated.h1 style={props}>Hello</animated.h1> :
     <animated.h1 style={props}>world</animated.h1>
)}

<button onClick={() => setToggled(!isToggled)}>
    Transation
</button>
</div> */}
// const AnimatedTile = animated(component)
// const AnimatedTile = animated.h1

export default Transation