import React, {useState} from 'react';
import { Button } from 'primereact/button'; 
import { BreadCrumb } from 'primereact/breadcrumb';
import { Card } from 'primereact/card';
import { Avatar } from 'primereact/avatar';
import 'primeicons/primeicons.css';


const AdminProfile = () => {
    const items = [{ label: 'Profile'}];
    const home = { label: 'Home', url: '/' }

    
  return (
    <>
        <div className="grid  m-0">
            <div className="col-12 md:col-6 flex justify-content-center">
                <Card className='w-full flex justify-content-center p-3'>
                    <div className='w-full flex justify-content-center'>
                        <Avatar label="P" image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" className="" size="xlarge" shape="circle" />   
                    </div>                
                    <p className='w-full text-center mt-0'>Yash Ghori</p>
                    <p className='w-full text-center'>                           
                            Ahmedabad, Gujarat, India
                    </p>
                    <div className='w-full border-top-1 py-2'>
                        <div className='w-full pb-2'>
                            <i className="pi pi-user mr-3"></i>
                            UI - Intern
                        </div>     
                        <div className='w-full pb-2'>
                            <i className="pi pi-phone mr-3"></i>
                           +91 7048144030
                        </div>
                         <div className='w-full pb-2'>
                            <i className="pi pi-envelope mr-3"></i>
                           abc@gmail.com
                        </div>
                    </div>
                </Card>
            </div>
            <div className="col-12 md:col-6">
                <Card className='w-full flex flex-column p-3'>
                    <BreadCrumb model={items} home={home} className='w-full border-transparent'/>
                    <h2 className='font-semibold mb-0'>UI Devloper</h2>
                    <div className='w-full flex flex-column '>
                        <div className='w-full flex justify-content-between'>
                            <p className='font-semibold'>Worked With</p>
                            <Button label="View All" className='p-0' link/>
                        </div>
                        <div className='w-full grid grid-gutter'>
                            <div class="col-6 md:col-3 px-4">
                                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" size="xlarge" shape="circle" className='w-full h-auto'/>
                                <p className='w-full text-center'>Addodle</p>
                            </div>
                            <div class="col-6 md:col-3 px-4">
                                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" size="xlarge" shape="circle" className='w-full h-auto'/>
                                <p className='w-full text-center'>Addodle</p>
                            </div>
                            <div class="col-6 md:col-3 px-4">
                                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" size="xlarge" shape="circle" className='w-full h-auto'/>
                                <p className='w-full text-center'>Addodle</p>
                            </div>
                            <div class="col-6 md:col-3 px-4">
                                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" size="xlarge" shape="circle" className='w-full h-auto'/>
                                <p className='w-full text-center'>Addodle</p>
                            </div>
                            <div class="col-6 md:col-3 px-4">
                                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" size="xlarge" shape="circle" className='w-full h-auto'/>
                                <p className='w-full text-center'>Addodle</p>
                            </div>
                            <div class="col-6 md:col-3 px-4">
                                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" size="xlarge" shape="circle" className='w-full h-auto'/>
                                <p className='w-full text-center'>Addodle</p>
                            </div>
                            <div class="col-6 md:col-3 px-4">
                                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" size="xlarge" shape="circle" className='w-full h-auto'/>
                                <p className='w-full text-center'>Addodle</p>
                            </div>
                            <div class="col-6 md:col-3 px-4">
                                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" size="xlarge" shape="circle" className='w-full h-auto'/>
                                <p className='w-full text-center'>Addodle</p>
                            </div>
                             
                        </div>
                    </div>
                </Card>
            </div>
            <div className="col-12 md:col-12">
                  <Card className='w-full flex flex-column p-3'>                    
                   
                    <div className='w-full flex flex-column '>
                        <div className='w-full flex justify-content-between'>
                            <p className='font-semibold'>Projects</p>
                            <Button label="View All" className='p-0' link/>
                        </div>
                        <div className='w-full grid grid-gutter'>
                            <div class="col-6 md:col-2 px-2">
                                <Avatar image="https://primefaces.org/cdn/primereact/images/organization/walter.jpg" size="xlarge" shape="circle" className='w-full h-auto'/>
                                <p className='w-full text-center'>Addodle</p>
                            </div>
                            <div class="col-6 md:col-2 px-2">
                                <Avatar image="https://primefaces.org/cdn/primereact/images/organization/walter.jpg" size="xlarge" shape="circle" className='w-full h-auto'/>
                                <p className='w-full text-center'>Addodle</p>
                            </div>
                            <div class="col-6 md:col-2 px-2">
                                <Avatar image="https://primefaces.org/cdn/primereact/images/organization/walter.jpg" size="xlarge" shape="circle" className='w-full h-auto'/>
                                <p className='w-full text-center'>Addodle</p>
                            </div>
                            <div class="col-6 md:col-2 px-2">
                                <Avatar image="https://primefaces.org/cdn/primereact/images/organization/walter.jpg" size="xlarge" shape="circle" className='w-full h-auto'/>
                                <p className='w-full text-center'>Addodle</p>
                            </div>                          
                             
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    </>
  )
}

export default AdminProfile
