import React from 'react';
import {
  Modal, ModalBody, FormGroup,
} from 'reactstrap';
import { PropTypes } from 'prop-types';
import CustomModalHeader from './CustomModalHeader';
import CustomModalFooter from './CustomModalFooter';

// eslint-disable-next-line react/prefer-stateless-function
class CustomModal extends React.Component {
  render = () => {
    const {
      modalStatus, closeModal, modalType, list, handleChange, item, saveList,
    } = this.props;
    return (
      <Modal className="custom-modal" isOpen={modalStatus}>
        <CustomModalHeader tipoDeModal={modalType} />
        <ModalBody>
          <FormGroup>
            <label>Id:</label>
            <input
              className="form-control"
              readOnly
              type="text"
              value={item.id || (list.length + 1)}
              name="id"
            />
          </FormGroup>

          <FormGroup>
            <label>Personaje:</label>
            <input
              className="form-control"
              name="character"
              type="text"
              onChange={handleChange}
              value={item.character}
            />
          </FormGroup>

          <FormGroup>
            <label>Anime:</label>
            <input
              className="form-control"
              name="anime"
              type="text"
              onChange={handleChange}
              value={item.anime}
            />
          </FormGroup>
        </ModalBody>
        <CustomModalFooter
          closeModal={closeModal}
          list={list}
          saveList={saveList}
          modalType={modalType}
          item={item}
        />
      </Modal>
    );
  }
}

const item = {
  id: PropTypes.any,
  character: PropTypes.string,
  anime: PropTypes.string,
};
CustomModal.propTypes = {
  modalStatus: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape(item),
  ).isRequired,
  saveList: PropTypes.func.isRequired,
  modalType: PropTypes.string.isRequired,
  item: PropTypes.shape(item).isRequired,
  handleChange: PropTypes.func.isRequired,
};
export default CustomModal;
