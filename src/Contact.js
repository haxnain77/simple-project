import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (Not really, this is just frontend)');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', marginTop: '40px' }}>
      <h2>Contact Us</h2>
      <p>You can also email us directly at: <strong>ownstore3078@gmail.com</strong></p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows="5"
          style={{ width: '100%', padding: '8px', marginBottom: '12px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
