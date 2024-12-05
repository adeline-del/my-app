import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatGhanaCedis } from '../utils/currency';
import type { Product } from '../types';
import Picture3 from '../img/Picture3.png';
import Picture4 from '../img/Picture4.png';
// import Picture5 from '../img/Picture5.png';
// import Picture6 from '../img/Picture7.png';
import Picture7 from '../img/Picture7.png';
import Picture8 from '../img/Picture8.png';
import Picture1 from '../img/Picture7.png';
// import Picture7 from '../img/Picture7.png';




const products: Product[] = [
  {
    id: 1,
    name: "Solar Pro Incubator",
    description: "Professional-grade solar incubator with automatic temperature control",
    price: 7999.99,
    // image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80",
    image: Picture1,
    specs: {
      "Capacity": "500 eggs",
      "Temperature Range": "35-39°C",
      "Power Source": "Solar + Battery Backup",
      "Humidity Control": "Automatic",
      "Display": "LCD Touch Screen",
    },
  },
  {
    id: 2,
    name: "EcoHatch Basic",
    description: "Entry-level solar incubator perfect for small farms",
    price: 3999.99,
    // image: "https://images.unsplash.com/photo-1567201080580-bfcc97dae346?auto=format&fit=crop&q=80",
    image: Picture3,
    specs: {
      "Capacity": "100 eggs",
      "Temperature Range": "35-38°C",
      "Power Source": "Solar",
      "Humidity Control": "Manual",
      "Display": "Digital LED",
    },
  },
  {
    id: 3,
    name: "SmartHatch Elite",
    image: Picture7,
    description: "Advanced IoT-enabled solar incubator with mobile app control",
    price: 11999.99,
    // image: "https://images.unsplash.com/photo-1562066474-677480f4f4ac?auto=format&fit=crop&q=80",
    specs: {
      "Capacity": "1000 eggs",
      "Temperature Range": "35-39°C",
      "Power Source": "Solar + Grid Backup",
      "Humidity Control": "Smart Automatic",
      "Display": "Digital LED",
      // "Display": "7\" Touch Screen",
    },
  },
  {
    id: 4,
    name: "EcoHatch Pro",
    image: Picture7,
    description: "Mid-range solar incubator for growing farms",
    price: 5999.99,
    // image: "https://images.unsplash.com/photo-1567201080580-bfcc97dae346?auto=format&fit=crop&q=80",
    specs: {
      "Capacity": "300 eggs",
      "Temperature Range": "35-38°C",
      "Power Source": "Solar",
      "Humidity Control": "Semi-Automatic",
      "Display": "Digital LED",
    },
  },
  {
    id: 5,
    name: "EcoHatch Basic-101",
    image: Picture4,
    description: "lorem lkerfmv",
    price: 399.99,
    // image: "https://images.unsplash.com/photo-1567201080580-bfcc97dae346?auto=format&fit=crop&q=80",
    specs: {
      "Capacity": "120 eggs",
      "Temperature Range": "35-38°C",
      "Power Source": "Solar",
      "Humidity Control": "Manual",
      "Display": "Digital LED"
    }
  },
  {
    id: 6,
    name: "EcoHatch Track",
    image: Picture8,
    description: "Entry-level solar incubator",
    price: 39.99,
    // image: "https://images.unsplash.com/photo-1567201080580-bfcc97dae346?auto=format&fit=crop&q=80",
    specs: {
      "Capacity": "120 eggs",
      "Temperature Range": "35-38°C",
      "Power Source": "Solar",
      "Humidity Control": "Manual",
      "Display": "Digital LED"
    }
  }
];

export function Products() {
  const { dispatch } = useCart();
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        
        {/* Grid layout for products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover cursor-pointer"
                onClick={() => setSelectedProduct(product)} // Show details on click
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-yellow-500">
                    {formatGhanaCedis(product.price)}
                  </span>
                  <button
                    onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
                    className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for selected product */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4">
              <div className="fixed inset-0 bg-black opacity-50" onClick={() => setSelectedProduct(null)}></div>
              <div className="relative bg-white rounded-lg max-w-2xl w-full">
                <div className="p-6">
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                  >
                    ×
                  </button>
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-2xl font-bold mb-2">{selectedProduct.name}</h3>
                  <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(selectedProduct.specs || {}).map(([key, value]) => (
                      <div key={key}>
                        <span className="font-semibold">{key}:</span> {value}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-yellow-500">
                      {formatGhanaCedis(selectedProduct.price)}
                    </span>
                    <button
                      onClick={() => {
                        dispatch({ type: 'ADD_TO_CART', payload: selectedProduct });
                        setSelectedProduct(null);
                      }}
                      className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
