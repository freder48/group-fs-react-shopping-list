import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import ShoppingList from '../ShoppingList/ShoppingList'

import Header from '../Header/Header'
import AddList from '../AddItem/AddItem'
class App extends Component {
  state = {
    groceryList: [],
  }

  componentDidMount(){
    console.log('Component did mount');
    this.getAllGroceries();
    
  }

addItem = () => {
  let newItem = {
    food_name: '',
    quantity: 0, 
    unit: 0
  }
  console.log(newItem);
   axios({
    method: 'POST',
    url: '/list',
    data: newItem
  })
  .then((response) => {
    //the info we want is in the response
    console.log('response', response);
    this.getAllGroceries();
    
  })
  .catch((error) => {
    alert('Something bad happening');
    console.log('error', error);  
  })
    
  }


  //start AllGroceries
  getAllGroceries = () => {
    axios({
      method: 'GET', 
      url: '/list'
    })
    .then((response) => {
      //the info we want is in the response
      console.log('response', response.data);
      this.setState({
        groceryList: response.data
      })
      
    })
    .catch((error) => {
      alert('Something bad happening in GET');
      console.log('error', error);  
    })
  }

  
  render() {
    return (
      <div className="App">
        <Header/>
        <main>
          <AddList addItem={this.addItem}/>
          <p>Under Construction...</p>
          <ShoppingList getAllGroceries={this.getAllGroceries} groceryList={this.state.groceryList}/>
        </main>
      </div>
    );
  }
}

export default App;
