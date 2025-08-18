import React,{useState} from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';
import { MultiSelect } from 'primereact/multiselect';
import KanbanBoard from '../components/KanbanBoard/KanbanBoard';
import { Card } from 'primereact/card';
        

const TaskBoard = () => {
    const items = [{ label: 'Task Board'}];
    const home = { label: 'Home', url: '/' }

    const [selectedCities, setSelectedCities] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
  return (
    <div className='w-full flex flex-column'>
          <BreadCrumb model={items} home={home} className='w-full border-transparent bg-transparent p-0'/>
          <Card className='p-3 my-3 h-full'>
            <div className='w-full flex align-items-center pr-0'>
              <h2 className='font-semibold '>Task Board </h2>
              <div className='flex ml-auto '>
                  <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" 
                  placeholder="Select Project" maxSelectedLabels={1} className="w-full md:w-20rem p-0" />
              </div>
            </div>
            <KanbanBoard />
          </Card>
    </div>
  )
}

export default TaskBoard
