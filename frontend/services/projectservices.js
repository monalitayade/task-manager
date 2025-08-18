import API from '../utils/api.js';

export const createProject = async(projectData) => {
    try{
        const response = await API.post('projects/create-project', projectData);
        return response?.data;
    }
    catch(error)
    {
        console.error("Error creating project:", error);
        throw error;
    }
}