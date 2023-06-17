import { styled } from "styled-components";

export const Wrapper = styled.div`
    border: 5px solid black;
    display: flex;
    flex-direction: column;
    width: fit-content;
    padding: 1rem;
    padding-top: 0;
    margin: 1rem auto;

    h1{
        margin: 1rem;
    }

    div{
        div{
            margin: 1rem;
        }
    }
    
    button{
        margin: 1rem;
        margin-left: 2rem;
    }
`