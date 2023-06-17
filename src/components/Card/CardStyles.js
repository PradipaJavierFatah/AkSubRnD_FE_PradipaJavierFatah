import { styled } from "styled-components";

export const Wrapper = styled.div`
    border: 5px solid black;
    display: flex !important;
    flex-direction: column;
    width: fit-content;
    min-width: 20rem;
    padding: 1rem;
    margin: 1rem;

    *{
        margin: .5rem;
    }
`

export const DeleteButton = styled.button`
    background-color: red;
    color: white;
    border: none;
    border-radius: 5px;
    padding: .5rem;
    width: fit-content;
    min-width: 5rem;
    align-self: flex-end;
    cursor: pointer;
    transition: all .2s ease-in-out;

    &:hover{
        background-color: darkred;
    }
`

export const EditButton = styled.button`
    background-color: green;
    color: white;
    border: none;
    border-radius: 5px;
    padding: .5rem;
    width: fit-content;
    min-width: 5rem;
    align-self: flex-end;
    cursor: pointer;
    transition: all .2s ease-in-out;

    &:hover{
        background-color: darkgreen;
    }
`

export const Buttons = styled.div`
`