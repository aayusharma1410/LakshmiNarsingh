import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
          <p className="mb-4">We'd love to hear from you. Please feel free to contact us with any questions or concerns.</p>
          <ul className="space-y-2">
            <li className="flex items-center">
              <MapPin className="mr-2" /> Shri Narsingh Mandir, Hasampur, Neem Ka Thana, Rajasthan, India<br></br>
              
            </li>
            <li className="flex items-center">
             <a href="https://maps.app.goo.gl/NmVaBt1KnF8oyxNQ9">Google Location</a>
            </li>
            <li className="flex items-center">
              <Phone className="mr-2" /> +91 8955672580
            </li>
            <li className="flex items-center">
              <Mail className="mr-2" /> shrinarsinghmandirhasampur@gmail.com
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Send us a Message</h3>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1">Name</label>
              <input type="text" id="name" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">Email</label>
              <input type="email" id="email" className="w-full p-2 border rounded" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea id="message" rows={4} className="w-full p-2 border rounded"></textarea>
            </div>
            <button type="submit" className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;