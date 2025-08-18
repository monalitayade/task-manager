import React,{ useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import CreateProject from './pages/CreateProject';
import CreateTask from './pages/CreateTask.jsx';
import AddUser from './pages/AddUser.jsx';
import AdminProfile from './pages/AdminProfile.jsx';
import Projects from './pages/Projects.jsx';
import Tasks from './pages/Tasks.jsx';
import TaskBoard from './pages/TaskBoard.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

function App() {

  return (
    <> 

      <Router>        
        <Layout>          
          <Routes>
             <Route path="/sign-up" element={<Register />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/create-projects" element={<ProtectedRoute><CreateProject/></ProtectedRoute>} />
            <Route path="/create-task" element={<ProtectedRoute><CreateTask /></ProtectedRoute>} />
            <Route path="/add-user" element={<ProtectedRoute><AddUser /></ProtectedRoute>} />
            <Route path="/admin-profile" element={<ProtectedRoute><AdminProfile /></ProtectedRoute> } />
            <Route path="/projects" element={<ProtectedRoute><Projects /></ProtectedRoute>} />
            <Route path="/tasks" element={<ProtectedRoute><Tasks /> </ProtectedRoute>} />
            <Route path="/task-board" element={<ProtectedRoute><TaskBoard /></ProtectedRoute>} />           
          </Routes>
        </Layout>
      </Router>
   
    
   </>
  )
}

export default App
