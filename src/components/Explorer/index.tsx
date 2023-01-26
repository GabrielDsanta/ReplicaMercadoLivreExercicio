import { SyntheticEvent, useEffect, useState } from "react"
import axios from 'axios'
import { Product, ProductProps } from "../Product"
import { ContainerProducts, ContainerSection } from "./styles"

export function Explorer() {

    const [products, setProducts] = useState<ProductProps[]>([])
    const [filter, setFilter] = useState('Crescente')

    useEffect(() => {
        axios.get('https://apigenerator.dronahq.com/api/MNdw05qQ/produtos').then(response => {
            let filteredProducts
            filter === 'Decrescente' && (
                filteredProducts = response.data.sort((a: any, b: any) => b.value - a.value)
            )

            filter === 'Crescente' && (
                filteredProducts = response.data.sort((a: any, b: any) => a.value - b.value)
            )
            setProducts(filteredProducts)

        })
    }, [filter])

    return (
        <ContainerSection>
            <select name="Valor" id="" onChange={(e: SyntheticEvent<HTMLSelectElement>) => setFilter(e.currentTarget.value)}>
                <option about="Valor" value="Crescente">Valor Decrescente</option>
                <option about="Valor" value="Decrescente">Valor Crescente</option>
            </select>

            <ContainerProducts>
                {products.map((item, index) => {
                    if (index < 5) {
                        return <Product
                            brand={item.brand}
                            category={item.category}
                            imageSrc={item.imageSrc}
                            name={item.name}
                            id={item.id}
                            key={item.id}
                            value={item.value}
                        />
                    }
                })}
            </ContainerProducts>

            <ContainerProducts>
                {products.map((item, index) => {
                    if (index > 5 && index <= 10) {
                        return <Product
                            brand={item.brand}
                            category={item.category}
                            imageSrc={item.imageSrc}
                            name={item.name}
                            key={item.id}
                            id={item.id}
                            value={item.value}
                        />
                    }
                })}
            </ContainerProducts>

            <ContainerProducts>
                {products.map((item, index) => {
                    if (index > 10) {
                        return <Product
                            brand={item.brand}
                            category={item.category}
                            imageSrc={item.imageSrc}
                            name={item.name}
                            key={item.id}
                            id={item.id}
                            value={item.value}
                        />
                    }
                })}
            </ContainerProducts>
        </ContainerSection>
    )
}