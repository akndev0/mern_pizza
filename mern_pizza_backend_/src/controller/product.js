const Product = require("../models/product");
const slugify = require("slugify");


exports.createProduct = (req, res) => {


  const { name, price, description, category, quantity,productImg } = req.body;


  const product = new Product({
    name: name,
    slug: slugify(name),
    price,
    productImg,
    quantity,
    description,
    category,
    ratings
   });

  product.save((error, product) => {
    if (error) return res.status(400).json({ error });
    if (product) {
      res.status(201).json({ product, files: req.files });
    }
  });
};

exports.getProductsBySlug = (req, res) => {
  const { slug } = req.params;

   
        Product.find({ slug: slug })
        .exec((error, products) => {
          if (error) return res.status(400).json({ error });
          if (products) {
            res.status(201).json({ products });
          }

        
        });
      
    

};

exports.getProductDetailsById = (req, res) => {
  const { productId } = req.params;
  if (productId) {
    Product.findOne({ _id: productId }).exec((error, product) => {
      if (error) return res.status(400).json({ error });
      if (product) {
        res.status(200).json({ product });
      }
    });
  } else {
    return res.status(400).json({ error: "Params required" });
  }
};

exports.getProducts = async (req, res) => {
  
    const products = await Product.find({})
    .select("_id name slug price quantity category description productImg ratings")
    .exec();
  res.status(200).json({ products });
 
};


exports.getProductsFilterSorting = async (req, res) => {

    try {
      
    const queryObj = { ...req.query }
   
    const excludedFields = ['page', 'sort', 'limit', 'fields']
    excludedFields.forEach(el => delete queryObj[el])

    
    let queryString = JSON.stringify(queryObj)
    queryString = queryString.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`)    
    let query = Product.find(JSON.parse(queryString))
   
   
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ').trim()
    
   
      query = query.sort(sortBy.trim())
    } else {
      query = query.sort('createdAt')
    }
    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ')
     
      query = query.select(fields)
    } else {
      query = query.select('-__v')
      
    }

     
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 100;
    const skip = (page - 1) * limit;
    
    
    query = query.skip(skip).limit(limit);
   
    
    const products = await query
    
  
    res.status(200).json({ products });
   
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error
    })
  }
};