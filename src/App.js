import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import ItemContainer from './components/ItemContainer';
import CartWidget from './components/CartWidget';
function App() {
  return (
    <BrowserRouter> {/*aca hay que hacer routes <Route=path"/" element= {<component bla bla />} */}
      <div className="App">
      <NavbarComponent />
      
        <header className="App-header">
          
        
        <ItemContainer greeting="Hola"/>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
