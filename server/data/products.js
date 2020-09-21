const IMAGE_CDN_URL = 'https://res.cloudinary.com/dcnxmyuvm/image/upload';

const createProduct = (id, name, price, review, rating, imageUrl) => {
  return {
    id,
    name,
    image: `${IMAGE_CDN_URL}${imageUrl}`,
    price,
    review,
    rating,
  };
};

export default [
  createProduct('product-1', 'Product 1', 'Rp. 123.000', 5, 5, '/v1600694731/test/product-1.jpg'),
  createProduct('product-2', 'Product 2', 'Rp. 242.000', 5, 5, '/v1600694731/test/product-2.jpg'),
  createProduct('product-3', 'Product 3', 'Rp. 976.000', 5, 5, '/v1600694731/test/product-3.jpg'),
  createProduct('product-4', 'Product 4', 'Rp. 567.000', 5, 5, '/v1600694731/test/product-4.jpg'),
  createProduct('product-5', 'Product 5', 'Rp. 32.000', 5, 5, '/v1600694731/test/product-5.jpg'),
  createProduct('product-6', 'Product 6', 'Rp. 12.000', 5, 5, '/v1600694731/test/product-6.jpg'),
  createProduct('product-7', 'Product 7', 'Rp. 1.000', 5, 5, '/v1600694731/test/product-7.jpg'),
  createProduct('product-8', 'Product 8', 'Rp. 32.000', 5, 5, '/v1600694731/test/product-8.jpg'),
  createProduct('product-9', 'Product 9', 'Rp. 32.000', 5, 5, '/v1600694731/test/product-9.jpg'),
  createProduct('product-10', 'Product 10', 'Rp. 4.000', 5, 5, '/v1600694731/test/product-10.jpg'),
  createProduct('product-11', 'Product 11', 'Rp. 564.000', 5, 5, '/v1600694731/test/product-11.jpg'),
  createProduct('product-12', 'Product 12', 'Rp. 5.000', 5, 5, '/v1600694731/test/product-12.jpg'),
  createProduct('product-13', 'Product 12', 'Rp. 878.000', 5, 5, '/v1600694731/test/product-13.jpg'),
  createProduct('product-14', 'Product 14', 'Rp. 912.000', 5, 5, '/v1600694731/test/product-14.jpg'),
  createProduct('product-15', 'Product 15', 'Rp. 156.000', 5, 5, '/v1600694731/test/product-15.jpg'),
  createProduct('product-16', 'Product 16', 'Rp. 176.000', 5, 5, '/v1600694731/test/product-16.jpg'),
];
