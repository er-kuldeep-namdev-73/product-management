import Product from "../models/product.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, products, count:products?.length });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { productName, basePrice, brand, category,SKU,tags,costPerItem,compareAtPrice,pageTitle,metaDescription,urlSlug,taxable,variants } = req.body;
    if(SKU){
        const existingProduct = await Product.findOne({ SKU });
        if (existingProduct) {
            return res.status(400).json({ success: false, message: "Product with this SKU already exists." });
                
        }
    }
    const newProduct = new Product({ productName, brand, category,SKU,tags,taxable,
        pricing:{
            basePrice,
            costPerItem,
            compareAtPrice
        },
        seo:{
            pageTitle,metaDescription,urlSlug
        },
        variants
 });
    await newProduct.save();
    res.status(201).json({ success: true, product: newProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: JSON.stringify(error.message) });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({ success: true, product: updatedProduct });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
