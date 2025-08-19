import React,{useState, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import { InputText } from "primereact/inputtext";
import { MultiSelect } from 'primereact/multiselect';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button'; 
import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Register = () => {
    const Navigate = useNavigate();
    const { RegisterUser } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        role: null
    })
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
    const handleChange = (e) => {
       const { name, value } = e.target;
       setFormData({ ...formData, [name]: value });
    }
    const roles = [
        { name: 'Project Manager', code: 'PM' },
        { name: 'Developer', code: 'Dev' },
        { name: 'QA', code: 'QA' }
    ];

    const SubmitRegister = async(e) => {
        e.preventDefault();
        console.log("form data", formData)
        const UserData = {
            name: formData?.name,
            username:formData?.username,
            email:formData?.email,
            password:formData?.password,
            role:formData?.role[0]?.code
        }
        try {
            await RegisterUser(UserData);
            alert("Registered successfully!");
            Navigate("/sign-in");
            setFormData({
                name: '',
                username: '',
                email: '',
                password: '',
                role: null
            });
        } catch (error) {
            console.error("Error registering user:", error);
            alert("Failed to register. Please try again.");
        }
    }
  return (
    <div className='w-full h-auto flex justify-content-center align-items-center overflow-auto flex-column py-6'>
        <div className='w-5 flex flex-column register'>
        <Card title="Register" className='w-full flex justify-content-center align-items-center p-3'>
            <form className="w-full flex flex-column gap-4" onSubmit={SubmitRegister}>
                <div className="flex flex-column gap-2 mb-4">
                    <label htmlFor="username">Name</label>
                    <InputText id="username" aria-describedby="username-help" name="name" value={formData?.name} onChange={handleChange}/>
                    
                </div>
                <div className="flex flex-column gap-2 mb-4">
                    <label htmlFor="username">Username</label>
                    <InputText id="username" aria-describedby="username-help" name="username" value={formData?.username}  onChange={handleChange}/>
                
                </div>
                <div className="flex flex-column gap-2 mb-4">
                    <label htmlFor="username">Email</label>
                    <InputText id="username" aria-describedby="username-help" name="email" value={formData?.email}  onChange={handleChange}/>
                    
                </div>
                <div className="flex flex-column gap-2 mb-4">
                    <label htmlFor="password">Password</label>
                    <Password id="password" name="password" value={formData?.password} className='w-full flex' toggleMask  onChange={handleChange}/>
                </div>
                <div className="w-full flex flex-column mb-4">
                    <label htmlFor="buttondisplay" className="font-semibold mb-1">
                        Role
                    </label>
                    <MultiSelect name="role" value={formData?.role}options={roles} optionLabel="name" placeholder="Select Role"  onChange={handleChange} className="w-full" />
                </div>
                <div className="flex flex-column gap-2 mb-4">
                    <Button label="Register" />
                </div>
            </form>
        </Card>
        <p className='w-full flex justify-content-center align-items-center text-center'>Already have an account? <Link to="/sign-in" className='ml-2'>Sign In</Link></p>
        </div>
    </div>
  )
}
export default Register
