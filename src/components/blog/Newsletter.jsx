import { useState } from 'react';
import Section from '../common/Section';
import Container from '../common/Container';
import Button from '../common/Button';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setSubscribed(true);
    
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 5000);
  };

  return (
    <Section className="bg-[#f7f6fb]">
      <Container>
        <div className="max-w-2xl mx-auto text-center bg-white border border-gray-100 rounded-2xl p-10">
          {!subscribed ? (
            <>
              <h2 className="text-2xl font-bold text-[#0f0d1a] mb-4">
                Stay ahead of the curve
              </h2>
              <p className="text-sm text-gray-500 mb-8 leading-relaxed">
                Join 5,000+ digital leaders who receive our weekly deep-dives into the future of tech and design.
              </p>
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError('');
                      }}
                      placeholder="Enter your email"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        error ? 'border-red-300 focus:ring-red-500' : 'border-gray-200 focus:ring-[#6c47ff]'
                      } text-sm focus:outline-none focus:ring-2 transition-colors`}
                    />
                    {error && (
                      <p className="text-xs text-red-600 mt-2 text-left">{error}</p>
                    )}
                  </div>
                  <Button variant="primary" className="px-6 py-3">
                    Subscribe
                  </Button>
                </div>
              </form>
            </>
          ) : (
            <div className="py-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0f0d1a] mb-2">
                Successfully Subscribed!
              </h3>
              <p className="text-sm text-gray-600">
                Thank you for subscribing. Check your inbox for a confirmation email.
              </p>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
