import React, { Component } from 'react';
import logo from './logo.svg';



class Contact extends Component {

    render(){
        return ( 
            <div>

            <div className="header" >
  <h1 style={{color:'white'}}>Easy-Breezy online Restaurant</h1>
  <p style={{color:'white'}}>You select, we collect.</p>
</div>
            <div className="topnav">
            <a href="/">Home</a>
              <a href="/order">Order</a>
              <a href="/contact">Contact us</a>
            </div>
            
            <div class="row">
  <div class="column side">
    <h2>Side</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
  </div>
  <div class="column middle">
    <h2>You can contact us using this form:</h2>
            .........

  </div>
  <div class="column side">
    <h2>Side</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
  </div>
</div> 
            
            </div>        );
    }
}

export default Contact;
