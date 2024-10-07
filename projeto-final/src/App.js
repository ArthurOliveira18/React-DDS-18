import logo from './logo.svg';
import './App.css';

// Importando o bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Importanto o gerenciador de rotas
import {BrowserRouter, Route, Routes} from 'react-router-dom'

// Importando paginas
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import NavBarra from '../src/components/NavBarra'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      < NavBarra/>
        <Routes>
          <Route path='/home' element={<Home />}/>
          <Route path='/cadastro' element={<Cadastro />}/>
          <Route path='/login' element={<Login />}/>
        </Routes> 
      </BrowserRouter>

    </div>
  );
}

export default App;
