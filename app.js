import express from 'express';
import Router from './router.js'

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/Calc', Router);

app.listen(3000, () => {
    console.log('App is listening on 3000');
})

export default app;