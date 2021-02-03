import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

describe('#App', () => {
  describe('#App Events', () => {
    let wrapper;
    beforeAll(() => {
      wrapper = mount(<App />);
    });

    it('should show dialog of create new "Personaje"', () => {
      const crearButton = wrapper.findWhere((node) => node.type() === 'button' && node.text() === 'Crear');
      expect(crearButton).toHaveLength(1);
      crearButton.simulate('click');
      expect(wrapper.find('.create-dialog h3').text()).toBe(
        'Insertar Personaje'
      );
    });

    it('should show dialog of edit "Personaje"', () => {
      wrapper = mount(<App />);
      const editButton = wrapper.findWhere(
        (node) => node.type() === 'button' && node.text() === 'Editar'
      );

      expect(editButton).toHaveLength(6);
      editButton.at(0).simulate('click');
      expect(wrapper.find('.edit-dialog h3').text()).toBe('Editar Registro');
    });

    it('should show dialog of delete "Personaje"', () => {
      jest.spyOn(window, 'confirm').mockImplementation(() => {});
      wrapper = mount(<App />);
      const deleteButton = wrapper.findWhere(
        (node) => node.type() === 'button' && node.text() === 'Eliminar'
      );
      expect(deleteButton).toHaveLength(6);
      deleteButton.at(0).simulate('click');
      expect(window.confirm).toBeCalled();
    });
  });
  describe('#App render', () => {
    let wrapper;
    beforeAll(() => {
      wrapper = mount(<App />);
    });

    it('should Render App without errors', () => {
      const component = wrapper.find('[data-test="app-component"]');
      expect(component.length).toBe(1);
    });

    it('should Render "crear" button without errors', () => {
      const crearButton = wrapper.findWhere((node) => node.type() === 'button' && node.text() === 'Crear');
      expect(crearButton.length).toBe(1);
    });

    it('should Render a table without errors', () => {
      expect(wrapper.find('.table')).toHaveLength(1);
    });

  });
});
