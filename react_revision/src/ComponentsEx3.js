import React, { Component } from 'react'
import ComponentsEx4 from './ComponentsEx4'

const turtle ={
    name: 'turtle',
    src:'https://images.unsplash.com/photo-1591025207163-942350e47db2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    alt:'Tuttle photo',
    width:'100px',
    height:'100px'
}

const shoplist ={
    name : 'Rio',
    quantity : '3',
    price: 'S$ 3.00'

}
export default class ComponentsEx3 extends Component {
  render() {
    return (
    <div>
        <h1>ComponentsEx3</h1>

        <ul>
            <li>
                Name is {turtle.name}<br/>
                Alt is {turtle.alt}
            </li>
        </ul>
        <img src={turtle.src} width = {turtle.width} height={turtle.height} alt={turtle.alt} />

        <table border={1}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Quatity</th>
                    <th>Price</th>
                </tr>
            </thead>
            <td>{shoplist.name}</td>        
            <td>{shoplist.quantity}</td>        
            <td>{shoplist.price}</td>        


        </table>
        <ComponentsEx4 listname ={shoplist}/>
    </div>
    )
  }
}
