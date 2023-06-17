import React from 'react'
import { Buttons, DeleteButton, EditButton, Wrapper } from './CardStyles'

function Card({ id, title, desc}) {
  return (
    <Wrapper>
      <p>ID: {id}</p>
      <h1>Title: {title}</h1>
      <p>Desc: {desc}</p>
      <Buttons>
        <DeleteButton 
            // onClick={handleDelete}
        >
            Delete
        </DeleteButton>
        <EditButton 
            // onClick={handleEdit}
        >
            Edit
        </EditButton>
      </Buttons>
    </Wrapper>
  )
}

export default Card