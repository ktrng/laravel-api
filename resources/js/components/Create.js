import React, {useState} from 'react';

const Create = () => {
  let emptyItem={item: ''}
  let [item, setItem] = useState(emptyItem)

  const handleSubmit = (event) => {
    event.preventDefault()
    props.createItem(item)
    setItem({item: ''})
  }

  const handleChange = (event) => {
    setItem({...item, [event.target.name]: event.target.value})
  }

  return (
    <main>
      <h3>Add Item</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={item.name} placeholder="Name" onChange={handleChange} />
        <br/>
        <input type="text" name="quantity" value={item.quantity} placeholder="Quantity" onChange={handleChange} />
        <br/>
        <input type="text" name="link" value={item.link} placeholder="Buy Link" onChange={handleChange} />
        <br/>
        <input type="submit" value="Add Item" />
      </form>
    </main>
  )
}

export default Create;
