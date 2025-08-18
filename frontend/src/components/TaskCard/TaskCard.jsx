import React,{useState, useEffect} from 'react'
import { Dropdown } from 'primereact/dropdown';
import { Chart } from 'primereact/chart';
        

const TaskCard = () => {
     const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
           
            labels: ['completed', 'OnHold', 'OnProgress','Pending'],
            datasets: [
                {
                    data: [25, 25, 18,32],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--blue-500'), 
                        documentStyle.getPropertyValue('--yellow-500'), 
                        documentStyle.getPropertyValue('--green-500'),
                         documentStyle.getPropertyValue('--orange-500'),
                    ],

                }
            ]
        };
        const options = {
            cutout: '60%'
        };

        setChartData(data);
        setChartOptions(options);
    }, []);
  return (
    <div className='w-full h-full flex flex-column p-4 border-round bg-white shadow-2'>
        <div className='w-full flex justify-content-between align-items-center mb-2'>
            <h2 className='m-0'>Tasks</h2>
            <div className='flex'><Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="this week" className="w-full md:w-14rem" /></div>
        </div>
        <div className='w-full'>
            <Chart type="pie" data={chartData} options={chartOptions} className="w-full md:w-20rem" />
        </div>
    </div>
  )
}

export default TaskCard
