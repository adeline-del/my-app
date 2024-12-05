import React from 'react';
import { useCart } from '../context/CartContext';
import { formatGhanaCedis } from '../utils/currency';
import { GHANA_REGIONS } from '../utils/currency';
import type { ShippingDetails } from '../types';

export function Checkout() {
  const { state, dispatch } = useCart();
  const [shippingDetails, setShippingDetails] = React.useState<ShippingDetails>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    region: '',
    digitalAddress: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // I have to integrate a payment processor here
    alert('Order placed successfully! Thank you for your purchase. Our team will contact you shortly.');
    dispatch({ type: 'CLEAR_CART' });
    window.location.href = '#';
  };

  if (state.items.length === 0) {
    return null;
  }

  return (
    <section id="checkout" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Checkout</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            {state.items.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-2">
                <span>{item.name} x {item.quantity}</span>
                <span className="font-semibold">{formatGhanaCedis(item.price * item.quantity)}</span>
              </div>
            ))}
            <div className="border-t mt-4 pt-4">
              <div className="flex justify-between text-xl font-bold">
                <span>Total:</span>
                <span>{formatGhanaCedis(state.total)}</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                required
                placeholder="Enter your full name" 
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200"
                value={shippingDetails.fullName}
                onChange={(e) => setShippingDetails(prev => ({ ...prev, fullName: e.target.value }))}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  required
                  placeholder="Enter your full name" 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200"
                  value={shippingDetails.email}
                  onChange={(e) => setShippingDetails(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g., 024 123 4567"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200"
                  value={shippingDetails.phone}
                  onChange={(e) => setShippingDetails(prev => ({ ...prev, phone: e.target.value }))}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Delivery Address</label>
              <input
                id="fullName"
                type="text"
                required
                placeholder="Enter your full name" 
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200"
                value={shippingDetails.address}
                onChange={(e) => setShippingDetails(prev => ({ ...prev, address: e.target.value }))}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <input
                  id="city"
                  type="text"
                  required
                  placeholder="Enter your full name" 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200"
                  value={shippingDetails.city}
                  onChange={(e) => setShippingDetails(prev => ({ ...prev, city: e.target.value }))}
                />
              </div>
              
              <div>
                <label htmlFor="region" className="block text-sm font-medium text-gray-700">Region</label>
                <select
                  id="region"
                  required
                  // cbrd
                  title="Select your region in Ghana" 
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200"
                  value={shippingDetails.region}
                  onChange={(e) => setShippingDetails(prev => ({ ...prev, region: e.target.value }))}
                >
                  <option value="">Select Region</option>
                  {GHANA_REGIONS.map((region) => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="digitalAddress" className="block text-sm font-medium text-gray-700">Ghana Post Digital Address</label>
              <input
                id="digitalAddress"
                type="text"
                required
                placeholder="e.g., GA-123-4567"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200"
                value={shippingDetails.digitalAddress}
                onChange={(e) => setShippingDetails(prev => ({ ...prev, digitalAddress: e.target.value }))}
              />
            </div>

            <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
              <p className="text-sm text-gray-600">
                Delivery available across all regions in Ghana. Delivery time:
                <br />
                - Greater Accra: 1-2 business days
                <br />
                - Other regions: 3-5 business days
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors mt-8"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}