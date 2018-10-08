import React, { Component } from 'react';
import logo from './logo.svg';
import './Item.css';

function Item (props){
 
    return (
      <div className="App" style={{backgroundColor:'#C0C0C0',marginBottom:'10px'}}>
      <label style={{margin:'10px'}}> {props.name}</label>
      <div>
      <input style={{width:'40px'}}  type="number"  onChange={(event)=>props.handleValue(event,props.id)}  />
      <button onClick={()=>props.handleDelete(props.name)}> Delete</button>
      </div>
      
      </div>
    );
  }


export default Item;
