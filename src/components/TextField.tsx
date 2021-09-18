import * as React from 'react'

interface Person {
    firstName: string;
    lastName: string;
}

interface Props {
    text: string;
    ok?: boolean;
    integ?: number;
    fn?: (bob: string) => string ;
    person: Person;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// type NewProps = Omit<Props,'event'>

interface TextNode {
    text: string;
    integ?: number;
}
const TextField: React.FC<Props> = ({handleChange}) => {

    // const [count,setCount] = React.useState<number | null | undefined | string>(5)

    const [count,setCount] = React.useState<TextNode>({text: 'hello'})

    const inputRef = React.useRef<HTMLInputElement>(null)
    // setCount({text: 'hello',integ:5})
    return (
        <div>
            <input ref={inputRef} onChange={handleChange} />
        </div>

    )
}

export default TextField