// components/ContactSection/index.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { db } from '../../components/firebase';
import { collection, addDoc } from 'firebase/firestore';

interface FormData {
  name: string;
  email: string;
  address: string;
  phone: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    address: '',
    phone: ''
  });
  const [status, setStatus] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // Add form data to Firestore
      await addDoc(collection(db, 'ContactForm'), formData);
      setStatus('Form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        address: '',
        phone: ''
      });
    } catch (error) {
      setStatus(`Error: ${(error as Error).message}`);
    }
  };

  return (
    <section id="contact" className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-indigo-600">Contact Us</h1>
        </header>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://images.pexels.com/photos/33999/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Contact Us Image"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 bg-white p-12 shadow-lg rounded-lg">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2">
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                <textarea
                  id="phone"
                  name="phone"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
              {status && <p className="text-center mt-4 text-gray-600">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
