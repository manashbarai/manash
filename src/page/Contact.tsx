import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send form data to an API or email service)
    console.log(formData);
  };

  return (
    <div style={{ backgroundColor: '#1a1a1a', padding: '2rem', color: '#fff', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Contact</h2>
      <p>Get in touch with me if you want to discuss a project or maybe just say hi :)</p>
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '2rem auto' }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          style={{ ...inputStyle, height: '100px' }}
          required
        />
        <button type="submit" style={buttonStyle}>
          SEND
        </button>
      </form>
      <p>or reach me at</p>
      <a href="mailto:hello@nirnejak.com" style={{ color: '#b0b0b0', textDecoration: 'none' }}>
        hello@nirnejak.com
      </a>
    </div>
  );
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.8rem',
  marginBottom: '1rem',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: '#2e2e2e',
  color: '#fff',
};

const buttonStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.8rem',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: '#f5f5f5',
  color: '#000',
  fontWeight: 'bold',
  cursor: 'pointer',
};

export default ContactForm;
