import React from 'react';
import { ModalFooter, Button } from 'reactstrap';
import { PropTypes } from 'prop-types';

export default function CustomModalFooter({
  list,
  saveList,
  closeModal,
  item,
  modalType,
}) {
  const saveItem = () => {
    if (modalType === 'create_type') {
      // eslint-disable-next-line no-param-reassign
      item.id = list.length + 1;
      list.push(item);
    }

    if (modalType === 'edit_type') {
      list.map((register) => {
        if (item.id === register.id) {
          // eslint-disable-next-line no-param-reassign
          register.character = item.character;
          // eslint-disable-next-line no-param-reassign
          register.anime = item.anime;
        }
        return register;
      });
    }
    saveList(list);
    closeModal();
  };

  const getTextButton = () => {
    let text = 'default button';
    if (modalType === 'create_type') text = 'New';
    if (modalType === 'edit_type') text = 'Save';

    return text;
  };

  return (
    <>
      <ModalFooter>
        <Button color="primary" onClick={() => saveItem()}>
          {getTextButton()}
        </Button>
        <Button color="danger" onClick={() => closeModal()}>
          Cancel
        </Button>
      </ModalFooter>
    </>
  );
}

const item = {
  id: PropTypes.any,
  character: PropTypes.string,
  anime: PropTypes.string,
};
CustomModalFooter.propTypes = {
  closeModal: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape(item)).isRequired,
  saveList: PropTypes.func.isRequired,
  item: PropTypes.shape(item).isRequired,
  modalType: PropTypes.string.isRequired,
};
