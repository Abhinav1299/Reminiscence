
import postModel from "../models/postModel";

export const getPosts = async (req, res) => {
    try{
        const posts = await postModel.find();
        res.status(200).json(posts);
    } catch(err) {
        res.status(404).json({message: err.message})
    }
    
}

export const createPost = async (req, res) => {
    const post = new postModel(req.body);
    try{
        await post.save();
        res.status(201).json(post);
    } catch(err) {
        res.status(409).json({message: err.message})
    }
}