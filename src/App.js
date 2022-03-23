import { useState } from 'react';
import './App.css';
import AllProducts from './components/AllProducts/AllProducts';
import Header from './components/Header/Header';
import Menubar from './components/Menubar/Menubar';
function App() {
  const [count, setcount] = useState(0)
  function setCartCount() {
    setcount(count + 1)
  }
  return (
    <div className="App">
      <Menubar count={count}></Menubar>
      <Header></Header>
      <AllProducts setCartCount={setCartCount}></AllProducts>
    </div >
  );
}

export default App;
