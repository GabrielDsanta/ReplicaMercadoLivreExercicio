import styled from "styled-components";

export const ContainerRegisterPage = styled.div`
    background-color: rgb(0, 0, 0, 5%);
`

export const StylesForm = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 1.25rem;
    color: ${props => props.theme["gray-100"]};
    flex-wrap: wrap;
    font-weight: bold;
`

const StyledBase = styled.input`
    background: transparent;
    height: 2.5rem;
    border: solid 1px #4B2995;
    font-weight: bold;
    font-size: 1.125rem;
    padding: 0 .5rem;
    color: ${props => props.theme["gray-100"]};
`

export const StylesInputTask = styled(StyledBase)`
    width: 20rem;
    text-align: center;

    &::-webkit-calendar-picker-indicator{
        display: none !important;
    }
`
