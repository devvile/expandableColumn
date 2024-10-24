import { Button } from 'primereact/button';

export default function AddButton(props){
    return (<div className='flex justify-center py-2 my-5'>
      <Button raised {...props} label ="+ Add Expense"/>
    </div>)
}