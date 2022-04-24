import userModel from "../models/userModel.js";
import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

export const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await userModel.findOne({ email });

        if (!existingUser) return res.status(404).json({ message: "User doesn't exists." });

        const isPasswordCorrect = await bcrypt.compare(existingUser.password, password);

        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid Credentials" });

        // generate token for existing user
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: '1h' });

        res.status(200).json({ result: existingUser, token: token })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong..." });
    }
}

export const signup = async (req, res) => {
    const { email, password, confirmPassword, firstName, lastName } = req.body;
    try {
        const existingUser = await userModel.findOne({ email });

        if (existingUser) return res.status(400).json({ message: "User already exists." });

        if (password !== confirmPassword) return res.status(400).json({ message: "Password doesn't match." });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await userModel.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

        // generate token for new user
        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: '1h' });

        res.status(200).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong..." });
    }
}