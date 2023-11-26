import express from 'express';
import authCtrl from '../controllers/auth.controller';
import expenseCtrl from '../controllers/expense.controller';

const router = express.Router();

router.route('/api/expenses')
    .post(authCtrl.requireSignin, expenseCtrl.create);

    
export default router;