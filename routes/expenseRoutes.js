const express = require('express');
const router = express.Router();
const { createExpense, getUserExpenses, getOverallExpenses } = require('../controllers/expenseController');

router.post('/', createExpense);
router.get('/user/:userId', getUserExpenses);
router.get('/', getOverallExpenses);

module.exports = router;
