import Users from '../model/users.mjs';
import bcrypt from 'bcrypt';
// @desc    Create a new user
// @route   POST /api/users
// @access  Public
export const createUser = async (req, res) => {
  try {
    const { googleId, name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const newUser = new Users({
      googleId,
      name,
      email,
      password,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating user", error });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching users", error });
  }
};

// @desc    Get a single user by ID
// @route   GET /api/users/:id
// @access  Public
export const getUserById = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching user", error });
  }
};

// @desc    Delete a user
// @route   DELETE /api/users/:id
// @access  Public
export const deleteUser = async (req, res) => {
  try {
    const user = await Users.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting user", error });
  }
};

export function updateUserPassword(req, res) {
  const { password } = req.body;
  const { id } = req.params;

  if (!password) {
    return res.status(400).json({ message: 'Password is required' });
  }

  bcrypt.genSalt(10, function (err, salt) {
    if (err) return res.status(500).json({ message: 'Error generating salt', error: err });

    bcrypt.hash(password, salt, function (err, hashedPassword) {
      if (err) return res.status(500).json({ message: 'Error hashing password', error: err });

      Users.findByIdAndUpdate(id, { password: hashedPassword }, { new: true })
        .then((updatedUser) => {
          if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
          }
          res.status(200).json({ message: 'Password updated successfully' });
        })
        .catch((error) => res.status(500).json({ message: 'Error updating password', error }));
    });
  });
}


