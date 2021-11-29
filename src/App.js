import React, {useState} from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

function App() {
  const [items, setItems] = useState([
    {
        id: 1,
        checked: true,
        item: "One half pound bag of Cocoa Covered Almonds Unsalted"
    },
    {
        id: 2,
        checked: false,
        item: "Item 2"
    },
    {
        id: 3,
        checked: false,
        item: "Item 3"
    }
])

const handleCheck = (id) => {
    const listItems = items.map(item => 
        item.id === id ? {...item, checked: !item.checked} : item
    )
    setItems(listItems)
    localStorage.setItem('shoppinglist', JSON.stringify(listItems))
}

const handleDelete = (id) => {
    console.log(id);
    const newList = items.filter(item => item.id !== id)
    setItems(newList)
}

  return (
    <div className="App">
      <Header  />
      <Content items={items} checkItem={handleCheck} deleteItem={handleDelete} />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
