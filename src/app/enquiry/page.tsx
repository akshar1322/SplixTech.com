"use client";
import React, { useState } from "react";

import Navigationbar from "@/components/Navigationbar/Navigationbar";
import Footer from "@/components/Footer/footer";


const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    consent: false,
    whatsappAvailable: "no",
    whatsappNumber: "",
    currentWebsite: "",
    interest: "",
    foundUs: "",
    message: "",
    beverage: "" // added beverage field
  });

  const [status, setStatus] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLElement>) => {
    const { name, value, type } = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

    // Check if the type is checkbox to access the checked property
    const newValue = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      access_key: "b7bb07a7-b027-47c3-8bea-be0f419ba1fd",
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      consent: formData.consent ? "Yes" : "No",
      whatsappAvailable: formData.whatsappAvailable,
      whatsappNumber: formData.whatsappNumber,
      currentWebsite: formData.currentWebsite,
      interest: formData.interest,
      foundUs: formData.foundUs,
      message: formData.message,
      beverage: formData.beverage, // added beverage to the payload
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully");
        setFormData({
          name: "",
          phone: "",
          email: "",
          consent: false,
          whatsappAvailable: "no",
          whatsappNumber: "",
          currentWebsite: "",
          interest: "",
          foundUs: "",
          message: "",
          beverage: "" // reset beverage
        });
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 5000);
      } else {
        setStatus(result.message || "Failed to send message");
      }
    } catch (error) {
      setStatus("An unexpected error occurred");
    }
  };

  return (
    <main className="bg-transparent">
      <Navigationbar />
      <div className="relative h-full  ">
        <div
          className="absolute inset-0 bg-cover bg-white bg-center"
          style={{
            backgroundImage: "url(../Images/BG/Black.jpg)", // Indian-themed background
            backgroundAttachment: "fixed",
          }}
        />
        <div className="relative z-10 flex items-center justify-center h-full bg-white bg-opacity-60 backdrop-blur-lg">
          <div className="w-full max-w-5xl p-8 bg-transparent~ rounded-lg  ">
            <h1 className="text-3xl text-black font-bold text-center mb-4">
              Make Enquiry
            </h1>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Name, Email, Phone Fields */}
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-orange-500 text-gray-900"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-orange-500 text-gray-900"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-orange-500 text-gray-900"
                />
              </div>
              {/* Current Website Field */}
              <div>
                <input
                  type="text"
                  name="currentWebsite"
                  placeholder="Current Website"
                  value={formData.currentWebsite}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-orange-500 text-gray-900"
                />
              </div>
              {/* Interest Dropdown */}
              <div>
                <label className="block text-gray-800">What is your interest?</label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border text-black border-gray-300 rounded-full focus:outline-none focus:border-orange-500"
                >
                  <option value="">Select</option>
                  <option value="ecommerce">Ecommerce</option>
                  <option value="website-development">Website Development</option>
                  <option value="app-development">App Development</option>
                  <option value="domains-hosting">Domains and Hosting</option>
                  <option value="just-meet">Just Meet</option>
                  <option value="works-with-splix">Works with Splix</option>
                </select>
              </div>
              {/* Found Us Dropdown */}
              <div>
                <label className="block text-gray-800">Where did you find us?</label>
                <select
                  name="foundUs"
                  value={formData.foundUs}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border text-black border-gray-300 rounded-full focus:outline-none focus:border-orange-500"
                >
                  <option value="">Select</option>
                  <option value="google">Via Google</option>
                  <option value="friend">Via Friend</option>
                  <option value="ads">Via Ads</option>
                  <option value="recently-met">We have met recently</option>
                  <option value="suggestions">Via Suggestions</option>
                </select>
              </div>
              {/* Beverage Dropdown */}
              <div>
                <label className="block text-gray-800">Choose Your Beverage</label>
                <select
                  name="beverage"
                  value={formData.beverage}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border text-gray-900 border-gray-300 rounded-full focus:outline-none focus:border-orange-500"
                >
                  <option value="">Select</option>
                  <option value="masala-chai">Masala Chai</option>
                  <option value="kulhad-chai">Kulhad Chai</option>
                  <option value="coffee">Coffee</option>
                  <option value="bournvita">Bournvita</option>
                </select>
              </div>
              {/* Other Fields */}
              <div>
                <label className="block text-gray-800">WhatsApp Available?</label>
                <select
                  name="whatsappAvailable"
                  value={formData.whatsappAvailable}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border text-gray-900 border-gray-300 rounded-full focus:outline-none focus:border-orange-500"
                >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
              {formData.whatsappAvailable === "yes" && (
                <div>
                  <input
                    type="text"
                    name="whatsappNumber"
                    placeholder="Add your WhatsApp number"
                    value={formData.whatsappNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-orange-500 text-gray-900"
                  />
                </div>
              )}
              {/* Message Field */}
              <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange as React.ChangeEventHandler<HTMLTextAreaElement>} // cast to the correct type
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:border-orange-500 text-gray-900"
              />

              </div>

              <div className="flex justify-center space-x-4">
                <button
                  type="submit"
                  className="px-6 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 focus:outline-none"
                >
                  Submit
                </button>
              </div>
              {status && <p className="text-center text-lg mt-4">{status}</p>}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Contact;
