import React, { Component } from 'react';
import axios from 'axios';
import './ShoppingList.css';


class ShoppingList extends Component { 
  
  deleteItem = (id) => {
    console.log('deleting', id); 
    axios
     .delete(`/list/${id}`)
     .then((response) => {
        console.log('getting all items');
        this.props.getAllGroceries(); 
     })
  }

  render() {
    return (
      <div className="shoppingList"> 
              <p>{JSON.stringify(this.props)}</p>            
            {
              this.props.groceryList.map((item, pos) => <div className="divFood" key={pos}> 
              <div>name: {item.food_name},</div>
              <div>units: {item.unit},</div>   
              <div>quantity: {item.quantity}</div> 
              <div><button>Buy</button><button onClick={() => this.deleteItem(item.id)}>Remove</button></div>
              </div>)
            }
      </div>
    );
  }
}

export default ShoppingList;