import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  campus: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
  avatar: { type: String, default: '' },
  savedItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('User', userSchema);
