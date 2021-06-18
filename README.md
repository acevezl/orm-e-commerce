
# 13 ORM and CRUD
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Description
This is a backend application with API routes for CRUD: Create Retrieve Update and Delete. These tasks are accomplished using an ORM (Object Relationship Mapping) Tool: Sequelize.

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Credits](#Credits)
* [Test instructions](#Test-Instructions)
* [Questions](#Questions)

## Installation
In order to run this app, you'll need to install the following NPM modules:

* Express: Middleware for communication between backend and front end (or in this case, to provide an API response).
* Sequelize: The object relationship mapper.
* Dotenv: A utility to store environment variables (useful to hide authentication data or apy keys).

``` 
npm install express sequelize dotenv
```

## Usage
Since this is a back-end only application the functionality will be tested using Insomnia. This tool will allow us to validate the API responses are correct, and that the CRUD tasks are occurring correctly.

* C.R.U.D. for CATEGORIES ([See hi-res version here](https://drive.google.com/file/d/1k08DbbHLEXkOEWhJNSuU2PPlMNpVZl1v/view)):
![Category CRUD](./assets/Category-CRUD.gif)

* C.R.U.D. for TAGS: ([See hi-res version here](https://drive.google.com/file/d/1xRX6Yz9G9Nn2m3ybyq4JaG4bvmZcaNL7/view))
![Tag CRUD](./assets/Tags-CRUD.gif)

* C.R.U.D. for PRODUCTS: ([See hi-res version here](https://drive.google.com/file/d/1xRX6Yz9G9Nn2m3ybyq4JaG4bvmZcaNL7/view))
![Product CRUD](./assets/Product-CRUD.gif)

### Relationship between Product and Category
A product can have one category, and a category can have many products. This means that, on our product model, we only need to have a category_id as a foreign key pointing to the id of the category to which this product belongs.

```
// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});
```
### Relationship between Product and Tags
A product can have many tags, and a tag can be applied to many products. This means we have a many to many relationship that needs to be configured via Sequelize:

```
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through:ProductTag,
  foreignKey: 'product_id',
  onDelete: 'CASCADE'});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through:ProductTag,
  foreignKey: 'tag_id',
  onDelete: 'CASCADE'});
```
The code above will create a relationship table between product and tags called productTag, and it will be described as follows:

```
product_id: INTEGER FOREIGN KEY // This foreign key points to the product who was the tag
tag_id: INTEGER FOREIGN KEY // This is the tag applied to the product
id: INTEGER PRIMARY KEY // This is an internal id for this table to identify each unique product-tag relationship.
```
In addition, we are setting the onDelete property as CASCADE. This is in place so that, when we delete a product, we also delete all the product-tag relationships. Logically these are no longer needed when a product or tag are deleted from the database.

## License

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
GNU General Public License v3.0

## Test Instructions

To test, follow the [Usage](##Usage) instructions using Insomnia - Call each route independently and see the JSON results!

## Questions
E-mail me: <lou.arnaut@gmail.com>
Checkout my Github profile: [acevezl](https://github.com/acevezl)
