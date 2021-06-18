const router = require('express').Router();
const { Category, Tag, Product, ProductTag } = require('../../models');

// The `/api/seeds` endpoint
router.get('/', (req,res) => {
    const categorySeed = require('../../seeds/category-seeds');
    categorySeed();

    const tagSeed = require('../../seeds/tag-seeds');
    tagSeed();

    const productSeed = require('../../seeds/product-seeds');
    productSeed();

    const productTagSeed = require('../../seeds/product-tag-seeds');
    productTagSeed();
    res.status(200).json('Database seeded');
});

module.exports = router;