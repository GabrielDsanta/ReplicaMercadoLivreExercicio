import { NavLink } from "react-router-dom";
import { ContainerHeader } from "./styles";


export function Header() {
    return (
        <ContainerHeader>
            <input type="text" name="" id="" />

            <nav>
                <ol>
                    <ul>Categorias</ul>
                    <ul>Ofertas do dia</ul>
                    <NavLink style={{textDecoration: 'none'}} to='/' title="Home">
                        <ul>
                            Produtos
                        </ul>
                    </NavLink>

                    <NavLink style={{textDecoration: 'none'}} to='/register' title="Home">
                        <ul>
                            Cadastro
                        </ul>
                    </NavLink>
                </ol>
            </nav>
        </ContainerHeader>
    )
}