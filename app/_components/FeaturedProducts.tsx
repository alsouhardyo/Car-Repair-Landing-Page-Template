import { products } from "../lib/products";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { motion } from "motion/react";

const FeaturedProducts = () => {
  return (
    <section className="box-padding">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <p className="text-accent font-medium mb-2">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold font-slab">Featured Products</h2>
        </div>
        <button className="bg-accent text-white px-6 py-3 rounded-lg btn-transition hover:bg-accent/90 self-start md:self-auto ease-in-out duration-500 cursor-pointer">
          View All Products
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="group relative bg-gray-100 rounded-lg p-6 hover:shadow-2xl transition-all duration-500 ease-out overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            {product.discountPercentage && (
              <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                -{product.discountPercentage}%
              </div>
            )}

            <div className="mb-4 overflow-hidden rounded-lg">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  width={300}
                  height={200}
                  className="w-full h-40 object-contain"
                />
              </motion.div>
            </div>

            <div className="flex items-center mb-2">
              <FaStar className="text-yellow-500 mr-1" size={16} />
              <FaStar className="text-yellow-500 mr-1" size={16} />
              <FaStar className="text-yellow-500 mr-1" size={16} />
              <FaStar className="text-yellow-500 mr-1" size={16} />
              <span className="text-sm text-gray-600 text-semibold">1 review</span>
            </div>

            <h3 className="font-semibold mb-3 text-xl">{product.title}</h3>

            <div className="flex items-center gap-2">
              {product.discountedPrice ? (
                <>
                  <span className="text-lg font-bold text-accent">${product.discountedPrice}</span>
                  <span className="text-sm text-gray-500 line-through">${product.price}</span>
                </>
              ) : (
                <span className="text-lg font-bold text-accent">${product.price}</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedProducts