import { useState } from 'react';
import { Button } from '../buttons';
import RequiredIcon from '../css/requiredIcon';
import InputBox from '../css/inputBox';

const Contact = () => {
  const [form, setForm] = useState({
    fullName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [confirmation, setConfirmation] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const isFormValid = form.fullName && form.lastName && form.email && form.phone;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <section className="mt-8 py-12 max-w-xl mx-auto text-white rounded-xl p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-white text-center">Contact Us</h2>
      <form className="space-y-4" onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
          const response = await fetch('/api/contactForm', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          setForm({
            fullName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
          });
          setConfirmation('Message sent!');
          setTimeout(() => setConfirmation(''), 5000);
          setLoading(false);
        } catch (error) {
          console.error('Failed to send email:', error  );
          setError(`Failed to send message: ${error instanceof Error ? error.message : 'Oppsie, IDK what this is! Have fun :3'}`);
          setLoading(false);
        }
      }}>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="fullName" className={`block text-sm font-medium mb-1 ${RequiredIcon}`}>
              First name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              value={form.fullName}
              onChange={handleChange}
              className={InputBox}
              placeholder="John"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="lastName" className={`block text-sm font-medium mb-1 ${RequiredIcon}`}>
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={form.lastName}
              onChange={handleChange}
              className={InputBox}
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="email" className={`block text-sm font-medium mb-1 ${RequiredIcon}`}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className={InputBox}
              placeholder="you@example.com"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="phone" className={`block text-sm font-medium mb-1 ${RequiredIcon}`}>
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              className={InputBox}
              placeholder="(123) 456-7890"
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Additional Information
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className={InputBox}
            placeholder="Let us know how we can help..."
          />
        </div>
        <div className="pt-4">
          <Button size="large" buttonType="primary" className="w-full" isDisabled={!isFormValid} isLoading={loading}>
            {loading ? 'Sending...' : 'Submit'}
          </Button>
          {confirmation && (
            <p className="text-green-400 text-center mt-2">{confirmation}</p>
          )}
          {error && (
            <p className="text-red-400 text-center mt-2">{error}</p>
          )}
        </div>
      </form>
    </section>
  );
};

export default Contact;