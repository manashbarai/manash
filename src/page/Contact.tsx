import React, { useState } from "react";
import { IoIosMailUnread } from "react-icons/io";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send form data to an API or email service)
  };

  return (
    <div className=" text-white text-center h-[100vh] flex flex-col justify-center w-1/2 m-auto relative">
      <h2 className="text-3xl font-bold text-zinc-500 ">Contact</h2>
      <p className="mt-2">
        Get in touch with me if you want to discuss a project or maybe just say
        hi :)
      </p>
      <form onSubmit={handleSubmit} className=" mx-auto mt-8  w-full">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 mb-4 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-600"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 mb-4 bg-zinc-800 text-white rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-zinc-600"
          required
        />
        <button
          type="submit"
          className="w-full p-3 bg-zinc-500 text-black font-bold rounded-md hover:bg-zinc-300 transition duration-200"
        >
          SEND
        </button>
      </form>

      <div className="absolute bottom-0 text-xs flex gap-2">
        <p className="">or reach me at</p>
        <a
          href="mailto:hello@nirnejak.com"
          className="text-zinc-400 hover:text-zinc-300 transition duration-200"
        >
          🔺 hello@nirnejak.com
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
