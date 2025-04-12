import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/messages', {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });
      toast.success(response.data.message || 'Message sent successfully', {
        position: 'top-right',
        autoClose: 3000,
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      toast.error(err.response?.data?.error || 'Something went wrong', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-50 py-12 md:py-20 px-6 md:px-20 flex justify-center items-center"
    >
      <div className="max-w-7xl w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
          Contact Me
        </h2>

        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-lg font-semibold text-gray-800 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Your full name"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-semibold text-gray-800 mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Your email address"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-semibold text-gray-800 mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              placeholder="Your message"
              rows="6"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-amber-500 text-white px-6 py-3 rounded-md shadow hover:bg-amber-600 transition hover:cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
