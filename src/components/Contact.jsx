import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSent, setFormSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to a server

    // Simulate form submission
    setFormSent(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setTimeout(() => setFormSent(false), 3000); // Reset the success message after 3 seconds
  };

  return (
    <div className=" bg-gray-700 min-h-screen py-10">
      <div className="max-w-lg mx-auto bg-gray-700 p-6 rounded-lg shadow-lg">
        <center>
          <h2 className="text-2xl text-white font-bold mb-4">Contact Us</h2>
        </center>
        {formSent && (
          <div className="mb-4 text-green-500">
            <p>Your message has been sent successfully!</p>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-white  text-lg font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-white text-lg font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-white text-lg font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
