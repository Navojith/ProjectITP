const express = require('express');
const {
    getallexpenses,
    getAexpense,
    createexpenses,
    deleteexpenses,
    updateexpenses
} = require('../controllers/expensesController')

const router = express.Router();

//GET all expenses
router.get('/', getallexpenses);

//GET a expenses
router.get('/:id', getAexpense);

//CREATE a expenses
router.post('/', createexpenses);

//UPDATE expenses
router.patch('/:id', updateexpenses);

//DELETE expenses
router.delete('/:id', deleteexpenses);

module.exports = router;