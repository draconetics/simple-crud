import React from 'react';
import { Button, Container } from 'reactstrap';
import { PropTypes } from 'prop-types';

export default function HeaderSection({ openModal }) {
  return (
    <Container>
      <br />
      <Button color="success" onClick={() => openModal('create_type')}>
        Create
      </Button>
      <br />
      <br />
    </Container>
  );
}
HeaderSection.propTypes = {
  openModal: PropTypes.func.isRequired,
};
