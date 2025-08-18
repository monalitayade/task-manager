import Project from "../models/Project.js";

export const createProject = async(req, res) => {
    try{
        const { title, project_type, startDate, endDate, description } = req.body;
        if (!title || !project_type || !startDate || !endDate || !description) {
            return res.status(400).json({ message: "All fields are mandatory" });
        }
        const project = new Project({ title, project_type, startDate, endDate, description, createdBy: req?.user?.id });
        await project.save();
        res.status(201).json({ message: "Project created successfully", project });
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"Server Error"});
    }
}