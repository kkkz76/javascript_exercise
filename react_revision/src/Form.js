import React from 'react'
import Form2 from './Form2'
export default function Form() {

   function handleSubmit(){
    alert("You clicked the submit button")
   }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <button type='submit'>Submit</button>
        </form>
        <Form2/>
    </div>
  )
}

    
