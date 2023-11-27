import express from 'express';
import authCtrl from '../controllers/auth.controller';
import expenseCtrl from '../controllers/expense.controller';

const router = express.Router();

router.route('/api/expenses')
    .post(authCtrl.requireSignin, expenseCtrl.create)
    .get(authCtrl.requireSignin, expenseCtrl.listByUser)

router.route('/api/expenses/:expenseId')
    .put(authCtrl.requireSignin, expenseCtrl.hasAuthorization, expenseCtrl.update)
    .delete(authCtrl.requireSignin, expenseCtrl.hasAuthorization, expenseCtrl.remove)

router.param('expenseId', expenseCtrl.expenseByID)

    
export default router;