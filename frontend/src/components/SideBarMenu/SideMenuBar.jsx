import React from 'react'; 
import { PanelMenu } from 'primereact/panelmenu';
import { Link } from 'react-router-dom';
import './sidebar_menu.css';


const SideMenuBar = ({toggleSidebar}) => {
    const items = [     
        {
            label: 'Dashboard',
            icon: 'pi pi-file',
            url:'/',
          template: (item, options) => (
          <Link to="/" className={options.className}>
            <span className={options.icon}></span>
            <span className="ml-2">{item.label}</span>
          </Link>
      ),
        },
        {
            label: 'Projects',
            icon: 'pi pi-cloud',
            url: '/projects',
            // command: () => navigate("/projects"),
            template: (item, options) => (
            <Link to='/projects' className={options?.className}>
              <span className={options?.icon}></span>
              <span className="ml-2">{item?.label}</span>
           </Link>
            )
            
        },
        {
            label: 'Task',
            icon: 'pi pi-desktop',
            url: '/tasks',
            template: (item, options) => (
            <Link to="/" className={options.className}>
              <span className={options.icon}></span>
              <span className="ml-2">{item.label}</span>
            </Link>
            )
        },
         {
            label: 'Calender',
            icon: 'pi pi-desktop',
            url: '/',
            template: (item, options) => (
            <Link to="/" className={options.className}>
              <span className={options.icon}></span>
              <span className="ml-2">{item.label}</span>
            </Link>
            )
        }
    ];
  return (
    <div className="w-full md:w-full flex-shrink-0 surface-100 border-gray-300 h-full p-3 relative">
       <Link href="/" className="absolute top-3 right-0 text-bluegray-800 no-underline  text-base font-bold p-3 md:hidden flex align-items-center gap-2" onClick={toggleSidebar}>
        <i className="pi pi-times"></i>
       
      </Link>
      <Link href="/" className=" text-base font-bold p-3 flex align-items-center gap-2 no-underline text-bluegray-800">
        <i className="pi pi-code"></i>
        Task Reminder
      </Link>
      <PanelMenu model={items} className="w-full text-500" />
    </div>
  )
}

export default SideMenuBar
