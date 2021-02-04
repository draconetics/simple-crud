import React from 'react';
import { Table, Container } from 'reactstrap';
import { PropTypes } from 'prop-types';
import TableListItem from './TableListItem';

export default function TableList({ list, openModal, setItem, saveList }) {
  const editItem = (item) => {
    openModal('edit_type');
    setItem(item);
  };

  const deleteItem = (item) => {
    const shouldDelete = window.confirm('Delete?');
    if (shouldDelete === true) {
      const newList = list.filter((register) => register.id !== item.id);
      saveList(newList);
    }
  };

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Character</th>
            <th>Anime</th>
            <th>Operations</th>
          </tr>
        </thead>

        <tbody>
          {list
            && list.map((item) => (
              <TableListItem item={item} editItem={editItem} deleteItem={deleteItem} />
            ))}
        </tbody>
      </Table>
    </Container>
  );
}

const item = {
  id: PropTypes.number,
  character: PropTypes.string,
  anime: PropTypes.string,
};
TableList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape(item)).isRequired,
  openModal: PropTypes.func.isRequired,
  setItem: PropTypes.func.isRequired,
  saveList: PropTypes.func.isRequired,
};
