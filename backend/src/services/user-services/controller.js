const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const UserModel = require('./UserModel');

const registerUser = async (req, res) => {
  try {
    const { name, email, password, age, gender, interests, bio } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = uuidv4();

    const user = new UserModel({
      userId,
      name,
      email,
      password: hashedPassword,
      age,
      gender,
      interests,
      bio,
      popularity: gender === 'female' ? 0 : undefined,
    });

    await user.save();
    res.status(201).json({ userId });
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
};

module.exports = { registerUser };
