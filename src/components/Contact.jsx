import React from 'react';
import { Container } from 'react-bootstrap';
import "../styles/index.css";
import BlockMasterTitle from './BlockMasterTitle';
import ChartMap from './Map';
// import TraerApi from './TraerApi';
// import { Constantes } from '../helpers/constants';

const Contact = () => {

  // const urlCargarFirebase=`${Constantes.baseUrl}${Constantes.best2010}${Constantes.apiKey}`;
  // console.log(urlCargarFirebase);  
  return (
    <>
      <BlockMasterTitle />
      {/* <div style={{backgroundColor: "white"}} >
                <TraerApi/>
            </div> */}
      <Container style={{ textAlign: "justify", color: "white" }}>
        <h1 className="blockMaster">CONOCE SOBRE NOSOTROS</h1>
        <br />
        <p>Somos un streaming online de peliculas series y videos, nos preocupamos por el bienestar de nuestros asociados brindandoles siempre la mejor informacion sobre sus peliculas favoritas, desde lanzamientos, resumenes, las mas taquilleras, votacion entre otras. </p>
        <br />
        <p>Nos encontrmaos en bogota en donde se encuentran nuestros servidores para mantener siempre nuestro gran servicio  activo, esperamos que te guste nuestro paquete de informacion de forma gratuita para ti.</p>
      </Container>
      <div>
        <h2 className="blockMaster">Encuentranos en la siguiente Ubicacion</h2>
      </div>
      <div className="contMap">
        <ChartMap />
      </div>
    </>
  )
}
export default Contact;