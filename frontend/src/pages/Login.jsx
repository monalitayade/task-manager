import React,{useContext, useState} from 'react'
import { InputText } from "primereact/inputtext";
import { MultiSelect } from 'primereact/multiselect';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button'; 
import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/authservices';
import { AuthContext } from '../../context/AuthContext';


const Login = () => {
    const [formData, setformData] = useState({
        username:'',
        password:'',
    });
    const navigate = useNavigate();
    const {login} = useContext(AuthContext);
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
       setformData({ ...formData, [name]: value });
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{

            const data = await loginUser(formData);
            alert("Logged In successfully!");
            if (data?.token) {
                login(data); // 👈 update context immediately
                navigate("/"); // redirect to projects
            }
            console.log("45",data);
            // login(data?.token);
            // navigate("/"); 
        }
        catch(err){
            console.error("Login error:", err);
            alert("Login failed. Please try again.");
        }
    }
  return (
    <div className='w-full h-screen flex justify-content-center align-items-center flex-column p-0 md:p-0'>
        <div className='w-5 flex flex-column register'>
        <form className='w-full flex flex-column gap-3' onSubmit={handleSubmit}>
            <Card title="Login" className='w-full flex justify-content-center align-items-center p-3'>
                
                <div className="flex flex-column gap-2 mb-4">
                    <label htmlFor="username">Username</label>
                    <InputText id="username" aria-describedby="username-help" name="username" value={formData?.username} onChange={handleChange}/>
                   
                </div>
                <div className="flex flex-column gap-2 mb-4">
                    <label htmlFor="password">Password</label>
                    <Password id="password" value={formData?.password} name="password" className='w-full flex' onChange={handleChange}/>
                </div>
                <div className="flex flex-column gap-2 mb-4">
                    <Button label="Login" />
                </div>
            </Card>
        </form>
        <p className='w-full flex justify-content-center align-items-center text-center'>Don't have an account? <Link to="/sign-up" className='ml-2'>Sign Up</Link></p>
        </div>
    </div>
  )
}
export default Login
