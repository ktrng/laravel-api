import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Create from './Create'
import Edit from './Edit'

const App = () => {
  let [items, setItems] = useState([])

  const getItems = () => {
    axios.get(
      '/api/items'
    ).then((response) => {
      setItems(response.data)
    })
  }

  const createItem = (addItem) => {
    axios.post(
      '/api/items', addItem
    ).then((response) => {
      getItems()
    })
  }

  const editItem = (updatedItem) => {
    axios.put(
      '#' + updatedItem.id, updatedItem
    ).then((response) => {
      getItems()
    })
  }

  const deleteItem = (event) => {
    axios.delete(
      '#' + event.target.value
    ).then((response) => {
      getItems()
    })
  }


  return (
    <main>
      <h1>Inventory App</h1>
      <Create
        createItem={createItem}
      />
      <div className="index">
        <div className="item">
          <img src="https://www.sallybeauty.com/dw/image/v2/BCSM_PRD/on/demandware.static/-/Sites-SBS-SallyBeautySupply/default/dwb29f17ff/images/large/BTYSEC13.jpg?sw=1500&sh=1500&sfrm=png" /><br/>
          Acetone<br/>
          Quantity: 21<br/>
          <a href="amazon.com">Buy</a>
          <div>
            <h1>EDIT GOES HERE</h1>
            <button onClick={deleteItem} value="#">Delete</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
