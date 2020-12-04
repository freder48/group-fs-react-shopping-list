import React, { Component } from 'react';
import './ShoppingList.css';

class ShoppingList extends Component { 
  render() {
    return (
      <div className="shoppingList"> 
              <p>{JSON.stringify(this.props)}</p>            
            {
              this.props.groceryList.map((item, pos) => <div className="divFood" key={pos}> {item.food_name}, {item.unit}, {item.quantity}</div>)
            }
      </div>
    );
  }
}

export default ShoppingList;