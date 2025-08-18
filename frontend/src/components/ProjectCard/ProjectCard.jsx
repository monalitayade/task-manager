import React from 'react'
import { Image } from 'primereact/image';

const ProjectCard = () => {
  return (
    <div className='w-full h-full bg-white flex flex-column p-4 border-round shadow-2'>
        <div className='w-full flex justify-content-between align-items-center mb-2'>
            <h2 className='m-0'>Project Title</h2>
            <div className='flex'>file count(0)</div>
        </div>
        <div className='w-full'>
            <Image src="/assets/project-img1.png" alt="Image" width="250" />
        </div>
    </div>
  )
}

export default ProjectCard
