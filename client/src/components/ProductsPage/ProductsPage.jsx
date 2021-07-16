import React from 'react';
import './ProductsPage.css';
import FooterSection from '../FooterSection/FooterSection';
import Navbar from '../Navbar/Navbar';
import ProductCard from './ProductCard/ProductCard';

import products from '../../data';

function ProductsPage() {
  return (
    <div>
      <Navbar />
      <div className="products-wrapper">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <FooterSection />
    </div>
  );
}

export default ProductsPage;
