import express from 'express';
import Product from '../models/Product';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

// @route   GET /api/products
// @desc    Get all products (with optional search & filter)
router.get('/', async (req, res) => {
  try {
    const { campus, category, search } = req.query;
    
    let query: any = { isSold: false };
    
    if (campus) query.campus = campus;
    if (category) query.category = category;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    const products = await Product.find(query).populate('sellerId', 'name avatar');
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/products/:id
// @desc    Get product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('sellerId', 'name avatar campus');
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/products
// @desc    Create a product
router.post('/', protect, async (req: any, res) => {
  try {
    const { title, description, category, condition, price, department, semester, images, campus } = req.body;

    const product = new Product({
      sellerId: req.user,
      title,
      description,
      category,
      condition,
      price,
      department,
      semester,
      images,
      campus
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   DELETE /api/products/:id
// @desc    Delete a product
router.delete('/:id', protect, async (req: any, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    if (product.sellerId.toString() !== req.user) {
      return res.status(401).json({ message: 'User not authorized' });
    }

    await Product.deleteOne({ _id: req.params.id });
    res.json({ message: 'Product removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
