import React, { useState, useEffect } from "react";
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import SearchItem from "./SearchItem";

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("shoppinglist")));
  }, []);

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("shoppinglist", JSON.stringify(newItems));
  };

  const addItem = (item) => {
    const id = items?.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {
      id,
      checked: false,
      item,
    };
    const listItems = items?.length ? [...items, myNewItem] : [myNewItem];
    setAndSaveItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems);
  };

  const handleDelete = (id) => {
    console.log(id);
    const newList = items.filter((item) => item.id !== id);
    setAndSaveItems(newList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    // console.log(newItem);
    //addItem
    addItem(newItem);
    setNewItem("");
    // console.log("submitted");
  };

  return (
    <div className="App">
      <Header />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items?.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        checkItem={handleCheck}
        deleteItem={handleDelete}
      />
      <Footer length={items?.length} />
    </div>
  );
}

export default App;
