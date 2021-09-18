interface Starship {
    name: string;
    enable: boolean;
    age:number;
}

// T => generic type
// K => key type
// U => union type

// Partial<T> => make the interface props optional
const updateStarship = (id: number, starship: Partial<Starship>) => {}

updateStarship(1,{
    name: 'Explorer'
})

// Required<T> => make interface props required if it was optional

// Readonly<T> => make interface props read only 

// Recored<K,T> => used to set key and value object

const startships: Record<string, Starship> = {
    Explorer1:{
        name:'test',
        enable: true
    },
    Explorer2:{
        name:'test2',
        enable:false
    }
}

// Pick<T,K> => create new interface from the old one and just take specific props from the old one

type starshipNameOnly = Pick<Starship,"name"|"age">


// Omit<T,K> => create new interface from the old one and just remove specific props from the old one

type starshipNameRemove = Omit<Starship,"name"|"age">

// Exclude<T,U> => remove one union type from another type

type A = string | string[] | undefined

type B = Exclude<A,undefined>

//or
type C = 'coffe' | 'tea' | 'orange'

type D = Exclude<C,'tea'>

// Extract<T,U> => get a specific item from general list 
type allDrink = 'coffe' | 'tea' | 'orange'
type LikedDrinks = 'nescafa'|'coffe'

let Drinks: Extract<allDrink,LikedDrinks>;

// NonNullable<T> => get all values that not equal null or undefine
type nonNull = string | string[] | null | undefined

type getNonNull = NonNullable<nonNull>

//