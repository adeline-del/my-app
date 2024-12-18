

import { Facebook, Instagram, Phone, MessageSquare } from 'lucide-react';

export function Footer() {
  return (
<footer id="contact" className="bg-green-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              {/* Separate phone number links */}
              <a href="tel:+233543320377" className="flex items-center hover:text-yellow-500">
                <Phone className="h-5 w-5 mr-2" />
                +233 54 332 0377
              </a>
              <a href="tel:+233530735252" className="flex items-center hover:text-yellow-500">
                <Phone className="h-5 w-5 mr-2" />
                +233 53 073 5252
              </a>
              <a href="https://wa.me/+233543320377" className="flex items-center hover:text-yellow-500">
                <MessageSquare className="h-5 w-5 mr-2" />
                WhatsApp
              </a>
            </div> 
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Social Media</h3>
            <div className="space-y-2">
              <a href="https://facebook.com/eggcelenthatcheriesgh" className="flex items-center hover:text-yellow-500">
                <Facebook className="h-5 w-5 mr-2" />
                Facebook
              </a>
              <a href="https://instagram.com/eggcelenthatcheriesgh" className="flex items-center hover:text-yellow-500">
                <Instagram className="h-5 w-5 mr-2" />
                Instagram
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Address</h3>
            {/* Link the address to Google Maps */}
            <a href="https://www.google.com/maps?q=Techiman,+Ghana" className="hover:text-yellow-500">
              Techiman, Ghana
            </a>
            <p className="mt-2">
              {/* Link the digital address to Ghana Post GPS */}
              <a href="https://address.gps.gov.gh/?q=Coming%20Soon" className="hover:text-yellow-500">
                Digital Address: Coming Soon
              </a>
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
            <p>Monday - Friday: 8 AM - 5 PM</p>
            <p>Saturday: 9 AM - 3 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Eggcelent Hatcheries Ghana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
