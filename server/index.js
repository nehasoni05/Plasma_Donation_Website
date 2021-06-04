import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import donor from './routes/donor.js';
import requester from './routes/requester.js';
import dotenv  from "dotenv";


const app = express();
dotenv.config({ path : './config.env'});

app.use(bodyParser.json({ limit: '20mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));
app.use(cors());


app.use('/plasma', donor);
app.use('/plasma',requester);

const CONNECTION_URL=process.env.DATABASE;
const PORT=process.env.PORT;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);