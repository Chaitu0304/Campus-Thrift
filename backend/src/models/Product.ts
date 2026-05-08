import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  condition: { type: String, required: true },
  price: { type: Number, required: true },
  department: { type: String },
  semester: { type: String },
  images: [{ type: String }],
  campus: { type: String, required: true }, // Inherited from seller
  isSold: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Product', productSchema);
