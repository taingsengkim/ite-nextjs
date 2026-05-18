export default interface ProductType {
    title:string,
    price:number,
    description:string,
    images:string[],
    category:CategoryType
}   
export  interface CategoryType{
    name:string,
    image:string,
}