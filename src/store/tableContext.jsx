import { createContext, useReducer } from "react";
import { EXPENSES_DATA } from '../constants/ExpensesData';

export const ExpensesContext = createContext({
    expensesData: [],
    dispatch: () => {},
});

function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state, 
                expenses: [...state.expenses, action.payload]
            };
        case 'REMOVE_EXPENSE':
            return {
                ...state, 
                expenses: state.expenses.filter(expense => expense.nr !== action.payload)
            };
        default:
            return state;
    }
}


export const ExpensesContextProvider = ({ children }) => {
    const initialData = EXPENSES_DATA;
    const [expensesData, dispatch] = useReducer(expensesReducer, initialData);

    return (
        <ExpensesContext.Provider value={{ expensesData, dispatch}}>
            {children}
        </ExpensesContext.Provider>
    );
};
