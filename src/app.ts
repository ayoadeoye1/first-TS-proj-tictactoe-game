import * as express from 'express';
import * as dotenv from 'dotenv';
import * as cors from 'cors';

import Main from './logic/main'

dotenv.config();

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors());

app.post('/logic', Main);

console.log(Main)

export default app;