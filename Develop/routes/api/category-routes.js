const router = require('express').Router();
const { Category, Product, ProductTag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    // find all categories
    const categoryData = await Category.findAll({
      // Include associated Products
      include: [
        { model: Product }
      ]
    });
    res.status(200).json(categoryData);
  } catch(err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    // find one category by its `id` value
    const categoryData = await Category.findByPk(req.params.id, {
      // Include associated Products
      include: [
        { model: Product }
      ]
    });
    res.status(200).json(categoryData);
  } catch(err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    if (categoryData.category_name) {
      // Check if the category exists
      const existingCategory = await Category.findOne({
      where: {
        category_name: categoryData.category_name
      }
      });
      // If the category exists, return a 400 error
      if (existingCategory) {
      res.status(400).json({ message: 'This Category is not accepted (Make sure is a new Category)!' });
      return;
      }
    } 
    // If the category name is empty, return a 400 error
    if(categoryData.category_name === ""){
      res.status(400).json({ message: 'Category name is required!' });
      return;
    }
    const categoryData = await Category.create(req.body)
    res.status(200).json(categoryData);
  } catch(err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      }
    });
    res.status(200).json(categoryData);
  } catch(err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
