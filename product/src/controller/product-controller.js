// import ProductModel from "../model/productSchema.js";
const ProductModel = require("../model/product");

const createProduct = async (req, res) => {
  const newProduct = new ProductModel(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
const getProducts = async (req, res) => {
  try {
    const products = await ProductModel.findById(req.params.id);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllProducts = async (req, res) => {
  try {
  const products = await ProductModel.find();
  res.status(200).json(products);
  } catch (error) {
  res.status(500).json({ message: error.message });
  }
  };

module.exports = {
  createProduct,
  getProducts,
  getAllProducts
};
