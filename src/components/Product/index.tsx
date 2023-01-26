import { ContainerProduct } from "./styles"

export interface ProductProps {
    imageSrc: string
    value: string
    brand: string
    name: string
    category: string
    id: string
}

export function Product({ imageSrc, value, brand, name, category }: ProductProps){
    return(
        <ContainerProduct>
            <img height={300} src={imageSrc} />
            <h3>{brand} {name}</h3>
            <h4>{value}</h4>
            <p>{category}</p>
        </ContainerProduct>
    )
}