"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigationbar from '@/components/Navigationbar/Navigationbar';
import Footer from '@/components/Footer/footer';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    consent: false,
  });

  const [status, setStatus] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      access_key: 'b7bb07a7-b027-47c3-8bea-be0f419ba1fd',
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      consent: formData.consent ? 'Yes' : 'No',
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('Message sent successfully');
        setFormData({ name: '', phone: '', email: '', consent: false });
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 5000);
      } else {
        setStatus(result.message || 'Failed to send message');
      }
    } catch (error) {
      setStatus('An unexpected error occurred');
    }
  };

  return (
    <main>
      <Navigationbar />
      <div className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(../Images/BG/Contact-US.jpg)', backgroundAttachment: 'fixed' }}
        />
        <div className="relative z-5 flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="w-full max-w-5xl p-8 bg-white bg-opacity-0 rounded-lg">
            <h2 className="text-center text-2xl font-semibold mb-4">
              Get in Touch with SpliXtech
              <br />
              We&apos;re here to help with your web, software, mobile, and AI/ML needs. Reach out to us for innovative solutions and outstanding support. <span className="italic">Thank You</span> 👍
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 text-gray-900"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 text-gray-900"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 text-gray-900"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span className="text-sm text-white">
                  I&apos;d like to receive notifications and offers from SpliXtech and consent to the privacy policy.
                </span>
              </div>

              <div className="flex justify-center space-x-4">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none"
                >
                  Contact Us
                </button>
              </div>

              {status && <p className="text-center text-lg mt-4">{status}</p>}
            </form>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <motion.div
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.9 }}
              className="w-16 h-16 mx-auto mb-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="green" className="w-16 h-16">
                <path fillRule="evenodd" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM9.293 16.293l-3.293-3.293 1.414-1.414L9.293 13.293l5.293-5.293 1.414 1.414-6.707 6.707z" />
              </svg>
            </motion.div>
            <h3 className="text-lg text-black font-semibold text-center">Message Sent Successfully!</h3>
            <p className="text-center text-black mt-2">The SpliXtech team will contact you as soon as possible. Thank you!</p>
          </motion.div>
        </div>
      )}

      <Footer />
    </main>
  );
};

export default Contact;
