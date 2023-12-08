import React, { Fragment } from "react";
import "../index.css"
import { BsPeopleFill,BsHouseDoorFill,BsShopWindow,BsPersonBadge,BsPersonCircle,BsFillKeyFill,BsFillPersonPlusFill,BsFillLockFill,BsSearch,
  BsFacebook,BsTwitter,BsInstagram,BsTiktok} from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css'; 


// esta es la incrustacion de la funcion Contact en donde va el js , html a traves de un fragment 
// aqui va todo lo relacionado con la pagina web 

function Contact() {
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
                <a className="nav-link disabled" href="/client/public/contact.html">
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
        <>
            <div className="col-1"></div>
            <div className="col-10">
              {" "}
              <br />
              <h2 className="titulo_principal" style={{ fontSize: 45 }}>
                Historia
              </h2>
              <p className="sub_texto">
                Hace unos años, decidimos con un grupo de amigos fanáticos de los
                videojuegos fundar una tienda gamer en Chile. Queríamos crear un espacio
                donde los gamers pudieran encontrar todo lo que necesitaban para disfrutar
                al máximo de su pasión.
                <br />
                <br />
                Así fue como en el año 2015, abrimos las puertas de nuestra tienda en la
                comuna de Providencia en Santiago de Chile. Desde entonces, nos hemos
                dedicado a ofrecer productos y servicios de alta calidad para satisfacer
                las necesidades de los gamers.
                <br />
                <br />
                Nuestro propósito siempre ha sido brindar una experiencia única de compra
                y atención al cliente, donde los gamers puedan encontrar todo lo que
                necesitan en un solo lugar. Además, nuestra tienda se ha convertido en un
                punto de encuentro para los gamers de la zona, donde pueden compartir sus
                experiencias y conocer a otros jugadores con intereses similares.
                <br />
                <br />A lo largo de los años, hemos crecido y nos hemos expandido, gracias
                a nuestro compromiso con la calidad y la atención al cliente. Hoy en día,
                ofrecemos una amplia variedad de productos y servicios, desde videojuegos
                y consolas hasta accesorios y reparación de equipos.
              </p>
              <h2 className="titulo_principal" style={{ fontSize: 45 }}>
                Contáctanos
              </h2>
              <p className="sub_texto">
                Si tienes alguna pregunta o comentario sobre nuestros productos o
                servicios, no dudes en ponerte en contacto con nosotros. Estamos aquí para
                ayudarte y garantizar que tengas la mejor experiencia posible.
              </p>
              <form>
                <div className="form-group">
                  <label htmlFor="name" className="sub_texto">
                    Nombre
                  </label>
                  <input type="text" className="form-control" id="name" name="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="sub_texto">
                    Correo electrónico
                  </label>
                  <input type="email" className="form-control" id="email" name="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="sub_texto">
                    Mensaje
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows={5}
                    defaultValue={""}
                  />
                </div>{" "}
                <br />
                <button type="submit" className="btn btn-primary">
                  Enviar mensaje
                </button>
              </form>{" "}
              <br />
              <h2 className="titulo_principal" style={{ fontSize: 45 }}>
                Encuéntranos
              </h2>
              <p className="sub_texto">
                Visítanos en nuestra tienda física para conocer nuestros productos y
                recibir asesoramiento personalizado. También puedes seguirnos en nuestras
                redes sociales para estar al tanto de nuestras promociones y novedades.
                <br />
                <br />
                Nos encontramos en la calle Manuel Montt #1234, a sólo unos minutos a pie
                de la estación de metro Manuel Montt. Nuestra tienda está ubicada en una
                zona muy accesible y concurrida, lo que la hace fácil de encontrar.
                <br />
                <br />
                Estamos abiertos de lunes a sábado de 10:00 am a 8:00 pm y los domingos de
                12:00 pm a 6:00 pm. Además, durante días festivos o feriados especiales,
                nuestro horario puede variar, por lo que recomendamos estar atentos a
                nuestras redes sociales para mantenerse actualizados.
              </p>
            </div>
          </>



        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <h2 className="titulo_principal">Equipo de trabajo</h2>
            <div className="card-group">
              <div className="card">
                
                <img src={require('../img/silueta.jpg')} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="sub_texto1">Programador</h5>
                  <p className="sub_texto1">Juan Esteban Romero</p>
                </div>
                <div className="card-footer">
                  <small className="sub_texto1">Seccion 331D</small>
                </div>
              </div>
              <div className="card">
                <img src={require('../img/silueta.jpg')} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="sub_texto1">Programador</h5>
                  <p className="sub_texto1">Jimmy Valdés.</p>
                </div>
                <div className="card-footer">
                  <small className="sub_texto1">Seccion 331D</small>
                </div>
              </div>
              <div className="card">
                <img src={require('../img/silueta.jpg')} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="sub_texto1">Programador</h5>
                  <p className="sub_texto1">Miguel Vivanco</p>
                </div>
                <div className="card-footer">
                  <small className="sub_texto1">Seccion 331D</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
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

export default Contact;


