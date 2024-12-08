import { useState } from 'react';
import { formatGhanaCedis } from '../utils/currency';
import Picture3 from '../img/Picture3.png';
import Picture7 from '../img/Picture7.png';
import Picture8 from '../img/Picture8.png';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[]; 
  specs: { [key: string]: string };
}

const products: Product[] = [
  {
    id: 1,
    name: "M1 Pro Incubator",
    description: "Professional-grade incubator with automatic temperature control",
    price: 7999.99,
    images: [
      "https://res.cloudinary.com/djfnmztu9/image/upload/w_300,h_300,c_fill/v1733634144/Picture6_qiqytt.png",
       "https://res.cloudinary.com/djfnmztu9/image/upload/w_300,h_300,c_fill/v1733634143/Picture4_up67dv.png", 
       "https://res.cloudinary.com/djfnmztu9/image/upload/w_300,h_300,c_fill/v1733634142/Picture5_kl5qcs.png"
      ],
    specs: {
      "Capacity": "500 eggs",
      "Temperature Range": "35-39°C",
      "Power Source": "Electric + Battery Backup",
      "Humidity Control": "Automatic",
      "Display": "LCD Screen",
    },
  },
  {
    id: 2,
    name: "EcoHatch Basic",
    description: "Entry-level solar incubator perfect for small farms",
    price: 3999.99,
    images: [Picture3, Picture7, Picture8],
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
    images: [Picture3, Picture7, Picture8],
    description: "Advanced IoT-enabled solar incubator with mobile app control",
    price: 11999.99,
    specs: {
      "Capacity": "1000 eggs",
      "Temperature Range": "35-39°C",
      "Power Source": "Solar + Grid Backup",
      "Humidity Control": "Smart Automatic",
      "Display": "Digital LED",
    },
  },
  {
    id: 4,
    name: "EcoHatch Pro",
    images: [Picture3, Picture7, Picture8],
    description: "Mid-range solar incubator for growing farms",
    price: 5999.99,
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
    images: [Picture3, Picture7, Picture8],
    description: "Lorem lkerfmv",
    price: 399.99,
    specs: {
      "Capacity": "120 eggs",
      "Temperature Range": "35-38°C",
      "Power Source": "Solar",
      "Humidity Control": "Manual",
      "Display": "Digital LED",
    },
  },
  {
    id: 6,
    name: "EcoHatch Track",
    images: [Picture3, Picture7, Picture8],
    description: "Entry-level solar incubator",
    price: 39.99,
    specs: {
      "Capacity": "120 eggs",
      "Temperature Range": "35-38°C",
      "Power Source": "Solar",
      "Humidity Control": "Manual",
      "Display": "Digital LED",
    },
  }
];

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageChange = (direction: 'prev' | 'next') => {
    if (selectedProduct?.images) {
      if (direction === 'next') {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedProduct.images.length);
      } else {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + selectedProduct.images.length) % selectedProduct.images.length);
      }
    }
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        
        {/* Grid layout for products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
              // Show the first image by default
                src={product.images[0]} 
                alt={product.name}
                className="w-full h-48 object-cover cursor-pointer"
                onClick={() => setSelectedProduct(product)} 
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-yellow-500">
                    {formatGhanaCedis(product.price)}
                  </span>
                  <a
                    href="tel:+233202647141"
                    className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Place an Order
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for selected product */}
        {selectedProduct && selectedProduct.images && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4">
              <div className="fixed inset-0 bg-black opacity-50" onClick={() => setSelectedProduct(null)}></div>
              <div className="relative bg-white rounded-lg max-w-2xl w-full">
                <div className="p-6 relative">
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl"
                  >
                    ×
                  </button>

                  {/* Image Slider */}
                  <div className="relative">
                    <img
                      src={selectedProduct.images[currentImageIndex]}
                      alt={selectedProduct.name}
                      className="w-full h-64 object-contain rounded-lg mb-4"  
                      // Changed to object-contain for full image view
                    />
                    {/* Left Arrow Button */}
                    <button
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black text-2xl"
                      onClick={() => handleImageChange('prev')}
                    >
                      &lt;
                    </button>
                    {/* Right Arrow Button */}
                    <button
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black text-2xl"
                      onClick={() => handleImageChange('next')}
                    >
                      &gt;
                    </button>
                  </div>

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
                    <a
                      href="tel:+233202647141"
                      className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      Place an Order
                    </a>
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
