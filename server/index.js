import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import blogRoutes from './routes/postRoutes.js';
import userRoutes from './routes/userRoutes.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config()

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => {
        console.log(`Connected to database and backend Server started on port ${PORT}`);
    }))
    .catch((err) => console.log(err));

// mongoose.set('useFindAndModify', false);

app.get('/', (req, res) => {
    res.send('Hello from backend!');
})

app.use('/posts', blogRoutes);
app.use('/users', userRoutes);
