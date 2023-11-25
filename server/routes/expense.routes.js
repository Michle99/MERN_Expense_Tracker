import express from 'express';
import authCtrl from '../controllers/auth.controller';


const router = express.Router();

router.route('/api/expenses')
    .post(authCtrl.requireSignin, expenseCtrl.create);