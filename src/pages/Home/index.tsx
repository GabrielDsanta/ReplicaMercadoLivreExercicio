import { Explorer } from "../../components/Explorer";
import { Header } from "../../components/Header";
import { Sales } from "../../components/Sales";
import { ContainerHome } from "./styles";


export function Home(){
    return(
        <ContainerHome>
            <Header />
            <Sales />
            <Explorer />
        </ContainerHome>
    )
}