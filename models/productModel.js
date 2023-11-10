const mongoose = require('mongoose');

const ProductSchema = new Schema({
    name: { type: String, required: [true, 'Product name is required'] },
    description: { type: String, required: [true, 'Product description is required'] },
    price: { type: Number, required: [true, 'Price is required'] },
    imageURL: String,
    category: { type: String, },
    sizes: [String],
    colors: [String],
    stock: { type: Number, required: [true, 'Stock quantity is required'] },
    isFeatured: Boolean,
});

const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);

export default Product;