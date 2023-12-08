import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Inicio from './componentes/Inicio';
import Contact from './componentes/contacto'
import Catalogo from './componentes/catalogo';
import Formulario from  './componentes/registrar_cuenta';
import ShowProducts from './componentes/proveedores';
import Login from './componentes/login';


//aqui hay que importar las rutas de los fragment que estan en modo funcion y debemos indicar en Route cual es la ruta exacta que dbee seguir y que funcion invocar anteriormente

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/client/public/contact.html" element={<Contact />} />
          <Route path="/client/public/catalogo.html" element ={< Catalogo/>} />
          <Route path="/client/public/registrar_cuenta.html" element ={< Formulario/>} />
          <Route path="/client/public/contact.html" element ={< Contact/>} />
          <Route path="/client/public/login.html" element ={< Login/>} />
          <Route path="/client/public/index.html" element={<Inicio />} />
          <Route path="/client/public/proveedores.html" element={<ShowProducts />} />
          </Routes>
    </BrowserRouter>
    );
  }
export default App;

