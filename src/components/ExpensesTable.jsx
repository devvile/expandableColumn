import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button'; 
import { useState, useContext } from 'react';
import { Card } from 'primereact/card';
import 'primeicons/primeicons.css';
import { ExpensesContext } from '../store/tableContext';

export default function ExpensesTable() {
    const { expensesData, dispatch } = useContext(ExpensesContext);
    const [expandedRows, setExpandedRows] = useState(null); // Track expanded rows

    // Function to remove expense
    const removeExpense = (nr) => {
        dispatch({ type: "REMOVE_EXPENSE", payload: nr });
    };

    // Calculate the total value of the "value" column
    const totalValue = expensesData.expenses.reduce((total, expense) => total + expense.value, 0);

    // Template for delete button
    const deleteButtonTemplate = (rowData) => {
        return (
            <Button 
                severity="danger"
                icon="pi pi-times"
                className="p-button-rounded p-button-danger" 
                onClick={() => removeExpense(rowData.nr)}
                raised
            />
        );
    };

    // Row expansion template
    const rowExpansionTemplate = (data) => {
        return <h2>Expanded Content for {data.name}</h2>;
    };

    const columns = [
        { field: 'nr', header: 'Number' },
        { field: 'name', header: 'Name' },
        { field: 'value', header: 'Value' }
    ];

    return (
        <Card className='flex justify-center'>
            <DataTable 
                className="p-4 flex" 
                value={expensesData.expenses} 
                stripedRows 
                tableStyle={{ minWidth: '40rem' }}
                expandedRows={expandedRows} // Track expanded rows
                onRowToggle={(e) => setExpandedRows(e.data)} // Set expanded rows
                rowExpansionTemplate={rowExpansionTemplate} // Content for expanded rows
                dataKey="nr" // Unique identifier for rows
            >
                {/* Add the expander column */}
                <Column expander style={{ width: '3em' }} />

                {columns.map((col) => (
                    <Column
                        key={col.field}
                        field={col.field}
                        sortable
                        header={col.header}
                        footer={col.field === "value" ? `Total: ${totalValue}` : null}  // Add footer conditionally
                    />
                ))}

                <Column header="Remove" body={deleteButtonTemplate} />
            </DataTable>
        </Card>
    );
}
