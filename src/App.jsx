import './App.css';
import { useContext } from 'react';
import ExpensesTable from './components/ExpensesTable';
import { PrimeReactProvider } from "primereact/api";
import Tailwind from 'primereact/passthrough/tailwind';
import Header from './components/Header';
import ExpensesForm from './components/ExpensesForm';
import { ExpensesContext, ExpensesContextProvider } from './store/tableContext';
import Footer from './components/Footer';
function App() {


  return (
    <>
      <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
        <ExpensesContextProvider>
          <div className='flex flex-col justify-between min-h-screen'>
            <Header title={"CRUD CONTEXT APP"} />
            <main className='flex justify-center flex-wrap gap-6'>
              <ExpensesTable />
              <ExpensesForm />
            </main>
            <Footer/>
        </div>
        </ExpensesContextProvider>
      </PrimeReactProvider>
    </>
  );
}

export default App;
