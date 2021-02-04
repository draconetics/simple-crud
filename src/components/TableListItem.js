import React from 'react';
import { Button } from 'reactstrap';
import { PropTypes } from 'prop-types';

export default function TableListItem({ item, editItem, deleteItem }) {
  return (
    <>
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.personaje}</td>
        <td>{item.anime}</td>
        <td>
          <Button color="primary" onClick={() => editItem(item)}>
            Edit
          </Button>
          <Button color="danger" onClick={() => deleteItem(item)}>
            Delete
          </Button>
        </td>
      </tr>
    </>
  );
}

const item = {
  id: PropTypes.number,
  character: PropTypes.string,
  anime: PropTypes.string,
};

TableListItem.propTypes = {
  item: PropTypes.shape(item).isRequired,
  deleteItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
};
