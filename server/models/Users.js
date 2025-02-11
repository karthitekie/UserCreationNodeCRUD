const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const UserModel = mongoose.model('Users', UserSchema); // Ensure it's correctly defined and exported

module.exports = UserModel;
