import React from 'react'
import { useNavigate } from 'react-router-dom';
import { SplitButton } from 'primereact/splitbutton';
import "./app_content.css"
import ProjectCard from '../ProjectCard/ProjectCard';
import TaskCard from '../TaskCard/TaskCard';
import WorkLogCard from '../WorkLogCard/WorkLogCard';
import PerformanceCard from '../PerformanceCard/PerformanceCard';

const AppContent = () => {
    const navigate = useNavigate();
    // const items = [
    //     {
    //         label: 'Update',
    //         icon: 'pi pi-refresh',
    //         command: () => {
    //             toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
    //         }
    //     },
    //     {
    //         label: 'Delete',
    //         icon: 'pi pi-times',
    //         command: () => {
    //             toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
    //         }
    //     },
    //     {
    //         label: 'React Website',
    //         icon: 'pi pi-external-link',
    //         command: () => {
    //             window.location.href = 'https://reactjs.org/';
    //         }
    //     },
    //     {
    //         label: 'Upload',
    //         icon: 'pi pi-upload',
    //         command: () => {
    //             //router.push('/fileupload');
    //         }
    //     }
    // ];
    
    const dashboard_cards_list = [
        {
            id:1,
            title: "Projects", 
            component_type:"project_card",           
        },
        {
            id:2,
            title: "tasks", 
            component_type:"task_card",           
        },
        {
            id:3,
            title: "work log", 
            component_type:"worklog_card",           
        },
        {
            id:4,
            title: "performance", 
            component_type:"performance_card",           
        }
    ]

     const create = () => {
       navigate('/create-projects');
    };
  return (
    <div className='w-full flex flex-column'>
        <div className='w-full flex px-4 py-2 mb-4'>
             <h2 className='font-semibold mb-0 mt-3'>Dashoboard</h2>
            <SplitButton label="Create" icon="pi pi-plus" onClick={create} className='ml-auto'/>
        </div>
        <div className='grid m-0'>
            {
                dashboard_cards_list.map((card) => {
                    if(card.component_type === "project_card") {
                        return  <div className="col-6"><ProjectCard key={card.id} /></div>
                    } else if(card.component_type === "task_card") {
                        return <div className="col-6"><TaskCard key={card.id} /></div>
                    } else if(card.component_type === "worklog_card") {
                        return <div className="col-6"><WorkLogCard key={card.id} /></div>
                    } else if(card.component_type === "performance_card") {
                        return <div className="col-6"><PerformanceCard key={card.id} /></div>
                    }
                })
            }
            {/* <ProjectCard />
            <TaskCard />
            <WorkLogCard />
            <PerformanceCard /> */}
        </div>
    </div>
  )
}

export default AppContent
