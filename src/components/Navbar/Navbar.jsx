import React from 'react'
import { styled } from 'styled-components'

const Wrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    
    ul{
        display: flex;
        list-style: none;
    }

    li{
        margin-left: 1rem;
        font-size: larger;
        font-weight: bold;
    }
`

const routes = [
    {
        path: '/',
        text: 'Home',
    },
    {
        path: '/create',
        text: 'Create',
    },
    // {
    //     path: '/update',
    //     text: 'Update',
    // },
]

function Navbar() {
    return (
        <Wrapper>
            <h1>Navbar</h1>
            <ul>
                {
                    routes.map(element => {
                        return (
                            <li key={element.text}>
                                <a href={element.path}>{element.text}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </Wrapper>
    )
}

export default Navbar