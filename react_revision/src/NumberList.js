import React from 'react'
import Form from './Form';

export default function NumberList(props) {

    const numberArray = props.numbers;
  
    const listNumber = numberArray.map((number,index) =>
        <li key={index}>{number}</li>)
  return (
    <div>It is {listNumber}
    <Form/>
    </div>
    
  )
}
