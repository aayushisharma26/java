import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true},

    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'student'], default: 'student', required: true },
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
});

export default mongoose.model('User', UserSchema);
