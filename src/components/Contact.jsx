"use client";
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Contact = () => {
      const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    
    toast.success("Message sent successfully!")

    setForm({ name: "", email: "", message: "" });
  };


    return (
        <>
        <div className="max-w-7xl mx-auto px-4 py-12">

      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">
          Contact Us
        </h1>
        <p className="text-gray-500 mt-2">
          Have questions? We'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">

        {/* 📌 Contact Info */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-700">
              Get in Touch
            </h2>
            <p className="text-gray-500 mt-2">
              Reach out to us for any queries about our tile collection.
            </p>
          </div>

          <div className="space-y-3 text-gray-600">
            <p>📧 Email: support@tilesgallery.com</p>
            <p>📞 Phone: +880 1234-567890</p>
            <p>📍 Location: Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* 📩 Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md space-y-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#198c19]"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#198c19]"
            required
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#198c19]"
            required
          />

          <button
            type="submit"
            className="w-full bg-[#198c19] hover:bg-[#157515] text-white py-3 rounded transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
        </>
    );
};

export default Contact;