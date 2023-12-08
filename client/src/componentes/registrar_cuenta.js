import React, { Fragment } from "react";
import "../index.css"
import { BsPeopleFill,BsHouseDoorFill,BsShopWindow,BsPersonBadge,BsPersonCircle,BsFillKeyFill,BsFillPersonPlusFill,BsFillLockFill,BsSearch,
  BsFacebook,BsTwitter,BsInstagram,BsTiktok} from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css'; 


// esta es la incrustacion de la funcion Contact en donde va el js , html a traves de un fragment 
// aqui va todo lo relacionado con la pagina web 

function Formulario() {
  return (

    <Fragment>
    <div className="titulo_principal" >  
      <img src={require('../img/logo_2.png')} alt='logo' /> <h1 className="titulo">MJJ</h1> 
    </div>
    
       <div className="container">
        <div className="row">
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
                <a className="nav-link" href="/client/public/contact.html">
                  <BsShopWindow/> Catálogo
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/client/public/proveedores.html">
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
                    <a className="dropdown-item disabled" href="/client/public/registrar_cuenta.html" >
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
                    {/* Div que cierra  */}

        <div>

        <div className="row">



          <div className="col-md-6 mb-3">
            <label htmlFor="nombre" className="sub_texto">Nombre Completo:</label>
            <input type="text" className="form-control" id="nombre" name="nombre" required />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="email" className="sub_texto">Correo electronico:</label>
            <input type="email" className="form-control" id="email" name="email" required />
          </div>
          </div>




          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="contra" className="sub_texto">Contraseña:</label>
              <input type="password" className="form-control" id="contra" name="contra" required />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="contra" className="sub_texto">Confirmar Contraseña:</label>
              <input type="password" className="form-control" id="contra" name="contra" required />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="tel" className="sub_texto">Telefono:</label>
              <input type="number" className="form-control" id="tel" name="tel" required placeholder="x xxxx xxxx" />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="pais" className="sub_texto">País:</label>
              <input type="text" className="form-control" id="pais" name="pais" required />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="ciudad" className="sub_texto">Ciudad:</label>
              <select className="form-select" aria-label="Default select example">
                <option defaultValue>Seleccione una ciudad</option>
                <option value="1">Santiago</option>
                <option value="2">Rancagua</option>
                <option value="3">Valparaiso</option>
                <option value="4">Coquimbo</option>
                <option value="5">Talca</option>
                <option value="6">Concepcion</option>
                <option value="7">Chillan</option>
                <option value="8">Arica</option>
              </select>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="comuna" className="sub_texto">Comuna:</label>
              <select className="form-select" aria-label="Default select example">
                <option defaultValue>Seleccione una comuna</option>
                <option value="1">La Florida</option>
                <option value="2">Providencia</option>
                <option value="3">Maipu</option>
                <option value="4">Puente Alto</option>
                <option value="5">Santiago Centro</option>
                <option value="6">Macul</option>
                <option value="7">Las Condes</option>
                <option value="8">Vitacura</option>
              </select>
            </div>

          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="direccion" className="sub_texto">Dirección:</label>
              <input type="text" className="form-control" id="direccion" name="direccion" required />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="cp" className="sub_texto">Código postal:</label>
              <input type="number" className="form-control" id="cp" name="cp" required />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="genero" className="sub_texto">Genero:</label>
              <div className="form-check form-check-inline">
                <input type="radio" id="masculino" name="genero" value="Masculino" className="form-check-input" />
                <label htmlFor="masculino" className="sub_texto">Masculino</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="radio" id="femenino" name="genero" value="Femenino" className="form-check-input" />
                <label htmlFor="femenino" className="sub_texto">Femenino</label>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="terms" name="terms" />
                <label className="sub_texto" htmlFor="terms">Acepto los términos y condiciones</label>
              </div>
              <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="sub_texto" htmlFor="flexSwitchCheckDefault">Soy humano</label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 text-center">
              <button className="btn btn-primary" type="submit">Crear cuenta</button>
            </div>
          </div>


        </div>

{/* div que abre el row */}
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

    </Fragment>
  );
}

export default Formulario;


