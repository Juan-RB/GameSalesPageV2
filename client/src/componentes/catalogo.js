import React, { Fragment } from "react";
import "../index.css"
import { BsPeopleFill,BsHouseDoorFill,BsShopWindow,BsPersonBadge,BsPersonCircle,BsFillKeyFill,BsFillPersonPlusFill,BsFillLockFill,BsSearch,
  BsFacebook,BsTwitter,BsInstagram,BsTiktok} from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css'; 


// esta es la incrustacion de la funcion Contact en donde va el js , html a traves de un fragment 
// aqui va todo lo relacionado con la pagina web 
function truncateTitle(title, maxLength) {
  if (title.length <= maxLength) {
    return title;
  }
  return title.substring(0, maxLength) + '...';
}
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
                  <a className="nav-link disabled" href="/client/public/catalogo.html">
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

          {/* Aqui termina la nav bar */}
      <div className="nintendo">
          <div className="row">
            <div className="row" >                  
              <div class="titulo" >
                  <img id="nintendo" src={require('../img/Logo_Nintendo.png')} alt="nintendo" />
              </div>        
            </div>   
          
            <div className="col-1"></div>
            <div className="col-10 g-4">
              <div className="row row-cols-1 row-cols-md-3 g-5">
                <div id="Card" className="col">
                  <div id="carta1" className="card h-100">
                    <a href="https://www.nintendo.com/es-cl/store/products/mario-party-superstars-switch/">
                      <img src={require('../img/Mario Party Superstars.jpg')} id='size_cards_image' className="card-img-top" alt="MPS"/>
                    </a>
                      <div className="card-body">
                        <h5 className="card-title">{truncateTitle("Mario Party™ Superstars", 25)}</h5>
                          <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </p>
                          <div className="row">
                            <button className="btn btn-danger">Comprar</button>
                          </div>
                      </div>
                  </div>
                </div>
                <div id="Card" className="col">
                  <div id="carta2" className="card h-100">
                    <a href="https://www.nintendo.com/es-cl/store/products/mario-kart-8-deluxe-switch/">
                      <img src={require('../img/MarioKart_Deluxe8.jpg')} id='size_cards_image' className="card-img-top" alt="MKD8"/>
                    </a>
                      <div className="card-body">
                        <h5 className="card-title">
                        {truncateTitle("Mario Kart™ 8 Deluxe", 25)}
                        </h5>
                          <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </p>
                          <div className="row">
                            <button className="btn btn-danger">Comprar</button>
                          </div>
                      </div>
                  </div>
                </div>
                <div id="Card" className="col">
                  <div id="carta3" className="card h-100">
                    <a href="https://www.nintendo.com/es-cl/store/products/super-mario-3d-world-plus-bowsers-fury-switch/">
                      <img src={require('../img/Super_Mario_3d_world.jpeg')}  id='size_cards_image' className="card-img-top" alt="SM3DW"/>
                    </a>
                      <div className="card-body">
                        <h5 className="card-title">
                        {truncateTitle("Super Mario™ 3D World + Bowser's Fury", 25)}
                        </h5>
                          <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </p>
                          <div className="row">
                            <button className="btn btn-danger">Comprar</button>
                          </div>
                      </div>
                  </div>
                </div>
                <div id="Card" className="col">
                  <div id="carta4" className="card h-100">
                    <a href="https://www.nintendo.com/es-cl/store/products/mario-plus-rabbids-sparks-of-hope-switch/">
                      <img src={require('../img/original.jpeg')} id='size_cards_image' className="card-img-top" alt="MPRSHS"/>
                    </a>
                      <div className="card-body">
                        <h5 className="card-title">
                        {truncateTitle("MARIO + RABBIDS SPARKS OF HOPE", 23)}
                          </h5>
                          <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </p>
                          <div className="row">
                            <button className="btn btn-danger">Comprar</button>
                          </div>
                      </div>
                  </div>
                </div>
                <div id="Card" className="col">
                  <div id="carta5" className="card h-100">
                    <a href="https://www.nintendo.com/es-cl/store/products/new-super-mario-bros-u-deluxe-switch/">
                      <img src={require('../img/super_mario_deluxe.jpg')} id='size_cards_image' className="card-img-top" alt="SMDU"/>
                    </a>
                      <div className="card-body">
                        <h5 className="card-title">
                          {truncateTitle("New Super Mario Bros.™ U Deluxe", 25)}
                          </h5>
                          <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </p>
                          <div className="row">
                            <button className="btn btn-danger">Comprar</button>
                          </div>
                      </div>
                  </div>
                </div>
                <div id="Card" className="col">
                  <div id="carta6" className="card h-100">
                    <a href="https://www.nintendo.com/es-cl/store/products/super-mario-maker-2-switch/">
                      <img src={require('../img/smm2-share-fb.jpg')} id='size_cards_image' className="card-img-top" alt="SMM2S"/>
                    </a>
                      <div className="card-body">
                        <h5 className="card-title">
                          {truncateTitle("Super Mario Maker™ 2", 25)}
                          </h5>
                          <p className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </p>
                          <div className="row">
                            <button className="btn btn-danger">Comprar</button>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>  {/* aqui termina nintendo */}
                    
      <div className="playstation">
        <div className="container">
            <div className="row">
                <div className="titulo2">
                  <img id="imag_ps"src={require("../img/logo_PS.png")} alt="Play Station"/>
                </div>
            </div>

            <div className="col"></div>
                <div className="row" >
                    <div className="col-1"></div>
                    
                    <div className="col-10 g-4">
                        <div className="row row-cols-1 row-cols-md-3 g-5">
                            <div id="Card"className="col">
                                <div id="carta1" className="card h-100">
                                        <a href="https://store.playstation.com/es-es/product/EP0002-CUSA02626_00-CODBO3ZOMBIESEDN">
                                          <img src={require("../img/bo3.jpg")} id='size_cards_image_1' className="card-img-top" alt="..."/>
                                        </a> 
                                    <div className="card-body">
                                        <h5 className="card-title">
                                          {truncateTitle("Call of Duty®: Black Ops III - ZC Edition", 25)}
                                          </h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <div className="row">
                                          <button className="btn btn-primary">Comprar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="Card" className="col">
                                <div id="carta2"className="card h-100">
                                    <a href="https://store.playstation.com/es-es/product/EP0700-PPSA04609_00-ELDENRINGDLX0000">
                                      <img src={require("../img/elnden ring.jpg")} id='size_cards_image_1' className="card-img-top" alt="..."/>
                                      </a> 
                                    <div className="card-body">
                                        <h5 className="card-title">
                                          {truncateTitle(" ELDEN RING Deluxe Edition™ 2", 25)}
                                        </h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <div className="row">
                                          <button className="btn btn-primary">Comprar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="Card"className="col">
                                <div id="carta3"className="card h-100">
                                    <a href="https://store.playstation.com/es-es/product/EP9000-PPSA08331_00-GOWRAGNAROK00000">
                                      <img src={require("../img/gow_ragnarok.jpeg")} id='size_cards_image_1' className="card-img-top" alt="..."/>
                                    </a> 
                                    <div className="card-body">
                                        <h5 className="card-title">
                                          {truncateTitle("God of War Ragnarök™ 2", 25)}
                                          </h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <div className="row">
                                          <button className="btn btn-primary">Comprar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="Card"className="col">
                                <div id="carta4"className="card h-100">
                                        <a href="https://store.playstation.com/es-es/product/EP0101-CUSA05597_00-MAINGAME00000000">
                                          <img src={require("../img/metal_gear_v.jpg")} id='size_cards_image_1' className="card-img-top" alt="..."/>
                                        </a> 
                                    <div className="card-body">
                                        <h5 className="card-title">
                                          {truncateTitle("Metal Gear Solid V: The Definitive Experience", 25)}
                                          </h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <div className="row">
                                          <button className="btn btn-primary">Comprar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="Card"className="col">
                                <div id="carta5"className="card h-100">
                                    <a href="https://store.playstation.com/es-es/product/EP0102-PPSA07412_00-RE4RMAINGAME0000">
                                      <img src={require("../img/RE4_remake.jpg")} id='size_cards_image_1' className="card-img-top" alt="..."/>
                                    </a> 
                                    <div className="card-body">
                                        <h5 className="card-title">
                                          {truncateTitle("Resident Evil 4 ", 25)}
                                          </h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <div className="row">
                                          <button className="btn btn-primary">Comprar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="Card"className="col">
                                <div id="carta6"className="card h-100">
                                        <a href="https://store.playstation.com/es-es/product/EP9000-CUSA10249_00-THELASTOFUSPART2">
                                          <img src={require("../img/the_last_of_us.jpg")} id='size_cards_image_1' className="card-img-top" alt="..."/>
                                        </a> 
                                    <div className="card-body">
                                        <h5 className="card-title">
                                          {truncateTitle("The Last of Us Parte II", 25)}
                                          </h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <div className="row">
                                          <button className="btn btn-primary">Comprar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
        </div>
      </div> {/* Aqui termina PlayStation */}
      <div class="XBOX">
        <div class="container">
            <div class="row">
                <div class="titulo3">
                  <img id="imag_XBOX" src={require("../img/Xbox_logo_123.png")} alt="XBOX"/>
                </div>
            </div>
                <div class="row" >
                    <div class="col-1"></div>
                    
                    <div class="col-10 g-4">
                        <div class="row row-cols-1 row-cols-md-3 g-5">
                            <div id="Card"class="col">
                                <div id="carta1" class="card h-100">
                                        <a href="https://www.xbox.com/es-cl/games/store/sekiro-shadows-die-twice---edicin-juego-del-ao/BQD5WRRP2D6Q">
                                          <img src={require("../img/Sekiro-header.jpg")} id='size_cards_image_1' class="card-img-top" alt="..."/>
                                        </a> 
                                    <div class="card-body">
                                        <h5 class="card-title">
                                          {truncateTitle("Sekiro™: Shadows Die Twice", 25)}
                                          </h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <div className="row">
                                          <button className="btn btn-success">Comprar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="Card" class="col">
                                <div id="carta2"class="card h-100">
                                    <a href="https://www.xbox.com/es-cl/games/store/cuphead--the-delicious-last-course/9NB0115C9WNM">
                                      <img src={require("../img/cuphead.jpg")} id='size_cards_image_1' class="card-img-top" alt="..."/>
                                    </a>
                                    <div class="card-body">
                                        <h5 class="card-title">
                                          {truncateTitle("Cuphead & The Delicious Last Course", 25)}
                                          </h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <div className="row">
                                          <button className="btn btn-success">Comprar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="Card"class="col">
                                <div id="carta3"class="card h-100">
                                    <a href="https://www.xbox.com/es-cl/games/cyberpunk-2077">
                                      <img src={require("../img/cyberpunk.jpg")} id='size_cards_image_1' class="card-img-top" alt="..."/>
                                    </a> 
                                    <div class="card-body">
                                        <h5 class="card-title">
                                          {truncateTitle("Cyberpunk 2077", 25)}
                                          </h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <div className="row">
                                          <button className="btn btn-success">Comprar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="Card"class="col">
                                <div id="carta4"class="card h-100">
                                        <a href="https://www.xbox.com/es-cl/games/fifa-23">
                                          <img src={require("../img/FIFA23.png")} id='size_cards_image_1' class="card-img-top" alt="..."/>
                                          </a> 
                                    <div class="card-body">
                                        <h5 class="card-title">
                                          {truncateTitle("EA SPORTS™ FIFA 23", 25)}
                                          </h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <div className="row">
                                          <button className="btn btn-success">Comprar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="Card"class="col">
                                <div id="carta5"class="card h-100">
                                    <a href="https://www.xbox.com/es-cl/games/gta-v">
                                      <img src={require("../img/GTAV.jpg")} id='size_cards_image_1' class="card-img-top" alt="..."/>
                                    </a> 
                                    <div class="card-body">
                                        <h5 class="card-title">
                                          {truncateTitle("Grand Theft Auto V", 25)}
                                          </h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <div className="row">
                                          <button className="btn btn-success">Comprar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="Card"class="col">
                                <div id="carta6"class="card h-100">
                                        <a href="https://www.xbox.com/es-CL/games/store/mortal-kombat-11/BTC0L0BW6LWC/0001">
                                          <img src={require("../img/MK11.jpg")} id='size_cards_image_1' class="card-img-top" alt="..."/> 
                                        </a>
                                    <div class="card-body">
                                        <h5 class="card-title">
                                          {truncateTitle("Mortal Kombat 11", 25)}
                                          </h5>
                                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <div className="col">
                                        <div className="row">
                                          <button className="btn btn-success">Comprar</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-1"></div>
                </div>
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

export default Formulario;



