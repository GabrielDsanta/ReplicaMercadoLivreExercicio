import { Explorer } from "../../components/Explorer";
import { Sales } from "../../components/Sales";
import { ContainerHome } from "./styles";


export function Home(){
    return(
        <ContainerHome>
            <Sales />
            <Explorer />
        </ContainerHome>
    )
}