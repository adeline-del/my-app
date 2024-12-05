// import React from 'react';
import { Facebook, Instagram, Phone, MessageSquare } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <a href="tel:+233241234567" className="flex items-center hover:text-yellow-500">
                <Phone className="h-5 w-5 mr-2" />
                +233 24 123 4567
              </a>
              <a href="https://wa.me/233202647141" className="flex items-center hover:text-yellow-500">
                <MessageSquare className="h-5 w-5 mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Social Media</h3>
            <div className="space-y-2">
              <a href="https://facebook.com/solarhatchgh" className="flex items-center hover:text-yellow-500">
                <Facebook className="h-5 w-5 mr-2" />
                Facebook
              </a>
              <a href="https://instagram.com/solarhatchgh" className="flex items-center hover:text-yellow-500">
                <Instagram className="h-5 w-5 mr-2" />
                Instagram
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Address</h3>
            <p>15 Solar Street</p>
            <p>East Legon</p>
            <p>Accra, Ghana</p>
            <p className="mt-2">Digital Address: GA-123-4567</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
            <p>Monday - Friday: 8AM - 5PM</p>
            <p>Saturday: 9AM - 3PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} SolarHatch Ghana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}