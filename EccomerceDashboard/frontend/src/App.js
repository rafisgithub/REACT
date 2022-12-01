import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap'
import Header from './Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
     <h1>Eccomerce project</h1>
     <hi></hi>
     </BrowserRouter>
    </div>
  );
}

export default App;
