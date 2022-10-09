import { useState } from "react";
import Header from "./components/Header"
import Main from "./components/Main"
import Basket from "./components/Basket"
import data from "./data";
function App() {
  const [cardItems, setCardItems] = useState([])
  const {products} = data;
  const onAdd = (product) =>{
    // console.log("onAdd");
    const exist = cardItems.find((x) => x.id === product.id);
    if(exist){
      const newCardItems = cardItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty +1} : x);
      setCardItems(newCardItems);
    }else{
      const newCardItems = [...cardItems,{...product,qty:1}];
      setCardItems(newCardItems);
    }
  }
  const onRemove = (product) =>{
    const exist = cardItems.find((x) => x.id === product.id);
    if(exist.qty===1){
      const newCardItems = cardItems.filter((x) => x.id !== product.id);
      setCardItems(newCardItems);
    }else{
        const newCardItems = cardItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty -1}: x)
        setCardItems(newCardItems);
    }

  }

  return (
    <div>
      <Header countCardItems={cardItems.length}/>
      <div className="row">
        <Main cardItems={cardItems} onAdd={onAdd} onRemove={onRemove} products={products}/>
        <Basket cardItems={cardItems} onAdd={onAdd} onRemove={onRemove}/>
      </div>
    </div>
  );                            
}

export default App;
