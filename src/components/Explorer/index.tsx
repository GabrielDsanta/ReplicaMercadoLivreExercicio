import { SyntheticEvent, useEffect, useState } from "react"
import axios from 'axios'
import { Product, ProductProps } from "../Product"
import { ContainerProducts, ContainerSection } from "./styles"

export function Explorer() {

    const [products, setProducts] = useState<ProductProps[]>([])
    const [filter, setFilter] = useState('Crescente')
    
    useEffect(() => {
        axios.get('https://apigenerator.dronahq.com/api/_7dUHOON/produtos').then(response => {
            let filteredProducts
            filter === 'Decrescente' && (
                filteredProducts = response.data.sort((a: any, b: any) =>  b.value - a.value)
            )

            filter === 'Crescente' && (
                filteredProducts = response.data.sort((a: any, b: any) =>  a.value - b.value)
            )
            setProducts(filteredProducts)

        })
    }, [filter])

    return (
        <ContainerSection>
            <select name="Valor" id="" onChange={(e: SyntheticEvent<HTMLSelectElement>) => setFilter(e.currentTarget.value)}>
                <option about="Valor" value="Crescente">Valor Crescente</option>
                <option about="Valor" value="Decrescente">Valor Decrescente</option>
            </select>

            <ContainerProducts>
                {products.map((item, index) => {
                    if(index < 4){
                        return <Product
                        brand={item.brand}
                        category={item.category}
                        imageSrc={item.imageSrc}
                        name={item.name}
                        value={item.value}
                    />
                    }
                })}
            </ContainerProducts>

            <ContainerProducts>
                {products.map((item, index) => {
                    if(index < 4){
                        return <Product
                        brand={item.brand}
                        category={item.category}
                        imageSrc={item.imageSrc}
                        name={item.name}
                        value={item.value}
                    />
                    }
                })}
            </ContainerProducts>
        </ContainerSection>
    )
}