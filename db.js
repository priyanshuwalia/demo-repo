const mongoose = require('mongoose');

console.log("connected to")

// Define User Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    
});

// Define Admin Schema (extends User Schema if needed)
const adminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

});

// Define Course Schema
const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'admin' }
});

// Define Purchase Schema
const purchaseSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'course', required: true },
    purchaseDate: { type: Date, default: Date.now }
});

// Create Models
const userModel = mongoose.model('User', userSchema);
const adminModel = mongoose.model('Admin', adminSchema);
const courseModel = mongoose.model('Course', courseSchema);
const purchaseModel = mongoose.model('Purchase', purchaseSchema);

// Export Models
module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
};
