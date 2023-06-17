import React, { useContext } from 'react'
import { Wrapper } from './GridStyles'
import Card from '../Card/Card';
import { AppContext } from '../../context/AppContext';

function Grid() {
    const {posts} = useContext(AppContext)

    return (
        <Wrapper>
            <h1 style={{ margin:"1rem" }}>Posts</h1>
            <div>
                {posts.length === 0 ?
                    <h1>There are no posts</h1> :
                    posts.map((post) => (
                        <Card key={post.id} id={post.id} title={post.title} desc={post.desc} />
                    ))
                }
            </div>
        </Wrapper>
    )
}

export default Grid