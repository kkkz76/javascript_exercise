import React from 'react'

export default function Form() {

   function handleSubmit(){
    alert("You clicked the submit button")
   }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

    
