// import TraerApi from "./TraerApi";
import { Container} from "react-bootstrap";
import "../styles/index.css"
import React, { useEffect} from 'react';
import { useDispatch} from 'react-redux';
import { listFilmsAsync } from "../redux/actions/actionPeliculas";
import "../styles/index.css";
import CarouselP from "./Carousel";
import Listar from "./Listar";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listFilmsAsync());
  }, [dispatch])

  return (
    <>
      <CarouselP />
      <Container>
        <h2 className="blockMaster" style={{ textAlign: "start" }} >Todas las Peliculas</h2>
        <Listar />
      </Container>
    </>
  );
}
export default Home;