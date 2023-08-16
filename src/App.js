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


function App() {
  return (
    <div className="App">
    
    <BrowserRouter> {/*aca hay que hacer routes <Route=path"/" element= {<component bla bla />} */}
    <NavbarComponent />
    {/*<button onClick={_exportProductsWithBatch}>Exportar a firebase</button>*/}
    <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />}></Route>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/order-confirmation/:id" element={ <OrderConfirm/>}/>
          <Route path="*" element={<h1>Page not found: 404</h1>} />
        </Routes>
    

      
        <header className="App-header">
          
        
        </header>
        
      
    </BrowserRouter>
      </div>
  );
}

export default App;
