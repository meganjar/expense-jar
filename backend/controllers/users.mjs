
import { generateToken } from "../utils/jwt.js";
import Users from "../model/users.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

// Create non-oauth user
// no GoogleId 
export async function createUser(req, res) {
  try {
    const { name, email, password } =  req.body;
    const existingUser = await Users.findOne({email})

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });

    }

    const hashedPassword = password
      ? await bcrypt.hash(password, 10)
      : undefined;

    const newUser = await Users.create({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch {
    console.error(error);
    res.status(500).json({ message: "Error creating user", error });
  }
}

export async function logInUser(req, res) {
  try {
    if (existingUser) {
   
      const { email, password } = req.body;
      if (!email || !password) {
        return res
          .status(400)
          .json({ message: "Email and password are required" });
      }
    }

      const user = await Users.findOne({ email });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      const token = generateToken(user);
      return res.status(200).json({ message: "User logged in", token });
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error logging in", error });
   }
}


export async function getAllUsers(req, res) {
  try {
    const users = await Users.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching users", error });
  }
}

export async function getUserById(req, res) {
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
}

export async function deleteUser(req, res) {
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
}

export function updateUserPassword(req, res) {
  const { password } = req.body;
  const { id } = req.params;

  if (!password) {
    return res.status(400).json({ message: "Password is required" });
  }

  bcrypt.genSalt(10, function (err, salt) {
    if (err)
      return res
        .status(500)
        .json({ message: "Error generating salt", error: err });

    bcrypt.hash(password, salt, function (err, hashedPassword) {
      if (err)
        return res
          .status(500)
          .json({ message: "Error hashing password", error: err });

      Users.findByIdAndUpdate(id, { password: hashedPassword }, { new: true })
        .then((updatedUser) => {
          if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
          }
          res.status(200).json({ message: "Password updated successfully" });
        })
        .catch((error) =>
          res.status(500).json({ message: "Error updating password", error })
        );
    });
  });
}
