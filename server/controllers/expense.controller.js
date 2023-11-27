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

const expenseByID = async (req, res, next, id) => {
  try {
    let expense = await Expense.findById(id).populate('recorded_by', '_id name').exec()
    if (!expense)
      return res.status('400').json({
        error: "Expense record not found"
      })
    req.expense = expense
    next()
  } catch (err){
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

const read = (req, res) => {
  return res.json(req.expense)
}

const listByUser = async (req, res) => {
  let firstDay = req.query.firstDay
  let lastDay = req.query.lastDay
  try {
    let expenses = await Expense.find(
    {
      '$and':
      [
        {
          'incurred_on':
          {
            '$gte': firstDay, '$lte':lastDay
          }
        }, 
        {
          'recorded_by': req.auth._id
        }
      ]
    }).sort('incurred_on').populate('recorded_by', '_id name')

    res.json(expenses)
  } catch (err){
    console.log(err)
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    })
  }
}

export default { create, listByUser, read };