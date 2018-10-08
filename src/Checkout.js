import React, { Component } from 'react';
import logo from './logo.svg';

function Checkout (props){

    if(props.visibility){
    return (
        <div>
        <h2>Check out:</h2>
    <p style={{color:'red'}}> The total coast is: {props.totalFood * 15} NIS</p>
   <p> Your full name: <input type="text" /></p>
   <p> phone number: <input type="text" /></p>
   <p>  Your address: <input type="text" /></p>
<button>Check out</button>
</div>

    );

    }
    else {return null}
}

export default Checkout;
