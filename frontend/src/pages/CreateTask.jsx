import React,{useState} from 'react'
import { BreadCrumb } from 'primereact/breadcrumb';
import { Card } from 'primereact/card';
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Calendar } from 'primereact/calendar';      
import { Button } from 'primereact/button'; 
import { MultiSelect } from 'primereact/multiselect';

const CreateTask = () => {
    const items = [{ label: 'Create Task'}];
    const home = { label: 'Home', url: '/create-task' }

    const [value, setValue] = useState('');
    const [date, setDate] = useState(null);

     const [selectedCities, setSelectedCities] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
  return (
    <div className='w-full flex flex-column p-3 md:p-4'>
      <BreadCrumb model={items} home={home} className='w-full border-transparent'/>
      
       <Card title="Create Task" className='w-full'>
        <div className="w-full grid m-0">
            <div className="col-12 md:col-6 flex flex-column ">
                <label htmlFor="projectitle" className='font-semibold mb-1'>Task Title</label>
                <InputText id="projectitle" aria-describedby="projectitle" className='p-2'/>
                <small id="projectitle" className='mt-1'>
                    Enter your username to reset your password.
                </small>
            </div>
            <div className="col-12 md:col-6 flex flex-column  ">
                <label htmlFor="projecttype" className='font-semibold mb-1'>Task Type</label>
                <InputText id="projecttype" aria-describedby="projecttype" className='p-2'/>
                <small id="projecttype" className='mt-1'>
                    Enter your username to reset your password.
                </small>
            </div>
            <div className="col-12 md:col-6 flex flex-column  ">
                <label htmlFor="buttondisplay" className="font-semibold mb-1">
                    Start Date
                </label>
                <Calendar id="buttondisplay" value={date} onChange={(e) => setDate(e.value)} showIcon/>
            </div>
            <div className="col-12 md:col-6 flex flex-column  ">
                <label htmlFor="buttondisplay" className="font-semibold mb-1">
                    End Date
                </label>
                <Calendar id="buttondisplay" value={date} onChange={(e) => setDate(e.value)} showIcon/>
            </div>
            <div className="col-12 flex flex-column">
                <label htmlFor="buttondisplay" className="font-semibold mb-1">
                    Task Description
                </label>
                <InputTextarea value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
            </div>
            <div className="col-12 md:col-6 flex flex-column md:flex-row p-0">
                <div className="col-12 w-full flex flex-column">
                    <label htmlFor="buttondisplay" className="font-semibold mb-1">
                        Assign To:
                    </label>
                    <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options=   {cities}       optionLabel="name" 
                    placeholder="Select Cities" maxSelectedLabels={3} className="w-full" />
                </div>
                
                <div className="col-12 w-full flex flex-column">
                    <label htmlFor="buttondisplay" className="font-semibold mb-1">
                        Priority:
                    </label>
                    <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options=   {cities}       optionLabel="name" 
                    placeholder="Select Cities" className="w-full" />
                </div>
            </div>
            <div className="col-12 flex justify-content-end flex-wrap gap-4">
                <Button label="Create" />
                <Button label="Delete" outlined />
            </div>
        </div>
            
       </Card>
     
    </div>
  )
}

export default CreateTask
