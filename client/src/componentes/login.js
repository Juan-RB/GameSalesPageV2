import React, { Fragment } from "react";
import "../index.css"
import { BsPeopleFill,BsHouseDoorFill,BsShopWindow,BsPersonBadge,BsPersonCircle,BsFillKeyFill,BsFillPersonPlusFill,BsFillLockFill,BsSearch,
  BsFacebook,BsTwitter,BsInstagram,BsTiktok} from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css'; 


// esta es la incrustacion de la funcion Contact en donde va el js , html a traves de un fragment 
// aqui va todo lo relacionado con la pagina web 

function Login() {
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
                <a className="nav-link" href="/client/public/catalogo.html">
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
                    <a className="dropdown-item disabled" href="/client/public/login.html">
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

        <div className="row">
                  <>
                      <div className="col-4"></div>
                      <div className="col-4">
                          <div className="row justify-content-center">
                              <h1 className="titulo_principal" style={{ fontSize: 35 }}>
                                  Iniciar sesión
                              </h1>
                              <form>
                                  <div className="form-group">
                                      <label htmlFor="usuario" className="sub_texto">
                                          Email:
                                      </label>
                                      <input
                                          type="email"
                                          className="form-control"
                                          id="usuario"
                                          placeholder="Ingresa tu email"
                                      />{" "}
                                      <br />
                                  </div>
                                  <div className="form-group">
                                      <label htmlFor="contrasena" className="sub_texto">
                                          Contraseña:
                                      </label>
                                      <input
                                          type="password"
                                          className="form-control"
                                          id="contrasena"
                                          placeholder="Ingresa tu contraseña"
                                      />{" "}
                                      <br />
                                  </div>

                                  <div className="row">
                                      <div className="col-4">
                                        <button type="submit" className="btn btn-primary btn-block">
                                          Ingresar
                                        </button>
                                      </div>
                                      <div className="col">
                                        <button type="submit" className="btn btn-primary btn-block">
                                          <a href="/create.html" />
                                          Olvidé mi contraseña
                                        </button>
                                      </div>
                                  </div>

                                  <a href="/client/public/registrar_cuenta.html" className="sub_texto">
                                      Necesito crear cuenta
                                  </a>
                              </form>
                          </div>
                      </div>
                      <div className="col-4"></div>
                  </>


        </div>

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

export default Login;


