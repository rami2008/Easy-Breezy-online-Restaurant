import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Item from './Item';
import ItemToChoose from './ItemToChoose';
import Checkout from './Checkout';


class App extends Component {

  state={
    food:[{name:'Chicken',img:'./images/chicken.jpg'},
    {name:'Burger',img:'./images/Burger.jpg'},
    {name:'Makluba',img:'./images/Makluba.jpg'},
    {name:'HotDog',img:'./images/HotDog.jpg'}],
    order:[],
    totalFood:0,
    visibility:false
  }

  handleValue =(event,id)=>{
    let items= this.state.order;
items[id].count=event.target.value;

this.setState ({order:items})
  }

  hanldeAdd=(name)=>{
let order=[]
let orderObj={name:name, count:0 }

order.push(orderObj)
console.log(orderObj)

this.setState({order:this.state.order.concat(order)})
  }

  handleDelete =(name)=>{
let f= this.state.order.filter((item)=>item.name!==name)
this.state.totalFood=0

f.map((item)=> {
  this.state.totalFood= parseInt(item.count)+parseInt(this.state.totalFood );
  })
this.setState({order:f})
  }

  handleOrder=()=>{
    this.state.totalFood=0

    this.state.order.map((item)=> {
    this.state.totalFood= parseInt(item.count)+parseInt(this.state.totalFood );
    })

    this.setState({totalFood:this.state.totalFood})
    this.ready='You are ready to check out';
    this.state.visibility=true;
  }
  render() {

 

    return (
      <div className="App">

<div className="header" >
  <h1 style={{color:'white'}}>Easy-Breezy online Restaurant</h1>
  <p style={{color:'white'}}>You select, we collect.</p>
</div>

<div className="topnav">
  <a href="/">Home</a>
  <a href="/order">Order</a>
  <a href="/contact">Contact us</a>
</div>

<div className="row">

  <div className="column side">
    <h2>Choose your dishes:</h2>
    
  {  this.state.food.map((item)=> <ItemToChoose img={item.img} name={item.name} hanldeAdd={this.hanldeAdd}/>) }

  </div>

  <div className="column middle">
    <h2>Your Order:</h2>

    {this.state.order.map((item,i)=> <Item  id={i} name={item.name} handleValue={this.handleValue} handleDelete={this.handleDelete} key={i}  />)}
<hr/>
{this.ready} <br></br>
<button onClick={this.handleOrder}> Order Now</button>
  </div>
  <div className="column side">
    <Checkout totalFood={this.state.totalFood} visibility={this.state.visibility} />
  </div>
</div>
      </div>
    );
  }
}

export default App;
