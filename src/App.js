import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer';
import { _exportProductsWithBatch } from './components/firebase';
import Checkout from './components/Confirmacion';
import CartContainer from './components/CartContainer';
import OrderConfirm from './components/Order';
import { CartContextProvider } from './components/cartContext';
import Footer from './components/Footer';


function App() {
  
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter> 
        <header className="App-header" />
        <NavbarComponent className='navbar' />
        {/*<button onClick={_exportProductsWithBatch}>Exportar a firebase</button>*/}
        <div className='App-content'>
        <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:categoryId" element={<ItemListContainer />} />
              <Route path="/product/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartContainer />}></Route>
              <Route path="/checkout" element={<Checkout/>}/>
              <Route path="/order-confirmation/:id" element={ <OrderConfirm/>}/>
              <Route path="*" element={<h1>Page not found: 404</h1>} />
            </Routes>
            </div>

        <Footer />
            
            
          
        </BrowserRouter>
        </CartContextProvider>
      </div>
  );
}

export default App;
