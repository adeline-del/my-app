import { useState } from 'react';
import { formatGhanaCedis } from '../utils/currency';

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
    name: "IncuVate Incubator",
    description: "Professional-grade incubator with Manual temperature control",
    price: 7350.00,
    images: [
      "https://res.cloudinary.com/djfnmztu9/image/upload/w_300,h_300,c_fill/v1733632529/prod_1_iq7ryd.jpg",
      "https://res.cloudinary.com/djfnmztu9/image/upload/w_300,h_300,c_fill/v1733632529/prod_1_iq7ryd.jpg",
      "https://res.cloudinary.com/djfnmztu9/image/upload/w_300,h_300,c_fill/v1733632529/prod_1_iq7ryd.jpg"
    ],
    specs: {
      "Capacity": "616 eggs",
      "Temperature Range": "35-39°C",
      "Power Source": "Electricity",
      "Humidity Control": "Manual",
      "Display": "LCD Screen",
    },
  },
  {
    id: 2,
    name: "IncuVate Incubator",
    description: "Entry-level Electricity incubator perfect for small farms",
    price: 5600.00,
    images: [
      "https://res.cloudinary.com/djfnmztu9/image/upload/w_300,h_300,c_fill/v1733632529/prod_3_ysboiw.jpg",
      "https://res.cloudinary.com/djfnmztu9/image/upload/w_300,h_300,c_fill/v1733632529/prod_3_ysboiw.jpg",
      "https://res.cloudinary.com/djfnmztu9/image/upload/w_300,h_300,c_fill/v1733632529/prod_3_ysboiw.jpg"
    ],
    specs: {
      "Capacity": "528 eggs",
      "Temperature Range": "35-38°C",
      "Power Source": "Electricity",
      "Humidity Control": "Manual",
      "Display": "Digital LED",
    },
  },
  {
    id: 3,
    name: "SmartHatch Elite",
    images: [
      "https://res.cloudinary.com/djfnmztu9/image/upload//w_300,h_300,c_fill/v1733632530/prod_4_ledkha.jpg",
      "https://res.cloudinary.com/djfnmztu9/image/upload//w_300,h_300,c_fill/v1733632530/prod_4_ledkha.jpg",
      "https://res.cloudinary.com/djfnmztu9/image/upload//w_300,h_300,c_fill/v1733632530/prod_4_ledkha.jpg"
    ],
    description: "Smart Electric incubator",
    price: 5200.00,
    specs: {
      "Capacity": "440 eggs",
      "Temperature Range": "35-39°C",
      "Power Source": "Electricity",
      "Humidity Control": "Manual",
      "Display": "Digital LED",
    },
  },
  {
    id: 4,
    name: "EcoHatch Pro",
    images: [
      "https://res.cloudinary.com/djfnmztu9/image/upload/w_300,h_300,c_fill/v1733634142/Picture5_kl5qcs.png",
      "https://res.cloudinary.com/djfnmztu9/image/upload/w_300,h_300,c_fill/v1733634143/Picture4_up67dv.png",
      "https://res.cloudinary.com/djfnmztu9/image/upload/w_300,h_300,c_fill/v1733634140/Picture3_gibylx.png"
    ],
    description: "Mid-range Electricity incubator for growing farms",
    price: 4500.00,
    specs: {
      "Capacity": "264 eggs",
      "Temperature Range": "35-38°C",
      "Power Source": "Electricity",
      "Humidity Control": "Manual",
      "Display": "Digital LED",
    },
  },
  {
    id: 5,
    name: "EcoHatch Basic-101",
    images: [
      "https://res.cloudinary.com/djfnmztu9/image/upload/w_300,h_300,c_fill/v1733632530/prod_2_olfsse.jpg",
      "https://res.cloudinary.com/djfnmztu9/image/upload/w_300,h_300,c_fill/v1733632530/prod_2_olfsse.jpg",
      "https://res.cloudinary.com/djfnmztu9/image/upload/w_300,h_300,c_fill/v1733632530/prod_2_olfsse.jpg"
    ],
    description: "Entry-level Electric incubator",
    price: 8000.00,
    specs: {
      "Capacity": "704 eggs",
      "Temperature Range": "35-38°C",
      "Power Source": "Electricity",
      "Humidity Control": "Manual",
      "Display": "Digital LED",
    },
  },
  {
    id: 6,
    name: "EcoHatch Track",
    images: [
      "https://res.cloudinary.com/djfnmztu9/image/upload/w_350,h_300,c_fill/v1733634144/Picture6_qiqytt.png",
      "https://res.cloudinary.com/djfnmztu9/image/upload/w_350,h_300,c_fill/v1733634143/Picture4_up67dv.png",
      "https://res.cloudinary.com/djfnmztu9/image/upload/w_350,h_300,c_fill/v1733634141/Picture8_fydnqd.png"
    ],
    // description: "Entry-level Electric incubator",
    description: "NOT AVAILABLE",
    price: .00,
    specs: {
      "Capacity": "120 eggs",
      "Temperature Range": "35-38°C",
      "Power Source": "Electricity",
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
                    className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
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
                    className="absolute top-4 right-4 z-50 text-gray-900 hover:text-gray-500 text-4xl"
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
                      className="flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
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
