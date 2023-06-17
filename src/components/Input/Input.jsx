import React from 'react'
import { Wrapper } from './InputStyles'

function Input({label, type, placeholder, value, onChange}) {
  return (
    <Wrapper>
      <label htmlFor={label}>{label}</label>
      <input type={type} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)}/>
    </Wrapper>        
  )
}

export default Input