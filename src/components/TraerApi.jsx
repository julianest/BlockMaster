import useForm from "../hooks/useForm";
import { addDoc, collection } from 'firebase/firestore';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { DB } from '../firebase/Firebase.js';

const TraerApi = () => {
  let [formValue, handleInputChange, rest] = useForm({
    api: '',
    vueltas: ''
  })
  const { api, vueltas } = formValue
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(api, vueltas)
    cargarApi(api, vueltas)
    rest()
  }
  const cargarApi = async (api, vueltas) => {
    for (let i = 1; i <= vueltas; i++) {
      const resp = await fetch(api)
      const data = await resp.json()
      console.log(data.results)
      enviarFirestore(data.results)
    }
  }
  const enviarFirestore = (data) => {
    data.forEach(card => {
      const { id, overview, title, vote_average, backdrop_path, adult, original_language, poster_path, video, release_date } = card
      const cargar = {
        id: id,
        resume: overview,
        title: title,
        votation: vote_average,
        imagePoster: poster_path,
        imageBackdrop: backdrop_path,
        categoryAdult: adult,
        language: original_language,
        release: release_date,
        video: video
      }
      addDoc(collection(DB, "peliculas"), cargar)
        .then(resp => { console.log('dato cargado') })
        .catch(error => { console.log(error) })
    })
  }
  return (
    <div style={{ backgroundColor: "white" }} >
      <h1>Enviar Api a firebase</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="number"
          name="vueltas"
          placeholder='Ingresa el numero de veces a cargar la api'
          value={vueltas}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="api"
          placeholder='Ingrese url de api'
          value={api}
          onChange={handleInputChange}
        />
        <Button type="submit">Enviar</Button>
      </Form>
    </div>
  );
}
export default TraerApi;