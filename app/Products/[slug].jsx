import React from 'react';
import { useRouter } from 'next/router';
import { Products } from '../Product';
import Image from 'next/image';

const ProductPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const product = Products.find((p) => p.slug === `/products/${slug}`);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-5">
      <div className="bg-white p-5 rounded-xl shadow-sm">
        <Image
          src={product.image}
          alt={product.title}
          width={640}
          height={640}
          className="w-full h-80 object-cover drop-shadow-md"
        />
        <h1 className="text-3xl py-3 text-center font-medium">{product.title}</h1>
        <p className="text-xl py-2 text-center">{product.price}</p>
        <div className="text-center">
          <button className="bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 transition-colors duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
