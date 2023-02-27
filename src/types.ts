export interface Make {
    id: string,
    name: string,
    country: string
}

export interface Model {
    id:string,
    makeId:string
    name: string
}