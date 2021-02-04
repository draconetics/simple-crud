import React from 'react';
import { ModalHeader } from 'reactstrap';
import { PropTypes } from 'prop-types';

export default function CustomModalHeader({ tipoDeModal }) {
  const getHeaderText = () => {
    let headerText = 'Default Text';
    if (tipoDeModal === 'create_type') { headerText = 'Create new register'; }
    if (tipoDeModal === 'edit_type') { headerText = 'Edit Register'; }
    return headerText;
  };
  return (
    <>
      <ModalHeader>
        <div>
          <h3>{getHeaderText()}</h3>
        </div>
      </ModalHeader>
    </>
  );
}

CustomModalHeader.propTypes = {
  tipoDeModal: PropTypes.string.isRequired,
};
