import React,{useState} from 'react'
import { BreadCrumb } from 'primereact/breadcrumb';
import { Card } from 'primereact/card';
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Calendar } from 'primereact/calendar';      
import { Button } from 'primereact/button'; 

const CreateProject = () => {
    const items = [{ label: 'Create Project'}];
    const home = { label: 'Home', url: '/' }

    const [value, setValue] = useState('');
    const [date, setDate] = useState(null);
  return (
    <div className='w-full flex flex-column '>
      <BreadCrumb model={items} home={home} className='w-full border-transparent bg-transparent p-0'/>
      
       <Card title="Create Project" className='w-full p-3 mb-0 mt-3'>
        <div className="w-full grid m-0">
            <div className="col-12 md:col-6 flex flex-column ">
                <label htmlFor="projectitle" className='font-semibold mb-1'>Project Title</label>
                <InputText id="projectitle" aria-describedby="projectitle" className='p-2'/>
                <small id="projectitle" className='mt-1'>
                    Enter your username to reset your password.
                </small>
            </div>
            <div className="col-12 md:col-6 flex flex-column  ">
                <label htmlFor="projecttype" className='font-semibold mb-1'>Project Type</label>
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
                    Project Description
                </label>
                <InputTextarea value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
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

export default CreateProject
