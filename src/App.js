import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer';
function App() {
  return (
    <div className="App">
    
    <BrowserRouter> {/*aca hay que hacer routes <Route=path"/" element= {<component bla bla />} */}
    <NavbarComponent />
    <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>Page not found: 404</h1>} />
        </Routes>
    {/*
    <Routes>
      <Route path='/' element= {<ItemListContainer />}
      <Route path="/itemDetailContainer" element = {<ItemDetail />}
      <Route path="*" element= {<h1>page not found: 404 </h1>} falso error 404 para marcar errores 
    */}

      
        <header className="App-header">
          
        
        </header>
        
      
    </BrowserRouter>
      </div>
  );
}

export default App;
