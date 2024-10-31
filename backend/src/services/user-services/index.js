const express = require('express');
const { registerUser } = require('./userController');
const { body } = require('express-validator');
const validateRequest = require('../../shared/middlewares/validateRequest');

const app = express();
app.use(express.json());

app.post(
  '/register',
  [
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    body('name').notEmpty(),
  ],
  validateRequest,
  registerUser
);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`User service running on port ${PORT}`));
