import AddButton from "./AddButton";
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { useRef, useState, useContext } from "react";
import { ExpensesContext } from "../store/tableContext";

export default function ExpensesForm() {
    const titleInput = useRef();
    const [value, setValue] = useState(null);
    const { expensesData, dispatch } = useContext(ExpensesContext);

    function handleAddExpense() {
        dispatch({
            type: "ADD_EXPENSE",
            payload: {
                nr: expensesData.expenses.length + 1, // Assuming nr is based on the length
                name: titleInput.current.value,
                value: value // Use the state value instead of ref
            }
        });

        // Clear the inputs
        titleInput.current.value = "";
        setValue(null);
    }

    return (
        <Card title="New Expense" className="max-w-[400px] p-10 flex justify-center">
            <form className="flex flex-col gap-4">
                <div>
                    <label htmlFor="title" className="font-bold block mb-2">Title</label>
                    <InputText ref={titleInput} style={{ maxWidth: "25rem" }} />
                </div>
                <div>
                    <label htmlFor="value" className="font-bold block mb-2">Value</label>
                    <InputNumber
                        value={value}
                        onValueChange={(e) => setValue(e.value)} // Updates state on change
                        showButtons
                        style={{ maxWidth: "25rem" }}
                    />
                </div>
            </form>
            <AddButton onClick={handleAddExpense} />
        </Card>
    );
}
