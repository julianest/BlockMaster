import { Container, Card, Button, Modal } from "react-bootstrap";
import "../styles/index.css"
import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listFilmsAsync, deletFilmAsync } from "../redux/actions/actionPeliculas";
import "../styles/index.css";
import { Constantes } from "../helpers/constants";
import EditFilm from "./EditFilm";



const Listar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const { films } = useSelector(store => store.filmsStore)

  useEffect(() => {
    dispatch(listFilmsAsync()); //
  }, [dispatch])

  const [modalState, setModalState] = useState({});
  const {title} = modalState;

  const handleModal = (item) => {
    setShow(true);
    setModalState(item)
    console.log(modalState)
  }

  let mayores = "Mayores de 18 Años";
  let menores = "de 0 Años en adelante";
  const comparacion = (item) => {
    switch (item) {
      case "en":
        return "English"
      case "fr":
        return "French"
      case "es":
        return "Spanish"
      case "ja":
        return "Japanese"
      case "ko":
        return "Korean"
      case "ru":
        return "Russian"
      default:
        return "Otro"
    }
  }
  const [datos, setDatos] = useState([]);
  const [modal, setModal] = useState(false);
  const edit = (peli) => {
    setModal(true)
    setDatos(peli)
  }
  return (
    <>
      <Container>
        <div className="contImage">
          {films.map((item, i) => (
            <div key={item.id + i} style={{ marginLeft: "2%" }}>
              <a href="#home" onClick={() => handleModal(item)} id={item.id}>
                <Card style={{ width: '150px', backgroundColor: "black", color: "white", textAlign: "center" }}>
                  <Card.Img variant="top" src={Constantes.posterPath + item.imagePoster} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      Calificación: {item.votation}🔆
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </div>
          ))}
        </div>
        <Modal show={show} onHide={handleClose} className="modalContenedor">
          <Modal.Header closeButton>
            <Modal.Title>{title} </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="contModalImgDatos">
              <img src={Constantes.posterPath + modalState.imagePoster} alt={modalState.title} />
              <div className="contModalDatos" >
                <p>Fecha de Lanzamiento: {modalState.release}</p>
                <p>Calificación: {modalState.votation}</p>
                <p>Categoria: {modalState.categoryAdult ? mayores : menores}</p>
                <p>Lenguaje: {comparacion(modalState.language)}</p>
              </div>
            </div>
            <p>{modalState.resume}</p>
          </Modal.Body>
          <Modal.Footer className="modalFooter" >
            <h5>Todos los izquierdos reservados</h5>
            <div className="contBotonesModal">
              <Button variant="warning" onClick={() => edit(modalState)}>
                Editar
              </Button>
              <Button variant="danger" onClick={() => dispatch(deletFilmAsync(modalState.id))}>
                Elilminar
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
        {
          modal === true ? <EditFilm datos={datos} setModal={setModal} /> : ''
        }
      </Container>
    </>
  );
}
export default memo(Listar);