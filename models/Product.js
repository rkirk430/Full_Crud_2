const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
   type: String,
   required: [true, "name can not be empty"], 
  },
  price: {
    type: Number,
    min: [0, 'you can not add a negative number'],
    required: [true, "price can not be empty"],
  },
  image: {
    type: String,
    required: [true, "image can not be empty"],
  }
}, 
{
  timestamps: true // this will add a time stamp with the fields createdAt and updatedAt
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;








// //models/product_model.js

// const products = [
//     {
//       name: 'Berry Kombucha',
//       price: 8,
//       image:
//         'https://stayhome.store/wp-content/uploads/Health-Ade-Kombucha-Organic-Maca-Berry_clipped_rev_1.jpg',
//     },
//     {
//       name: 'Mango Kombucha',
//       price: 11,
//       image:
//         'https://www.instacart.com/image-server/466x466/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/product-image/file/large_25fa225f-df55-4656-a1bd-3d2c3f48d942.jpg',
//     },
//     {
//       name: 'White Peach Kombucha',
//       price: 7,
//       image:
//         'https://cdn.shopify.com/s/files/1/0333/4881/2936/products/RemedyDrinks_PeachKombucha_Front_400x500_crop_center.jpg?v=1645756335',
//     },
//   ];

//   module.exports = products
  