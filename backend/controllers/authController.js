
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async(req,res) => {
    try {
        const {name, username,email, password, role} = req.body;
        console.log(req.body);
        if(!name || !username || !email || !password || !role) {
            return res.status(400).json({message:"All fields are mandatory"});
        }
        const existingUser = await User.findOne({ $or:[{username, email}] });
        if(existingUser) {
            return res.status(400).json({message:"User already exist"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({name,username,email,password:hashedPassword, role});
        await user.save();
        res.status(201).json({message:"User registered successfully", user});
    }
    catch (err){
        console.log(err);
        res.status(500).json({message:"Server error"})
    }
}

export const loginUser =async(req,res) => {
    try{
        const {username, password } = req.body;
        if(!username || !password) {
            return res.status(400).json({message:"All fields are mandatory"});
        }
        const user = await User.findOne({username});
        if(!user){
            return res.status(400).json({message:"User not found"});
        }
        const isPasswordValid = await bcrypt.compare(password,user?.password);
        if(!isPasswordValid){
            return res.status(400).json({message:"Invalid credentials"});
        }
        const token = jwt.sign(
            {id:user?._id,role:user?.role},process.env.JWT_SECRET,
            {expiresIn: "1d"}
        );
        res.status(200).json({message:"Login successfully", token, user: {id:user._id, name:user.name, username:user.username, email:user.email, role:user.role}});
    }
    catch(err) {
        console.log(err);
        res.status(500).json({message:"server Error"});
    }
}