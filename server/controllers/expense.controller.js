import Expense from '../models/expense.model.js';
import extend from 'lodash/extend';
import errorHandler from './../helpers/dbErrorHandler';
import mongoose from 'mongoose';

const create = async (req, res) => {
    try {
      req.body.recorded_by = req.auth._id
      const expense = new Expense(req.body)
      await expense.save()
      return res.status(200).json({
        message: "Expense recorded!"
      })
    } catch (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
}

export default { create };