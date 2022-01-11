
import mongoose from "mongoose";
import postModel from "../models/postModel.js";

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

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags, likeCount } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, likeCount, _id: id };

    await postModel.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async(req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await postModel.findByIdAndRemove(id);
    res.json({message: 'Post deleted successfully'});
}

export const likePost = async(req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const post = await postModel.findById(id);
    const updatedPost = await postModel.findByIdAndUpdate(id, {likeCount: post.likeCount+1 }, {new: true});
    res.json(updatedPost);
}