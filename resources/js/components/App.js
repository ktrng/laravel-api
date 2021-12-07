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
      '/api/items' + updatedItem.id, updatedItem
    ).then((response) => {
      getItems()
    })
  }

  const deleteItem = (event) => {
    axios.delete(
      '/api/items' + event.target.value
    ).then((response) => {
      getItems()
    })
  }

  useEffect(() => {
    getItems()
  }, [])


  return (
    <main>
      <h1>Inventory App</h1>
      <Create
        createItem={createItem}
      />
      {items.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.image} />
            {items.name}<br/>
            Quantity: {item.quantity}<br/>
            <a href={item.link}>Buy</a>
            <div>
              <Edit
                editItem={editItem}
                item={item}
              />
              <button onClick={deleteItem}>Delete</button>
            </div>
          </div>
        )
      })}
    </main>
  )
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
