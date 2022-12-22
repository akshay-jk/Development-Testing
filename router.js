import express from 'express';

import ControllerLayer from './controller.js';

const router = express.Router();

router.route('/Add').post(ControllerLayer.Addition);
router.route('/Subtract').post(ControllerLayer.Subtraction);
router.route('/Multiply').post(ControllerLayer.Multiplication);
router.route('/Divide').post(ControllerLayer.Division);

export default router;