import { ContainerSales, FirstContainerSales, LastContainerSales } from "./styles";


export function Sales() {
    return (
        <ContainerSales>
            <FirstContainerSales>
                <h1>Pagamento rápido e seguro</h1>
                <h2>Com cartão</h2>
            </FirstContainerSales>

            <div>
                <h1>Até 10 vezes parceladas sem juros</h1>
                <h2>Ver mais</h2>
            </div>

            <div>
                <h1>Parcelamento sem cartão</h1>
                <h2>Conheça o mercado de crédito</h2>
            </div>

            <LastContainerSales>
                <h1>Via PIX</h1>
                <h2>Ver mais</h2>
            </LastContainerSales>
        </ContainerSales>
    )
}