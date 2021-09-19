import * as React from 'react'
import {Person,Props,TextNode} from './interface'


const TextField: React.FC<Props> = ({handleChange,handleGetValues}) => {

    // const [count,setCount] = React.useState<number | null | undefined | string>(5)

    const [count,setCount] = React.useState<TextNode>({text: 'hello'})
    let data:{name:string}[] = [
        {
        name:'one',
        },
        {
        name:'two',
        },
        {
        name:'three'
        }
    ]

    const inputRef = React.useRef<HTMLInputElement>(null)
    // setCount({text: 'hello',integ:5})
    return (
        <div>
            <input ref={inputRef} onChange={handleChange} />
            {data.map((item,i) => (
                <button key={i} onClick={e => handleGetValues(e,item.name)}>{item.name}</button>
            ))}
        </div>

    )
}

export default TextField