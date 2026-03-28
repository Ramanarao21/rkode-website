import { useState } from 'react';
import Section from '../common/Section';
import Container from '../common/Container';
import Button from '../common/Button';
import { contactMethods, enquiryTypes } from '../../data/contactInfo';
import formService from '../../services/formService';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    enquiryType: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    const result = await formService.submitContactForm(formData);

    if (result.success) {
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.',
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        enquiryType: '',
        message: '',
      });
    } else {
      setStatus({
        type: 'error',
        message: result.message || 'Failed to send message. Please try again.',
      });
    }

    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Section className="bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {status.message && (
                <div
                  className={`p-4 rounded-lg text-sm ${
                    status.type === 'success'
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Jane"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#f7f6fb] border border-transparent text-sm focus:outline-none focus:border-[#6c47ff] transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#f7f6fb] border border-transparent text-sm focus:outline-none focus:border-[#6c47ff] transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="jane@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#f7f6fb] border border-transparent text-sm focus:outline-none focus:border-[#6c47ff] transition-colors"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-2">
                  Enquiry Type
                </label>
                <select
                  name="enquiryType"
                  value={formData.enquiryType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#f7f6fb] border border-transparent text-sm focus:outline-none focus:border-[#6c47ff] transition-colors appearance-none cursor-pointer"
                  required
                >
                  <option value="">Select an option</option>
                  {enquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-600 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Tell us about your project goals and timeline..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-[#f7f6fb] border border-transparent text-sm focus:outline-none focus:border-[#6c47ff] transition-colors resize-none"
                  required
                />
              </div>

              <Button variant="primary" className="w-full py-3.5 text-base" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            {contactMethods.map((method) => {
              const IconComponent = method.icon;
              return (
                <div
                  key={method.id}
                  className="bg-[#f7f6fb] rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#6c47ff] flex-shrink-0">
                      <IconComponent className="text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#0f0d1a] mb-2">
                        {method.title}
                      </h3>
                      <p className="text-sm text-gray-700 mb-1">{method.primary}</p>
                      <p className="text-xs text-gray-600">{method.secondary}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
