import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should add new expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: '43',
            description: 'test expense',
            note: 'test note',
            amount: 345,
            createdAt: 321
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, action.expense]);
});

test('should remove expense by id', () => {
    const action = {
         type: 'REMOVE_EXPENSE',
         id: expenses[1].id
    };
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should not remove expense - id not exists', () => {
    const action = {
         type: 'REMOVE_EXPENSE',
         id: '-1'
    };
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses);
});

test('should edit given expense attributes', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            note: 'test note',
            amount: 344
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0]).toEqual({
        ...expenses[0],
        note: 'test note',
        amount: 344,
    });
});

test('should not edit any expense - id not exists', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        note: 'test note',
        amount: 344
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
   const state = expensesReducer(expenses, {type: 'SET_EXPENSES', expenses: [expenses[1]]});
   expect(state).toEqual([expenses[1]]);
});