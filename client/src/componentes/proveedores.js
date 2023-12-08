import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { BsPeopleFill,BsHouseDoorFill,BsShopWindow,BsPersonBadge,BsPersonCircle,BsFillKeyFill,BsFillPersonPlusFill,BsFillLockFill,BsSearch,
    BsFacebook,BsTwitter,BsInstagram,BsTiktok,BsPersonVcard,BsFillHouseDoorFill,BsFillTelephoneFill,BsCurrencyDollar,BsFileEarmarkPlus} from 'react-icons/bs';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { FiSave } from "react-icons/fi";

import 'bootstrap/dist/css/bootstrap.min.css'; 
  

import 'bootstrap/dist/css/bootstrap.min.css';


const ShowProducts = () =>{
    const url='http://localhost:3001/api/get';
    const [products,setProducts]=useState([]);
    const [id,setId]=useState(['']);
    const [name, setName] = useState('');
    const [rut, setRut] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [price, setPrice] = useState('');
    
    const [operation,setOperation]=useState(1);
    const [title,setTitle]=useState(['']);

    const [filterField, setFilterField] = useState("price"); // Cambiamos el valor inicial a "price"
    const [orderBy, setOrderBy] = useState('asc'); // Orden ascendente o descendente (asc o desc) el pago
    const [orderByName, setOrderByName] = useState('asc'); // Ordenar por nombre: asc o desc


    useEffect(()=>{
        getProducts();
    },[]);

    const getProducts = async () => {
        const respuesta =await axios.get(url);
        setProducts(respuesta.data);
    }

    const opendModal = (op, name, rut, direccion, telefono, price, id) =>{
    
        setName('');
        setRut('');
        setDireccion('');
        setTelefono('');
        setPrice('');
        setOperation(op);
        if (op === 1){
            setTitle ('Añadir proveedor');
        }
        else if (op === 2){
            setTitle('Editar Proveedor');
            setId(id); 
            setName(name);
            setRut(rut);
            setDireccion(direccion);
            setTelefono(telefono);
            setPrice(price);
        } 

        window.setTimeout(function(){
            document.getElementById('nombre').focus();
        },500);
    }


    const insertProduct = async () =>{
        if (operation===1){
            var parametros;
            parametros={name:name.trim(),rut:rut,direccion:direccion.trim(),telefono:telefono.trim(),price:price};
            axios.post("http://localhost:3001/api/insert",parametros) ;
            document.getElementById('btnCerrar').click();
            const respuesta =await axios.get(url);
            setProducts(respuesta.data);
            window.location.reload(false);
        } else if (operation===2) {
                var parametros;
                parametros={id:id,name:name.trim(),rut:rut,direccion:direccion.trim(),telefono:telefono.trim(),price:price};
                axios.put("http://localhost:3001/api/update",parametros) ;
                document.getElementById('btnCerrar').click();
                const respuesta =await axios.get(url);
                setProducts(respuesta.data);
                window.location.reload(false);
        }

    }   
    const deleteProduct = async (pro_id) =>{
        
            axios.delete(`http://localhost:3001/api/delete/${pro_id}`);
            const respuesta =await axios.get(url);
            setProducts(respuesta.data);
            window.location.reload(false);
    }

    const handleOrderByChange = (event) => {
      setOrderBy(event.target.value); // Cambiar el orden actual según la opción seleccionada
      applyFilterAndSort(); // Filtrar y ordenar los productos con el nuevo orden
    };

    const handleOrderByNameChange = (event) => {
      setOrderByName(event.target.value);
      applyFilterAndSortByName();
    };
    
  
    const applyFilterAndSort = () => {
      let filteredProducts = [...products];
    
      if (filterField === "price") {
        filteredProducts.sort((a, b) => {
          const aPrice = a[filterField];
          const bPrice = b[filterField];
    
          if (orderBy === "asc") {
            return aPrice - bPrice;
          } else {
            return bPrice - aPrice;
          }
        });
      }
    
      setProducts(filteredProducts);
    };

    const applyFilterAndSortByName = () => {
      let filteredProducts = [...products];
    
      filteredProducts.sort((a, b) => {
        const aName = a.name.toLowerCase();
        const bName = b.name.toLowerCase();
    
        if (orderByName === "asc") {
          return aName.localeCompare(bName);
        } else {
          return bName.localeCompare(aName);
        }
      });
    
      setProducts(filteredProducts);
    };
    
    
    
    
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/get');
        setProducts(response.data);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };
  
    useEffect(() => {
      fetchProducts();
    }, []);
    
    return(

    <div className='container'>

        <div className='row'>
        <div className="titulo_principal" >  
        <img src={require('../img/logo_2.png')} alt='logo' /> <h1 className="titulo">MJJ</h1> 
        <div/>
        </div>
    
        <div className='row'>
        <div className="col-1"></div>
          <div className="col-10">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a className="nav-link" href="/client/public/index.html">
                <BsHouseDoorFill/>Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/client/public/contact.html">
                  <BsPeopleFill/> Sobre nosotros
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/client/public/catalogo.html">
                  <BsShopWindow/> Catálogo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/client/public/proveedores.html">
                  <BsPersonBadge/> Proveedores
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <BsPersonCircle/> Cuenta
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/client/public/login.html">
                      <BsFillKeyFill/> Abrir Sesión
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/client/public/registrar_cuenta.html">
                      <BsFillPersonPlusFill/> Registrar cuenta
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <BsFillLockFill/> Cerrar Sesión
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <form className="d-flex" role="search">
                  <input className="lupa" type="search" aria-label="Search" />
                  <button className="lupa-b" type="submit">
                    <BsSearch/>
                  </button>
                </form>
              </li>
            </ul>
          </div>
          <div className="col-1"></div>
        </div>
 
        <div className='row'>
        
        <div className='col-1'></div>   
        <div className='col10' >
        <div className='App'>
            <div className= 'container-fluid'>
                <div className='row mt-3' >
                <div className= 'col-md-8 offset-md-2 d-flex justify-content-center' >
                        
                       
                            
                            <button onClick={()=> opendModal(1)} className= 'btn btn-dark' data-bs-toggle= 'modal' data-bs-target='#modalProducts'>
                                <BsFileEarmarkPlus/> Añadir 
                                </button> <br/>
                            
                            <select
                              className="form-select ms-2"
                              value={orderBy}
                              onChange={handleOrderByChange} // Asociamos el evento onChange con la función handleOrderByChange
                            >
                              <option value="" disabled>Selecciona el tipo de orden</option>
                              <option value="desc">Ordenar pago de menor a mayor</option>
                              <option value="asc">Ordenar pago de mayor a menor</option>
                              
                            </select> <br/>
                            <select
                              className="form-select ms-2"
                              value={orderByName}
                              onChange={(e) => {
                                setOrderByName(e.target.value);
                                applyFilterAndSortByName();
                              }}
                            >
                              <option value="" disabled>Selecciona el tipo de orden</option>
                              <option value="desc">Ordenar por nombre (A-Z)</option>
                              <option value="asc">Ordenar por nombre (Z-A)</option>
                              
                            </select>
                      
                        </div>
                    </div>
                    <div className='row'>
                    <div className="col-5"></div>
                    <div className="col-2">

                    </div>
                    <div className="col-5"></div>

           
                    </div>
                    <div className= 'row mt-'>
                        <div className= "col-12 col-md-10 offset-md-1">
                            <div className= 'table-responsive'>
                                <table className= 'table table-bordered tabla' >
                                    <thead className='tabla' >
                                        <tr><th>#</th>
                                        <th>Nombre</th>
                                        <th>RUT proveedor</th>
                                        <th>Dirección</th>
                                        <th>Teléfono</th>
                                        <th>Pago</th>
                                        <th>Opciones</th></tr>
                                    </thead >
                                    <tbody className='table-group-divider tabla'>
                                        
                                        {products.map((product)=>(
                                            <tr key={product.id}>
                                                <td>{product.id}</td>
                                                <td>{product.name}</td>
                                                <td>{product.rut}</td>
                                                <td>{product.direccion}</td>
                                                <td>{product.telefono}</td>
                                                <td>$ {new Intl.NumberFormat('es-mx').format(product.price)}</td>
                                                <td c> 
                                                    <button onClick={()=>opendModal(2, product.name, product.rut, product.direccion, product.telefono, product.price, product.id)}
                                                        className = 'btn btn-warning' data-bs-toggle='modal' data-bs-target='#modalProducts'>
                                                         <FaEdit /> Editar
                                                    </button>
                                                    &nbsp;
                                                    <button onClick={()=>deleteProduct(product.id)}
                                                     className = 'btn btn-danger'>
                                                         <FaTrash /> Eliminar
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div id='modalProducts' className= 'modal fade' aria-hidden='true'>
                    <div className= 'modal-dialog'> 
                        <div className= 'modal-content'> 
                            <div className= 'modal-header'> 
                                <label className='h5'>{title}</label> 
                                <button type='button' className='btn-close' data-bs-dismiss= 'modal' aria-label='Close'></button>
                            </div>
                            <div className= 'modal-body'>
                                <input type='hidden' id='id'></input>
                                <div className='input-group mb-3'>
                                    <span className='input-group-text'><BsPeopleFill/></span>
                                    <input type='text' id = 'nombre' className= 'form-control' placeholder= 'Nombre' value= {name}
                                    onChange={(e)=> setName (e.target.value)}></input>
                                </div>
                                <div className='input-group mb-3'>
                                    <span className='input-group-text'><BsPersonVcard/></span>
                                    <input type='number' id = 'rut' className= 'form-control' placeholder= 'Rut del proveedor' value= {rut}
                                    onChange={(e)=> setRut (e.target.value)}></input>
                                </div>
                                <div className='input-group mb-3'>
                                    <span className='input-group-text'><BsFillHouseDoorFill/></span>
                                    <input type='text' id = 'descripcion' className= 'form-control' placeholder= 'Dirección' value= {direccion}
                                    onChange={(e)=> setDireccion (e.target.value)}></input>
                                </div>
                                <div className='input-group mb-3'>
                                    <span className='input-group-text'><BsFillTelephoneFill/></span>
                                    <input type='text' id = 'telefono' className= 'form-control' placeholder= 'Teléfono' value= {telefono}
                                    onChange={(e)=> setTelefono (e.target.value)}></input>
                                </div>
                                
                                <div className='input-group mb-3'>
                                    <span className='input-group-text'><BsCurrencyDollar/></span>
                                    <input type='text' id = 'precio' className= 'form-control' placeholder= 'Precio' value= {price}
                                    onChange={(e)=> setPrice (e.target.value)}></input>
                                
                                </div>

                                <div className='d-grid col-6 mx-auto'>
                                    <button onClick={()=>insertProduct()}  className='btn btn-success'>
                                    <FiSave/> Guardar
                                    </button>

                                </div>
                        </div> 
                        <div className='modal-footer'>    
                            <button id = 'btnCerrar'type='button' className ='btn btn-secondary'  data-bs-dismiss= 'modal'>Cerrar</button>
                        </div>                       
                    </div>
                </div>
            </div>
        </div>  
    </div>
    </div>
    </div>        
    <div className='col-1'></div>                                            
    <div className="row">
              <div className="col-1"></div>

                  <div className="col-10">
                    <footer>
                      <ul className="nav justify-content-center">
                        <li className="nav-item_r">
                          <a className="nav-link_r" href="#"><BsFacebook/></a>
                        </li>
                        <li className="nav-item_r">
                          <a className="nav-link_r" href="#"><BsTwitter/></a>
                        </li>
                        <li className="nav-item_r">
                          <a className="nav-link_r" href="#"><BsInstagram/></a>
                        </li>
                        <li className="nav-item_r">
                          <a className="nav-link_r" href="#"><BsTiktok/></a>
                        </li>
                      </ul>
                      <br />
                      <div className="container_2">
                        <p className="footer">
                          @Todos los derechos reservados 2015<br />
                          Nuestras Redes Sociales<br />
                        </p>
                      </div>
                    </footer>
                  </div>

                  <div className="col-1"></div>
          </div>






    </div>                                  
    )
}
export default ShowProducts