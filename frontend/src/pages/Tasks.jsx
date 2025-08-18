import React from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';               
import { Badge } from 'primereact/badge';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

const Tasks = () => {
     const items = [{ label: 'Tasks'}];
    const home = { label: 'Home', url: '/' }
  return (
   <div className='w-full flex flex-column'>
        <BreadCrumb model={items} home={home} className='w-full border-transparent bg-transparent p-0'/>
        <div className='w-full flex align-items-center my-3'>
            <h2 className='font-semibold m-0 mr-2'>Addodle</h2>
            <div className='flex justify-content-center align-items-center mx-4'>
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" className="mr-2" size="medium" shape="circle" />
                <i className="pi pi-arrow-right ml-2"></i>
                 <AvatarGroup>
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" size="medium" shape="circle" />
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/xuxuefeng.png" size="medium" shape="circle" />
                <Avatar label="+2" shape="circle" size="medium"/>
            </AvatarGroup>
            </div>
            <div className='flex justify-content-center align-items-center'>
                <Badge value="Ontrack" severity="success"></Badge>
            </div>
            <div className="card flex justify-content-center ml-auto p-0">
                <Button label="Assign Task" />
            </div>
        </div>
        <div className='w-full flex flex-column'>
            <div className='card bg-white w-full flex flex-column p-0 mb-4'>
                <div className='w-full flex align-items-center justify-content-between flex-wrap p-3 shadow-2'>
                    <div className='w-auto mr-4'>
                        <img src="/public/assets/Idea.svg" alt="idea"  className='w-full'/>
                    </div>
                    <div className='flex flex-column'>
                        <h4 className='w-full m-0'>Make an Automatic Payment System that enable the design</h4>
                        <p className='m-0 font-light'><span>#402235</span>  Opened 10 days ago by Yash Ghori</p>
                    </div>
                    <div className='flex flex-column mx-4'><Badge value="Inprogress" severity="info"></Badge></div>
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" className="mr-2" size="large" shape="circle" />
                </div>
            </div>
            <div className='card bg-white w-full flex flex-column p-0 mb-4'>
                <div className='w-full flex align-items-center justify-content-between flex-wrap p-3 shadow-2'>
                    <div className='w-auto mr-4'>
                        <img src="/public/assets/Idea.svg" alt="idea"  className='w-full'/>
                    </div>
                    <div className='flex flex-column'>
                        <h4 className='w-full m-0'>Make an Automatic Payment System that enable the design</h4>
                        <p className='m-0 font-light'><span>#402235</span>  Opened 10 days ago by Yash Ghori</p>
                    </div>
                    <div className='flex flex-column mx-4'><Badge value="Inprogress" severity="info"></Badge></div>
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" className="mr-2" size="large" shape="circle" />
                </div>
            </div>
            <div className='card bg-white w-full flex flex-column p-0 mb-4'>
                <div className='w-full flex align-items-center justify-content-between flex-wrap p-3 shadow-2'>
                    <div className='w-auto mr-4'>
                        <img src="/public/assets/Idea.svg" alt="idea"  className='w-full'/>
                    </div>
                    <div className='flex flex-column'>
                        <h4 className='w-full m-0'>Make an Automatic Payment System that enable the design</h4>
                        <p className='m-0 font-light'><span>#402235</span>  Opened 10 days ago by Yash Ghori</p>
                    </div>
                    <div className='flex flex-column mx-4'><Badge value="Inprogress" severity="info"></Badge></div>
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" className="mr-2" size="large" shape="circle" />
                </div>
            </div>
            <div className='card bg-white w-full flex flex-column p-0 mb-4'>
                <div className='w-full flex align-items-center justify-content-between flex-wrap p-3 shadow-2'>
                    <div className='w-auto mr-4'>
                        <img src="/public/assets/Idea.svg" alt="idea"  className='w-full'/>
                    </div>
                    <div className='flex flex-column'>
                        <h4 className='w-full m-0'>Make an Automatic Payment System that enable the design</h4>
                        <p className='m-0 font-light'><span>#402235</span>  Opened 10 days ago by Yash Ghori</p>
                    </div>
                    <div className='flex flex-column mx-4'><Badge value="Inprogress" severity="info"></Badge></div>
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" className="mr-2" size="large" shape="circle" />
                </div>
            </div>
            <div className='card bg-white w-full flex flex-column p-0 mb-4'>
                <div className='w-full flex align-items-center justify-content-between flex-wrap p-3 shadow-2'>
                    <div className='w-auto mr-4'>
                        <img src="/public/assets/Idea.svg" alt="idea"  className='w-full'/>
                    </div>
                    <div className='flex flex-column'>
                        <h4 className='w-full m-0'>Make an Automatic Payment System that enable the design</h4>
                        <p className='m-0 font-light'><span>#402235</span>  Opened 10 days ago by Yash Ghori</p>
                    </div>
                    <div className='flex flex-column mx-4'><Badge value="Inprogress" severity="info"></Badge></div>
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" className="mr-2" size="large" shape="circle" />
                </div>
            </div>
            <div className='card bg-white w-full flex flex-column p-0 mb-4'>
                <div className='w-full flex align-items-center justify-content-between flex-wrap p-3 shadow-2'>
                    <div className='w-auto mr-4'>
                        <img src="/public/assets/Idea.svg" alt="idea"  className='w-full'/>
                    </div>
                    <div className='flex flex-column'>
                        <h4 className='w-full m-0'>Make an Automatic Payment System that enable the design</h4>
                        <p className='m-0 font-light'><span>#402235</span>  Opened 10 days ago by Yash Ghori</p>
                    </div>
                    <div className='flex flex-column mx-4'><Badge value="Inprogress" severity="info"></Badge></div>
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" className="mr-2" size="large" shape="circle" />
                </div>
            </div>
            <div className='card bg-white w-full flex flex-column p-0 mb-4'>
                <div className='w-full flex align-items-center justify-content-between flex-wrap p-3 shadow-2'>
                    <div className='w-auto mr-4'>
                        <img src="/public/assets/Idea.svg" alt="idea"  className='w-full'/>
                    </div>
                    <div className='flex flex-column'>
                        <h4 className='w-full m-0'>Make an Automatic Payment System that enable the design</h4>
                        <p className='m-0 font-light'><span>#402235</span>  Opened 10 days ago by Yash Ghori</p>
                    </div>
                    <div className='flex flex-column mx-4'><Badge value="Inprogress" severity="info"></Badge></div>
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" className="mr-2" size="large" shape="circle" />
                </div>
            </div>
            <div className='card bg-white w-full flex flex-column p-0 mb-4'>
                <div className='w-full flex align-items-center justify-content-between flex-wrap p-3 shadow-2'>
                    <div className='w-auto mr-4'>
                        <img src="/public/assets/Idea.svg" alt="idea"  className='w-full'/>
                    </div>
                    <div className='flex flex-column'>
                        <h4 className='w-full m-0'>Make an Automatic Payment System that enable the design</h4>
                        <p className='m-0 font-light'><span>#402235</span>  Opened 10 days ago by Yash Ghori</p>
                    </div>
                    <div className='flex flex-column mx-4'><Badge value="Inprogress" severity="info"></Badge></div>
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" className="mr-2" size="large" shape="circle" />
                </div>
            </div>
            <div className='card bg-white w-full flex flex-column p-0 mb-4'>
                <div className='w-full flex align-items-center justify-content-between flex-wrap p-3 shadow-2'>
                    <div className='w-auto mr-4'>
                        <img src="/public/assets/Idea.svg" alt="idea"  className='w-full'/>
                    </div>
                    <div className='flex flex-column'>
                        <h4 className='w-full m-0'>Make an Automatic Payment System that enable the design</h4>
                        <p className='m-0 font-light'><span>#402235</span>  Opened 10 days ago by Yash Ghori</p>
                    </div>
                    <div className='flex flex-column mx-4'><Badge value="Inprogress" severity="info"></Badge></div>
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" className="mr-2" size="large" shape="circle" />
                </div>
            </div>
            <div className='card bg-white w-full flex flex-column p-0 mb-4'>
                <div className='w-full flex align-items-center justify-content-between flex-wrap p-3 shadow-2'>
                    <div className='w-auto mr-4'>
                        <img src="/public/assets/Idea.svg" alt="idea"  className='w-full'/>
                    </div>
                    <div className='flex flex-column'>
                        <h4 className='w-full m-0'>Make an Automatic Payment System that enable the design</h4>
                        <p className='m-0 font-light'><span>#402235</span>  Opened 10 days ago by Yash Ghori</p>
                    </div>
                    <div className='flex flex-column mx-4'><Badge value="Inprogress" severity="info"></Badge></div>
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" className="mr-2" size="large" shape="circle" />
                </div>
            </div>
            <div className='card bg-white w-full flex flex-column p-0 mb-4'>
                <div className='w-full flex align-items-center justify-content-between flex-wrap p-3 shadow-2'>
                    <div className='w-auto mr-4'>
                        <img src="/public/assets/Idea.svg" alt="idea"  className='w-full'/>
                    </div>
                    <div className='flex flex-column'>
                        <h4 className='w-full m-0'>Make an Automatic Payment System that enable the design</h4>
                        <p className='m-0 font-light'><span>#402235</span>  Opened 10 days ago by Yash Ghori</p>
                    </div>
                    <div className='flex flex-column mx-4'><Badge value="Inprogress" severity="info"></Badge></div>
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" className="mr-2" size="large" shape="circle" />
                </div>
            </div>
            <div className='card bg-white w-full flex flex-column p-0 mb-4'>
                <div className='w-full flex align-items-center justify-content-between flex-wrap p-3 shadow-2'>
                    <div className='w-auto mr-4'>
                        <img src="/public/assets/Idea.svg" alt="idea"  className='w-full'/>
                    </div>
                    <div className='flex flex-column'>
                        <h4 className='w-full m-0'>Make an Automatic Payment System that enable the design</h4>
                        <p className='m-0 font-light'><span>#402235</span>  Opened 10 days ago by Yash Ghori</p>
                    </div>
                    <div className='flex flex-column mx-4'><Badge value="Inprogress" severity="info"></Badge></div>
                    <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/asiyajavayant.png" className="mr-2" size="large" shape="circle" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tasks
