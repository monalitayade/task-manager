import React,{useState} from 'react'
import { InputText } from "primereact/inputtext";
import { MultiSelect } from 'primereact/multiselect';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button'; 
import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';
import { Link } from 'react-router-dom';

const Register = () => {
    const [value, setValue] = useState('');
    // const header = <div className="font-bold mb-3">Pick a password</div>;
    // const footer = (
    //     <>
    //         <Divider />
    //         <p className="mt-2">Suggestions</p>
    //         <ul className="pl-2 ml-2 mt-0 line-height-3">
    //             <li>At least one lowercase</li>
    //             <li>At least one uppercase</li>
    //             <li>At least one numeric</li>
    //             <li>Minimum 8 characters</li>
    //         </ul>
    //     </>
    // );
    const [selectedRoles, setSelectedRoles] = useState(null);
    const roles = [
        { name: 'Project Manager', code: 'PM' },
        { name: 'Developer', code: 'Developer' },
        { name: 'QA', code: 'QA' }
    ];
  return (
    <div className='w-full h-auto flex justify-content-center align-items-center overflow-auto flex-column py-6'>
        <div className='w-5 flex flex-column register'>
        <Card title="Register" className='w-full flex justify-content-center align-items-center p-3'>
            <div className="flex flex-column gap-2 mb-4">
                <label htmlFor="username">Name</label>
                <InputText id="username" aria-describedby="username-help" />
                
            </div>
            <div className="flex flex-column gap-2 mb-4">
                <label htmlFor="username">Username</label>
                <InputText id="username" aria-describedby="username-help" />
               
            </div>
            <div className="flex flex-column gap-2 mb-4">
                <label htmlFor="username">Email</label>
                <InputText id="username" aria-describedby="username-help" />
                
            </div>
            <div className="flex flex-column gap-2 mb-4">
                <label htmlFor="password">Password</label>
                <Password id="password" value={value} onChange={(e) => setValue(e.target.value)} className='w-full flex' toggleMask/>
            </div>
            <div className="w-full flex flex-column mb-4">
                <label htmlFor="buttondisplay" className="font-semibold mb-1">
                    Role
                </label>
                <MultiSelect value={selectedRoles} onChange={(e) => setSelectedRoles(e.value)} options={roles}       optionLabel="name" 
                placeholder="Select Role" className="w-full" />
            </div>
            <div className="flex flex-column gap-2 mb-4">
                <Button label="Register" />
            </div>
        </Card>
        <p className='w-full flex justify-content-center align-items-center text-center'>Already have an account? <Link to="/sign-in" className='ml-2'>Sign In</Link></p>
        </div>
    </div>
  )
}
export default Register
