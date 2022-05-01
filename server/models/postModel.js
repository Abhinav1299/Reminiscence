import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    // title: {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    // name: {                 // name of the creator
    //     type: String
    // },
    // message: {
    //     type: String,
    //     required: true
    // },
    // creator: {              // id of the creator
    //     type: String,
    //     required: true
    // },
    // tags: {
    //     type: [String]
    // },
    // selectedFile: {
    //     type: String
    // },
    // likes: {
    //     type: [String],
    //     default: [],
    // },
    // createdAt: {
    //     type: Date,
    //     default: new Date()
    // }
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: { type: [String], default: [] },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const postModel = mongoose.model('postModel', postSchema);
export default postModel;