import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import ItemContainer from './components/ItemContainer';
import CartWidget from './components/CartWidget';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom"
function App() {
  return (
    <div className="App">
    
    <BrowserRouter> {/*aca hay que hacer routes <Route=path"/" element= {<component bla bla />} */}
    <NavbarComponent />
    {/*
    <Routes>
      <Route path='/' element= {<ItemContainer />}
      <Route path="/itemDetailContainer" element = {<ItemDetail />}
      <Route path="*" element= {<h1>page not found: 404 </h1>} falso error 404 para marcar errores 
    */}

      
        <header className="App-header">
          
        
        <ItemContainer greeting="Hola"/>
        </header>
      
    </BrowserRouter>
      </div>
  );
}

export default App;
