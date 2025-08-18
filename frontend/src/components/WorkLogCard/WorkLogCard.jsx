import React,{useState, useEffect} from 'react'
import { Dropdown } from 'primereact/dropdown';
import { Chart } from 'primereact/chart';
        

const WorkLogCard = () => {
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
         const data = {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [
                {
                    label: 'Sales',
                    data: [540, 325, 702, 620],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                      ],
                      borderColor: [
                        'rgb(255, 159, 64)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)'
                      ],
                      borderWidth: 1
                }
            ]
        };
        const options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);
  return (
    <div className='w-full h-full flex flex-column p-4 border-round bg-white shadow-2'>
        <div className='w-full flex justify-content-between align-items-center mb-2'>
            <h2 className='m-0'>WorkLog</h2>
            <div className='flex'><Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                placeholder="this week" className="w-full md:w-14rem" /></div>
        </div>
        <div className='w-full'>
             <Chart type="bar" data={chartData} options={chartOptions} className="w-full md:w-35rem h-20rem" />
        </div>
    </div>
  )
}

export default WorkLogCard;
