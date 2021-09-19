export interface Person {
    firstName: string;
    lastName: string;
}

export interface Props {
    text: string;
    ok?: boolean;
    integ?: number;
    fn?: (bob: string) => string ;
    person: Person;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleGetValues:(e:React.MouseEvent<HTMLButtonElement>,value:string) => void;
}

// type NewProps = Omit<Props,'event'>

export interface TextNode {
    text: string;
    integ?: number;
}