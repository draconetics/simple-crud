import React from 'react';
import './App.css';
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
} from 'reactstrap';

const data = [
  { id: 1, personaje: 'Naruto', anime: 'Naruto' },
  { id: 2, personaje: 'Goku', anime: 'Dragon Ball' },
  { id: 3, personaje: 'Kenshin Himura', anime: 'Rurouni Kenshin' },
  { id: 4, personaje: 'Monkey D. Luffy', anime: 'One Piece' },
  {
    id: 5,
    personaje: 'Edward Elric',
    anime: 'Fullmetal Alchemist: Brotherhood',
  },
  { id: 6, personaje: 'Seto Kaiba', anime: 'Yu-Gi-Oh!' },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      modalActualizar: false,
      modalInsertar: false,
      form: {
        id: '',
        personaje: '',
        anime: '',
      },
    };
  }

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    let contador = 0;
    // eslint-disable-next-line react/destructuring-assignment
    const { data: arreglo } = this.state.data;

    arreglo.map((registro) => {
      if (dato.id === registro.id) {
        arreglo[contador].personaje = dato.personaje;
        arreglo[contador].anime = dato.anime;
      }
      contador += 1;
      return registro;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };


  eliminar = (dato) => {
    const opcion = window.confirm(
      `Estás Seguro que deseas Eliminar el elemento ${dato.id}`,
    );
    if (opcion === true) {
      let contador = 0;
      const { data: arreglo } = this.state;
      arreglo.map((registro) => {
        if (dato.id === registro.id) {
          arreglo.splice(contador, 1);
        }
        contador += 1;
        return registro;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar = () => {
    const { data: lista, form: valorNuevo } = this.state;
    valorNuevo.id = lista.length + 1;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  };

  handleChange = (e) => {
    const { form } = this.state;
    this.setState({
      form: {
        ...form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    const {
      modalInsertar, form, modalActualizar, data: lista,
    } = this.state;
    return (
      <div data-test="app-component">
        <Container>
          <br />
          <Button color="success" onClick={() => this.mostrarModalInsertar()}>
            Crear
          </Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Personaje</th>
                <th>Anime</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {lista && lista.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.personaje}</td>
                  <td>{dato.anime}</td>
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>
                    {' '}
                    <Button color="danger" onClick={() => this.eliminar(dato)}>
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal className="edit-dialog" isOpen={modalActualizar}>
          <ModalHeader>
            <div>
              <h3>Editar Registro</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Id:</label>

              <input
                className="form-control"
                readOnly
                type="text"
                value={form.id}
                name="id"
              />
            </FormGroup>

            <FormGroup>
              <label>Personaje:</label>
              <input
                className="form-control"
                name="personaje"
                type="text"
                onChange={this.handleChange}
                value={form.personaje}
              />
            </FormGroup>

            <FormGroup>
              <label>Anime:</label>
              <input
                className="form-control"
                name="anime"
                type="text"
                onChange={this.handleChange}
                value={form.anime}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(form)}
            >
              Editar
            </Button>
            <Button color="danger" onClick={() => this.cerrarModalActualizar()}>
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>

        <Modal className="create-dialog" isOpen={modalInsertar}>
          <ModalHeader>
            <div>
              <h3>Insertar Personaje</h3>
            </div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>Id:</label>

              <input
                className="form-control"
                readOnly
                type="text"
                value={lista.length + 1}
              />
            </FormGroup>

            <FormGroup>
              <label>Personaje:</label>
              <input
                className="form-control"
                name="personaje"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

            <FormGroup>
              <label>Anime:</label>
              <input
                className="form-control"
                name="anime"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={() => this.insertar()}>
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default App;
