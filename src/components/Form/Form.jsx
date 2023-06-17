import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router';
import { Wrapper } from './FormStyles';
import Input from '../Input/Input';
import { AppContext } from '../../context/AppContext';

function Form({ id, titleValue, descValue, update }) {
  const {createPost} = useContext(AppContext)
  const navigate = useNavigate();
  const [title, setTitle] = useState(titleValue || "");
  const [desc, setDesc] = useState(descValue || "");

  function handleSubmit() {
    const post = {
      title: title,
      desc: desc,
      id: Math.floor(Math.random() * 100),
    }

    try {
      createPost(post)
    } catch (error) {
      alert(error)
    }

    navigate('/');
  }

  function renderButton() {
    return (
      <button onClick={handleSubmit}>Submit Data</button>
    )
  }

  return (
    <Wrapper>
      <h1>Form</h1>
      <div>
        <Input label="Title" placeholder="Insert title" type="text" value={title} onChange={(value) => setTitle(value)} />
        <Input label="Desc" placeholder="Insert desc" type="text" value={desc} onChange={(value) => setDesc(value)} />
        {renderButton()}
      </div>
    </Wrapper>
  )
}

export default Form