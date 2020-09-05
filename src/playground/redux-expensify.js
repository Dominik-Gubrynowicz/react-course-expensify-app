import { createStore, combineReducers } from 'redux';




store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses =  getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 3000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -2100 }));

// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 400 }));

// store.dispatch(setTextFilter('e'));
 store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(123));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(75));


const demoState = {
    expenses: [{
        id: 'afafa',
        description: 'January Rent',
        notes: 'This wasthe final payment',
        amount: 54500,
        createAt: 0
    }],
    filters: {
        text:  'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};