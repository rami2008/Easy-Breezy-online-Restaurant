import React, { Component } from 'react';
import logo from './logo.svg';
import './ItemToChoose.css';

function ItemToChoose (props) {
 
    return (
      <div className="ItemToChooseStyle">
      <label style={{fontSize:30}}> {props.name}</label>
    <img src={props.img} width="150" /><br></br>
     

      <button onClick={()=>props.hanldeAdd(props.name)}> Add to the order</button>

      </div>
    );
  }


export default ItemToChoose;
