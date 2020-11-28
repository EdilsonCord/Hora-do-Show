const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true
	},
	surname: {
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
		type: String,
	},

	passwordRegister: {
		type: String,
		select: false
	},

	passwordRegisterExpires: {
		type: Date,
		select: false
	},

	passwordResetToken: {
		type: String,
		select: false
	},

	passwordResetExpires: {
		type: Date,
		select: false
	},

	createdAt: {
		type: Date,
		default: Date.now
	},

	dtNasc: {
		type: String,
	},

	altura: {
		type: String,
	},

	sexo: {
		type: String,
	},

	peso: {
		type: String,
	},

	meta: {
		type: String,
		// default: "Definir"
	},

});

UserSchema.pre("save", async function hashPassword(next) {
	if (!this.isModified("passwordRegister")) return next();

	this.passwordRegister = await bcrypt.hash(this.passwordRegister, 8);
});

UserSchema.pre("save", async function hashPassword(next) {
	if (!this.isModified("password")) return next();

	this.password = await bcrypt.hash(this.password, 8);
}),

	UserSchema.methods = {
		compareHash(hash) {
			return bcrypt.compare(hash, this.password);
		},

		compareHashPassRegister(hash) {
			return bcrypt.compare(hash, this.passwordRegister);
		},

		generateToken() {
			return jwt.sign({ id: this.id }, "secret", {
				expiresIn: 86400
			});
		}
	};

mongoose.model("User", UserSchema)
