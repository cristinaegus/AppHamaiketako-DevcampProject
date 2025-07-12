import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
  Label,
  Input
} from 'reactstrap';

const initialData = [
  { id: 1, bar: 'El Globo - Diputación 8', comentario: 'Los mejores pintxos de txangurro' },
  { id: 2, bar: 'La Viña  - Diputación 10 ', comentario: 'Lo mejor del ensanche, muy buen jamón'},
  { id: 3, bar: 'Sorginzulo - Plaza Nueva 12', comentario: 'Lo mejor de la plaza nueva , calamares impresionantes' },
  { id: 4, bar: 'La Antxoa - Plaza Nueva 1', comentario: 'Especialidad en antxoas, son las mejores' },
  { id: 5, bar: 'Motrikes - Goinkale 41', comentario: 'De calidad pero sin pretensiones' },
  { id: 6, bar: 'Sacacorchos - Heros 21', comentario: 'Donde encontrar los mejores vinos y cuidados pintxos' },
];

const Formulario = () => {
  const [data, setData] = useState(initialData);
  const [modalActualizar, setModalActualizar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [form, setForm] = useState({
    id: '',
    bar: '',
    comentario: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const mostrarModalActualizar = (dato) => {
    setForm(dato);
    setModalActualizar(true);
  };

  const cerrarModalActualizar = () => {
    setModalActualizar(false);
  };

  const mostrarModalInsertar = () => {
    setModalInsertar(true);
  };

  const cerrarModalInsertar = () => {
    setModalInsertar(false);
  };

  const editar = (dato) => {
    const newData = data.map(item => 
      item.id === dato.id ? { ...item, bar: dato.bar, comentario: dato.comentario } : item
    );
    setData(newData);
    setModalActualizar(false);
  };

  const eliminar = (dato) => {
    if (window.confirm(`¿Estás seguro que deseas eliminar el bar ${dato.bar}?`)) {
      setData(data.filter(item => item.id !== dato.id));
    }
  };

  const insertar = () => {
    const newItem = {
      ...form,
      id: data.length + 1,
    };
    setData([...data, newItem]);
    setModalInsertar(false);
    setForm({ id: '', bar: '', comentario: '' });
  };

  return (
    <div className="formulario-container">
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Lista de Bares y Comentarios</h2>
          <Button color="success" onClick={mostrarModalInsertar}>
            Añadir Nuevo Bar
          </Button>
        </div>

        <Table hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Bar</th>
              <th>Comentario</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {data.map((dato) => (
              <tr key={dato.id}>
                <td>{dato.id}</td>
                <td>{dato.bar}</td>
                <td>{dato.comentario}</td>
                <td>
                  <Button
                    color="primary"
                    className="me-2"
                    onClick={() => mostrarModalActualizar(dato)}
                  >
                    Editar
                  </Button>
                  <Button color="danger" onClick={() => eliminar(dato)}>
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      {/* Modal Actualizar */}
      <Modal isOpen={modalActualizar} toggle={cerrarModalActualizar}>
        <ModalHeader toggle={cerrarModalActualizar}>
          Editar Bar
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <Label for="id">ID:</Label>
            <Input
              type="text"
              id="id"
              name="id"
              value={form.id}
              readOnly
            />
          </FormGroup>
          
          <FormGroup>
            <Label for="bar">Bar:</Label>
            <Input
              type="text"
              id="bar"
              name="bar"
              value={form.bar}
              onChange={handleChange}
              placeholder="Nombre y dirección del bar"
            />
          </FormGroup>
          
          <FormGroup>
            <Label for="comentario">Comentario:</Label>
            <Input
              type="textarea"
              id="comentario"
              name="comentario"
              value={form.comentario}
              onChange={handleChange}
              placeholder="Escribe tu opinión sobre el bar"
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={() => editar(form)}>
            Guardar Cambios
          </Button>
          <Button color="secondary" onClick={cerrarModalActualizar}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>

      {/* Modal Insertar */}
      <Modal isOpen={modalInsertar} toggle={cerrarModalInsertar}>
        <ModalHeader toggle={cerrarModalInsertar}>
          Añadir Nuevo Bar
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <Label for="newBar">Bar:</Label>
            <Input
              type="text"
              id="newBar"
              name="bar"
              value={form.bar}
              onChange={handleChange}
              placeholder="Nombre y dirección del bar"
            />
          </FormGroup>
          
          <FormGroup>
            <Label for="newComentario">Comentario:</Label>
            <Input
              type="textarea"
              id="newComentario"
              name="comentario"
              value={form.comentario}
              onChange={handleChange}
              placeholder="Escribe tu opinión sobre el bar"
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={insertar}>
            Añadir Bar
          </Button>
          <Button color="secondary" onClick={cerrarModalInsertar}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Formulario;