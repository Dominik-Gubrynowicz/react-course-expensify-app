import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";
import moment from 'moment';

test('should expense render ExpenseForm correctly', () => {
   const wrapper = shallow(<ExpenseForm />);
   expect(wrapper).toMatchSnapshot()
});

test('should expense render ExpenseForm correctly with expense data', () => {
   const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
   expect(wrapper).toMatchSnapshot()
});

test('should render error on invalid form submission', () => {
   const wrapper = shallow(<ExpenseForm />);
   expect(wrapper).toMatchSnapshot();
   wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
   });
   expect(wrapper.state('error').length).toBeGreaterThan(0);
   expect(wrapper).toMatchSnapshot();
});

test('should change description on input change', () => {
   const value = 'New description';
   const wrapper = shallow(<ExpenseForm />);
   wrapper.find('input').at(0).simulate('change', {
      target: { value }
   });
   expect(wrapper.state('description')).toBe(value);
})

test('should change state on textarea change', () => {
   const value = 'Test note';
   const wrapper = shallow(<ExpenseForm />);
   wrapper.find('textarea').simulate('change', {
      target: { value }
   });
   expect(wrapper.state('note')).toBe(value);
});

test('should change state if input is valid', () => {
   const value = '21.33';
   const wrapper = shallow(<ExpenseForm />);
   wrapper.find('input').at(1).simulate('change', {
      target: { value }
   });
   expect(wrapper.state('amount')).toBe(value);
});

test('should not change state if input is invalid', () => {
   const value = '223.456';
   const wrapper = shallow(<ExpenseForm />);
   wrapper.find('input').at(1).simulate('change', {
      target: { value }
   });
   expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit prop for valid form submission', () => {
   const onSubmitSpy = jest.fn();
   const wrapper = shallow(<ExpenseForm expense={expenses[1]} onSubmit={onSubmitSpy} />);
   wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
   });
   expect(wrapper.state('error')).toBe('');
   expect(onSubmitSpy).toHaveBeenLastCalledWith({
      description: expenses[1].description,
      amount: expenses[1].amount,
      createdAt: expenses[1].createdAt,
      note: expenses[1].note
   });
});

test('should set new date on date change', () => {
   const now = moment();
   const wrapper = shallow(<ExpenseForm />);
   wrapper.find('SingleDatePicker').prop('onDateChange')(now);
   expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set focus state on callerndar focus', () => {
   const focused = true;
   const wrapper = shallow(<ExpenseForm />);
   wrapper.find('SingleDatePicker').prop('onFocusChange')({focused} );
   expect(wrapper.state('callendarFocused')).toBe(true);
});