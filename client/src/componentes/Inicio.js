import React, { Fragment } from "react";
import "../index.css"
import { BsPeopleFill,BsHouseDoorFill,BsShopWindow,BsPersonBadge,BsPersonCircle,BsFillKeyFill,BsFillPersonPlusFill,BsFillLockFill,BsSearch,
  BsFacebook,BsTwitter,BsInstagram,BsTiktok} from 'react-icons/bs'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 


function Inicio() {
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
                <a className="nav-link disabled" href="/index.html">
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


              <div className="row">
          <div className="col-2" style={{ paddingRight: '5px' }}>
            <a href="https://www.nintenderos.com/2023/03/nintendo-nos-felicita-el-dia-de-mario-con-este-mensaje-mar10day">
              <img src={require('../img/mario_day.png')}alt="Mario Day" />
            </a>
          </div>
          <div className="col-8">
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="3000">
                  <a href="https://www.nintendo.com/es-cl/switch/oled-model/">
                    <img src={require("../img/logo-de-nintendo-1.png")} className="d-block w-100" alt="Nintendo" />
                  </a>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Revisa nuestros productos Nintendo</h5>
                    <p className="sub_texto">Ofertas por el día MAR10 day</p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                  <a href="https://www.playstation.com/es-cl/ps5/buy-now/">
                    <img src={require("../img/imagen_2.jpg")}  className="d-block w-100" alt="Playstation" />
                  </a>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Playstation</h5>
                    <p className="sub_texto">Revisa nuestros productos Playstation 5</p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                  <a href="https://www.xbox.com/es-CL/consoles/xbox-series-x">
                    <img src={require("../img/imagen_3.jpg")} className="d-block w-100" alt="Xbox" />
                  </a>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>X-box Series X / S</h5>
                    <p className="sub_texto">Revisa nuestras ofertas de Xbox</p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                  <a href="https://www.nintendo.com/es-cl/store/products/the-legend-of-zelda-tears-of-the-kingdom-switch/">
                    <img src={require("../img/preventa zelda.jpg")}  className="d-block w-100" alt="The Legend of Zelda" />
                  </a>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>The Legend of Zelda<br />Tear of the kingdom</h5>
                    <p className="sub_texto">¡Reserva tu copia!</p>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
              </button>
            </div>
          </div>
          <div className="col-1">
            <a href="https://www.nintendo.com/es-cl/store/products/kirby-and-the-forgotten-land-switch/">
              <img src={require('../img/KIRBY-AND-THE-FORGOTTEN-LAND-SWITCH-IZQUIERDA.png')} alt="Kirby" style={{ paddingBottom: '15px' }} />
            </a>
            <br/>
            <a href="https://funko.com/">
              <img src={require('../img/funko-imagen-estatica-derecha.png')} alt="Funko" />
            </a>
          </div>
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

export default Inicio;