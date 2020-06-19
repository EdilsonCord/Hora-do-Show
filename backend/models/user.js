const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true
  },
  password: {
    type: String
  },

  passwordRegister: {
    type: String,
    select: false
  },

  passwordRegisterExpires: {
    type: String,
    select: false
  },

  passwordResetToken: {
    type: String,
    select: false
  },
  
  passwordResetExpires: {
    type: String,
    select: false 
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

UserSchema.pre("save", async function hashPassword(next) {
  if (!this.isModified("passwordRegister")) next();

  this.passwordRegister = await bcrypt.hash(this.passwordRegister, 8);
});

UserSchema.methods = {
  compareHash(hash) {
    return bcrypt.compare(hash, this.passwordRegister);
  },
    generateToken() {
      return jwt.sign({ id: this.id }, "secret", {
        expiresIn: 86400
      });
    },
} 


UserSchema.pre("save", async function hashPassword(next) {
  if (!this.isModified("password")) next();

  this.password = await bcrypt.hash(this.password, 8);
}),

UserSchema.methods = {
  compareHash(hash) {
    return bcrypt.compare(hash, this.password);
  },

  generateToken() {
    return jwt.sign({ id: this.id }, "secret", {
      expiresIn: 86400
    });
  }
};

mongoose.model("User", UserSchema)
