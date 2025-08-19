import React,{ useState,useContext} from 'react'
import { BreadCrumb } from 'primereact/breadcrumb';
import { Card } from 'primereact/card';
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Calendar } from 'primereact/calendar';      
import { Button } from 'primereact/button'; 
import { ProjectContext } from '../../context/projectContext';

const CreateProject = () => {
    const {createProjectFunction} = useContext(ProjectContext);
    const [formData,setformData]=useState({
        projectitle: '',
        projecttype: '',
        startDate: null,
        endDate: null,
        description: ''
    })

    const items = [{ label: 'Create Project'}];
    const home = { label: 'Home', url: '/' }

    const [value, setValue] = useState('');
    const [date, setDate] = useState(null);

    const handleChange = (e) => {
       const { name, value } = e.target;
       setformData({ ...formData, [name]: value });
    }

    const handlesubmit = async(e) => {
        e.preventDafault();
        try {
            await createProjectFunction(formData);
            alert("Project created successfully!");
            setformData({
                projectitle: '',
                projecttype: '',
                startDate: null,
                endDate: null,
                description: ''
            });
        } catch (error){
            console.error("Error creating project:", error);
            alert("Failed to create project. Please try again.");
        }
    }
  return (
    <div className='w-full flex flex-column '>
      <BreadCrumb model={items} home={home} className='w-full border-transparent bg-transparent p-0'/>
      
       <Card title="Create Project" className='w-full p-3 mb-0 mt-3'>
        <form className="w-full grid m-0" onSubmit={handlesubmit}>
            <div className="col-12 md:col-6 flex flex-column ">
                <label htmlFor="projectitle" className='font-semibold mb-1'>Project Title</label>
                <InputText id="projectitle" aria-describedby="projectitle" className='p-2' name="projectitle" value={formData?.projectitle}/>
                {/* <small id="projectitle" className='mt-1'>
                    Enter your username to reset your password.
                </small> */}
            </div>
            <div className="col-12 md:col-6 flex flex-column  ">
                <label htmlFor="projecttype" className='font-semibold mb-1'>Project Type</label>
                <InputText id="projecttype" aria-describedby="projecttype" className='p-2' name="projecttype" value={formData?.projecttype}/>
                {/* <small id="projecttype" className='mt-1'>
                    Enter your username to reset your password.
                </small> */}
            </div>
            <div className="col-12 md:col-6 flex flex-column  ">
                <label htmlFor="buttondisplay" className="font-semibold mb-1">
                    Start Date
                </label>
                <Calendar id="buttondisplay" onChange={(e) => setDate(e.value)} showIcon  name="startDate" value={formData?.startDate}/>
            </div>
            <div className="col-12 md:col-6 flex flex-column  ">
                <label htmlFor="buttondisplay" className="font-semibold mb-1">
                    End Date
                </label>
                <Calendar id="buttondisplay" name="endDate" value={formData?.endDate} showIcon/>
            </div>
            <div className="col-12 flex flex-column">
                <label htmlFor="buttondisplay" className="font-semibold mb-1">
                    Project Description
                </label>
                <InputTextarea name="description" value={formData?.description} rows={5} cols={30} />
            </div>
            <div className="col-12 flex justify-content-end flex-wrap gap-4">
                <Button label="Create" />
                {/* <Button label="Delete" outlined /> */}
            </div>
        </form>
            
       </Card>
     
    </div>
  )
}

export default CreateProject
