import React, { Component } from 'react';
import logo from './logo.svg';



class Home extends Component {

    render(){
        return ( 
            <div>

<div className="header" >
  <h1 style={{color:'white'}}>Easy-Breezy online Restaurant</h1>
  <p style={{color:'white'}}>You select, we collect..</p>
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
    <h2>Welcome to our online Restaurant</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget elementum magna tristique. Quisque vehicula, risus eget aliquam placerat, purus leo tincidunt eros, eget luctus quam orci in velit. Praesent scelerisque tortor sed accumsan convallis.</p>
  </div>
  <div class="column side">
    <h2>Side</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
  </div>
</div> 

</div>
 );
    }
}

export default Home;
