import React, {createContext, useEffect, useState} from "react";
import { createProjectAPICall } from "../services/projectservices";
export const ProjectContext = createContext();

export const ProjectProvider = ({children}) => {
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const createProjectfunction = async (projectData) => {
        setLoading(true);
        setError(null);
        try{
            const response = await createProjectAPICall(projectData);
            setProject(response);
            setLoading(false);
        } catch (err){
            setError(err);
            setLoading(false);
            console.error("Error creating project:", err);
        }
    }
    // useEffect(() => {
    //     createProject();
    // },[])

    return (
        <ProjectContext.Provider value={{project,loading,error, createProjectfunction}}>
            {children}
        </ProjectContext.Provider>
    )
}