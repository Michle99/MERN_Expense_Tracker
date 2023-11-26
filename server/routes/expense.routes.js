import express from 'express';
import authCtrl from '../controllers/auth.controller';
import expenseCtrl from '../controllers/expense.controller';

const router = express.Router();

router.route('/api/expenses')
    .post(authCtrl.requireSignin, expenseCtrl.create)
    .get(authCtrl.requireSignin, expenseCtrl.listByUser)

    
export default router;