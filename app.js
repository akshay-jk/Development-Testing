import express from 'express';
import Router from './router.js'

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/Calc', Router);

export default app;