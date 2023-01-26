import styled from "styled-components";

export const ContainerHeader = styled.header`
    background-color: rgba(245, 230, 39, 0.8);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    input{
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    nav{
        border-bottom: solid 2px black;
        border-top: solid 2px black;
        width: 100%;
        padding: 1rem;

        ol{
            display: flex;
            gap: 1.5rem;
            align-items: center;
            justify-content: center;

            ul{
                color: black;
            }
        }
    }

`