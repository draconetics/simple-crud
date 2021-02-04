import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TableList from './components/TableList';
import data from './data/list';
import CustomModal from './components/CustomModal';
import HeaderSection from './components/HeaderSection';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      modalStatus: false,
      modalType: '',
      item: {
        id: '',
        character: '',
        anime: '',
      },
    };
    this.resetedItem = {
      id: '',
      character: '',
      anime: '',
    };
  }

  setModalType = (modalType) => {
    this.setState({ modalType });
  }

  openModal = (modalType) => {
    this.setState({ modalStatus: true, modalType, item: this.resetedItem });
  }

  closeModal = () => {
    this.setState({ modalStatus: false });
  }

  setItem = (newItem) => {
    this.setState({ item: { ...newItem } });
  }

  handleChange = (e) => {
    const { item } = this.state;
    this.setState({
      item: {
        ...item,
        [e.target.name]: e.target.value,
      },
    });
  };

  saveList = (list) => {
    this.setState({ data: list, item: this.resetedItem });
  }

  render() {
    const {
      modalStatus, data: list, modalType, item,
    } = this.state;
    return (
      <div data-test="app-component">
        <HeaderSection openModal={this.openModal} />
        <TableList
          list={list}
          saveList={this.saveList}
          openModal={this.openModal}
          setItem={this.setItem}
        />
        <CustomModal
          modalStatus={modalStatus}
          closeModal={this.closeModal}
          modalType={modalType}
          list={list}
          saveList={this.saveList}
          item={item}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}
export default App;
