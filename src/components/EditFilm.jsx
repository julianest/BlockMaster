import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import useForm from '../hooks/useForm';
import { editFilmAsync} from '../redux/actions/actionPeliculas';

const EditFilm = ({ datos, setModal }) => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  const [formValue, handleInputChange] = useForm({
    release: datos.release,
  })
  const { release, id } = formValue
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue)
    dispatch(editFilmAsync(id, formValue))
    handleClose()
  }
  return (
    <div>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Editar Pelicula</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit} margin={50}>
              <Form.Group className="mb-3" controlId="formRelease">
                <Form.Label>Fecha de lanzamiento</Form.Label>
                <Form.Control type="text" name="release" placeholder="Fecha lanzamiento" value={release} onChange={handleInputChange} />
              </Form.Group>
              <Button type="submit">
                Editar
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default EditFilm;