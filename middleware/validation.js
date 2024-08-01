const { check, validationResult } = require('express-validator');

exports.validateUser = [
  check('email').isEmail().withMessage('Must be a valid email'),
  check('name').not().isEmpty().withMessage('Name is required'),
  check('mobileNumber').isMobilePhone().withMessage('Must be a valid mobile number'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

exports.validateExpense = [
  check('amount').isNumeric().withMessage('Amount must be a number'),
  check('description').not().isEmpty().withMessage('Description is required'),
  check('participants').isArray().withMessage('Participants must be an array'),
  check('splitMethod').isIn(['equal', 'exact', 'percentage']).withMessage('Invalid split method'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
