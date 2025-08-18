import React from 'react';
import { Link } from 'react-router-dom';
import { BreadCrumb } from 'primereact/breadcrumb';
import { Card } from 'primereact/card';
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
// import { Badge } from 'primereact/badge';

const Projects = () => {
    const items = [{ label: 'Projects'}];
    const home = { label: 'Home', url: '/' }
  return (
    <div className='w-full flex flex-column'>
      <BreadCrumb model={items} home={home} className='w-full border-transparent bg-transparent p-0'/>
      <h2 className='font-semibold mb-0 mt-3'>Projects</h2>
      <div className='flex flex-wrap'>
        <div className="col-12 md:col-4 pl-0 pb-0 p-3">
            <Card className='col-full flex flex-column p-3'>
                <div className='flex justify-content-between flex-wrap border-bottom-1'>
                    <h4 className='font-semibold text-lg mt-0 mb-2'>Adoddle
                        <i className="pi pi-pen-to-square ml-2"></i>
                    </h4>               
                </div>
                <p className='text-base text-color-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim  ad minim veniam, quis </p>
                <div className='flex align-item-center text-primary-blue' style={{color:'#D62222'}}>
                    <div className='w-auto mr-1'>
                        <img src="/public/assets/time.svg" alt="time" className='w-full'/>
                    </div>
                    05 April 2024
                </div>
                <div className="card flex justify-content-between px-0 pt-3 pb-0">
                    <AvatarGroup className='p-0'>
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" size="medium" shape="circle" />
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" size="medium" shape="circle" />
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" size="medium" shape="circle" />
                    
                        <Avatar label="+2" shape="circle" size="medium"/>
                    </AvatarGroup>
                    <Link to="" className='no-underline'>
                        <i className="pi pi-receipt ml-2"></i>
                        14 issues
                    </Link>
                </div>
            </Card>
        </div>
        <div className="col-12 md:col-4 pl-0 pb-0 p-3">
            <Card className='col-full flex flex-column p-3'>
                <div className='flex justify-content-between flex-wrap border-bottom-1'>
                    <h4 className='font-semibold text-lg mt-0 mb-2'>Adoddle
                        <i className="pi pi-pen-to-square ml-2"></i>
                    </h4>               
                </div>
                <p className='text-base text-color-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim  ad minim veniam, quis </p>
                <div className='flex align-item-center text-primary-blue' style={{color:'#D62222'}}>
                    <div className='w-auto mr-1'>
                        <img src="/public/assets/time.svg" alt="time" className='w-full'/>
                    </div>
                    05 April 2024
                </div>
                <div className="card flex justify-content-between px-0 pt-3 pb-0">
                    <AvatarGroup className='p-0'>
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" size="medium" shape="circle" />
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" size="medium" shape="circle" />
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" size="medium" shape="circle" />
                    
                        <Avatar label="+2" shape="circle" size="medium"/>
                    </AvatarGroup>
                    <Link to="" className='no-underline'>
                        <i className="pi pi-receipt ml-2"></i>
                        14 issues
                    </Link>
                </div>
            </Card>
        </div>
        <div className="col-12 md:col-4 pl-0 pb-0 p-3">
            <Card className='col-full flex flex-column p-3'>
                <div className='flex justify-content-between flex-wrap border-bottom-1'>
                    <h4 className='font-semibold text-lg mt-0 mb-2'>Adoddle
                        <i className="pi pi-pen-to-square ml-2"></i>
                    </h4>               
                </div>
                <p className='text-base text-color-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim  ad minim veniam, quis </p>
                <div className='flex align-item-center text-primary-blue' style={{color:'#D62222'}}>
                    <div className='w-auto mr-1'>
                        <img src="/public/assets/time.svg" alt="time" className='w-full'/>
                    </div>
                    05 April 2024
                </div>
                <div className="card flex justify-content-between px-0 pt-3 pb-0">
                    <AvatarGroup className='p-0'>
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" size="medium" shape="circle" />
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" size="medium" shape="circle" />
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" size="medium" shape="circle" />
                    
                        <Avatar label="+2" shape="circle" size="medium"/>
                    </AvatarGroup>
                    <Link to="" className='no-underline'>
                        <i className="pi pi-receipt ml-2"></i>
                        14 issues
                    </Link>
                </div>
            </Card>
        </div>
        <div className="col-12 md:col-4 pl-0 pb-0 p-3">
            <Card className='col-full flex flex-column p-3'>
                <div className='flex justify-content-between flex-wrap border-bottom-1'>
                    <h4 className='font-semibold text-lg mt-0 mb-2'>Adoddle
                        <i className="pi pi-pen-to-square ml-2"></i>
                    </h4>               
                </div>
                <p className='text-base text-color-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim  ad minim veniam, quis </p>
                <div className='flex align-item-center text-primary-blue' style={{color:'#D62222'}}>
                    <div className='w-auto mr-1'>
                        <img src="/public/assets/time.svg" alt="time" className='w-full'/>
                    </div>
                    05 April 2024
                </div>
                <div className="card flex justify-content-between px-0 pt-3 pb-0">
                    <AvatarGroup className='p-0'>
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" size="medium" shape="circle" />
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" size="medium" shape="circle" />
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" size="medium" shape="circle" />
                    
                        <Avatar label="+2" shape="circle" size="medium"/>
                    </AvatarGroup>
                    <Link to="" className='no-underline'>
                        <i className="pi pi-receipt ml-2"></i>
                        14 issues
                    </Link>
                </div>
            </Card>
        </div>
        <div className="col-12 md:col-4 pl-0 pb-0 p-3">
            <Card className='col-full flex flex-column p-3'>
                <div className='flex justify-content-between flex-wrap border-bottom-1'>
                    <h4 className='font-semibold text-lg mt-0 mb-2'>Adoddle
                        <i className="pi pi-pen-to-square ml-2"></i>
                    </h4>               
                </div>
                <p className='text-base text-color-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim  ad minim veniam, quis </p>
                <div className='flex align-item-center text-primary-blue' style={{color:'#D62222'}}>
                    <div className='w-auto mr-1'>
                        <img src="/public/assets/time.svg" alt="time" className='w-full'/>
                    </div>
                    05 April 2024
                </div>
                <div className="card flex justify-content-between px-0 pt-3 pb-0">
                    <AvatarGroup className='p-0'>
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" size="medium" shape="circle" />
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" size="medium" shape="circle" />
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" size="medium" shape="circle" />
                    
                        <Avatar label="+2" shape="circle" size="medium"/>
                    </AvatarGroup>
                    <Link to="" className='no-underline'>
                        <i className="pi pi-receipt ml-2"></i>
                        14 issues
                    </Link>
                </div>
            </Card>
        </div>
        <div className="col-12 md:col-4 pl-0 pb-0 p-3">
            <Card className='col-full flex flex-column p-3'>
                <div className='flex justify-content-between flex-wrap border-bottom-1'>
                    <h4 className='font-semibold text-lg mt-0 mb-2'>Adoddle
                        <i className="pi pi-pen-to-square ml-2"></i>
                    </h4>               
                </div>
                <p className='text-base text-color-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim  ad minim veniam, quis </p>
                <div className='flex align-item-center text-primary-blue' style={{color:'#D62222'}}>
                    <div className='w-auto mr-1'>
                        <img src="/public/assets/time.svg" alt="time" className='w-full'/>
                    </div>
                    05 April 2024
                </div>
                <div className="card flex justify-content-between px-0 pt-3 pb-0">
                    <AvatarGroup className='p-0'>
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" size="medium" shape="circle" />
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" size="medium" shape="circle" />
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" size="medium" shape="circle" />
                    
                        <Avatar label="+2" shape="circle" size="medium"/>
                    </AvatarGroup>
                    <Link to="" className='no-underline'>
                        <i className="pi pi-receipt ml-2"></i>
                        14 issues
                    </Link>
                </div>
            </Card>
        </div>
        <div className="col-12 md:col-4 pl-0 pb-0 p-3">
            <Card className='col-full flex flex-column p-3'>
                <div className='flex justify-content-between flex-wrap border-bottom-1'>
                    <h4 className='font-semibold text-lg mt-0 mb-2'>Adoddle
                        <i className="pi pi-pen-to-square ml-2"></i>
                    </h4>               
                </div>
                <p className='text-base text-color-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim  ad minim veniam, quis </p>
                <div className='flex align-item-center text-primary-blue' style={{color:'#D62222'}}>
                    <div className='w-auto mr-1'>
                        <img src="/public/assets/time.svg" alt="time" className='w-full'/>
                    </div>
                    05 April 2024
                </div>
                <div className="card flex justify-content-between px-0 pt-3 pb-0">
                    <AvatarGroup className='p-0'>
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" size="medium" shape="circle" />
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" size="medium" shape="circle" />
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" size="medium" shape="circle" />
                    
                        <Avatar label="+2" shape="circle" size="medium"/>
                    </AvatarGroup>
                    <Link to="" className='no-underline'>
                        <i className="pi pi-receipt ml-2"></i>
                        14 issues
                    </Link>
                </div>
            </Card>
        </div>
        <div className="col-12 md:col-4 pl-0 pb-0 p-3">
            <Card className='col-full flex flex-column p-3'>
                <div className='flex justify-content-between flex-wrap border-bottom-1'>
                    <h4 className='font-semibold text-lg mt-0 mb-2'>Adoddle
                        <i className="pi pi-pen-to-square ml-2"></i>
                    </h4>               
                </div>
                <p className='text-base text-color-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim  ad minim veniam, quis </p>
                <div className='flex align-item-center text-primary-blue' style={{color:'#D62222'}}>
                    <div className='w-auto mr-1'>
                        <img src="/public/assets/time.svg" alt="time" className='w-full'/>
                    </div>
                    05 April 2024
                </div>
                <div className="card flex justify-content-between px-0 pt-3 pb-0">
                    <AvatarGroup className='p-0'>
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" size="medium" shape="circle" />
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" size="medium" shape="circle" />
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" size="medium" shape="circle" />
                    
                        <Avatar label="+2" shape="circle" size="medium"/>
                    </AvatarGroup>
                    <Link to="" className='no-underline'>
                        <i className="pi pi-receipt ml-2"></i>
                        14 issues
                    </Link>
                </div>
            </Card>
        </div>
      </div>
    </div>
  )
}

export default Projects
