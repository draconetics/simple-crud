import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

describe('#App', () => {
  describe('#App Events', () => {
    let wrapper;
    beforeAll(() => {
      wrapper = mount(<App />);
    });

    it('should show dialog of create new character', () => {
      const createButton = wrapper.findWhere((node) => node.type() === 'button' && node.text() === 'Create');
      expect(createButton).toHaveLength(1);
      createButton.simulate('click');
      expect(wrapper.find('.custom-modal h3').text()).toBe(
        'Create new register',
      );
    });

    it('should show dialog of edit character', () => {
      wrapper = mount(<App />);
      const editButton = wrapper.findWhere(
        (node) => node.type() === 'button' && node.text() === 'Edit',
      );

      expect(editButton).toHaveLength(6);
      editButton.at(0).simulate('click');
      expect(wrapper.find('.custom-modal h3').text()).toBe('Edit Register');
    });

    it('should show dialog of delete character', () => {
      jest.spyOn(window, 'confirm').mockImplementation(() => {});
      wrapper = mount(<App />);
      const deleteButton = wrapper.findWhere(
        (node) => node.type() === 'button' && node.text() === 'Delete',
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

    it('should Render create button without errors', () => {
      const createButton = wrapper.findWhere((node) => node.type() === 'button' && node.text() === 'Create');
      expect(createButton.length).toBe(1);
    });

    it('should Render a table without errors', () => {
      expect(wrapper.find('.table')).toHaveLength(1);
    });
  });
});
