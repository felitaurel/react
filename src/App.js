import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import ItemContainer from './components/ItemContainer';
function App() {
  return (
    <div className="App">
    <NavbarComponent />
      <header className="App-header">
        
      
      <ItemContainer greeting="Hola"/>
      </header>
    </div>
  );
}

export default App;
