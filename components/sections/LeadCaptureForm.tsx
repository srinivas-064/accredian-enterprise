'use client';

import React, { useState } from 'react';

export default function LeadCaptureForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    jobTitle: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for the field being edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        jobTitle: '',
        phone: '',
        message: ''
      });
    } catch (err: any) {
      setSubmitError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#1B3B7D] to-[#0f2654]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          
          {/* Left Column - CTA Content */}
          <div className="mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Workforce?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Take the first step towards building a future-ready team. Our experts will create a customized training roadmap tailored to your organization's needs.
            </p>
            
            <ul className="space-y-4 mb-8">
              {['Free skill gap assessment', 'Customized training roadmap', 'Dedicated program manager'].map((item, index) => (
                <li key={index} className="flex items-center text-gray-200">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 flex items-center justify-center mr-3">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="flex items-center text-gray-400 text-sm">
              <span className="mr-2">🔒</span>
              Your information is secure and confidential
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                    <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank you!</h3>
                  <p className="text-gray-600 mb-8">
                    Your inquiry has been received. Our team will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="w-full bg-gray-100 text-gray-800 font-semibold py-3 px-4 rounded-xl hover:bg-gray-200 transition-colors"
                  >
                    Submit Another
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                  
                  {submitError && (
                    <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl text-sm">
                      {submitError}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500' : 'border-gray-200'} bg-gray-50 focus:border-[#1B3B7D] focus:ring-2 focus:ring-[#1B3B7D]/20 focus:bg-white transition-all duration-200 text-gray-900`}
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Work Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl border ${errors.email ? 'border-red-500' : 'border-gray-200'} bg-gray-50 focus:border-[#1B3B7D] focus:ring-2 focus:ring-[#1B3B7D]/20 focus:bg-white transition-all duration-200 text-gray-900`}
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          Company Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl border ${errors.company ? 'border-red-500' : 'border-gray-200'} bg-gray-50 focus:border-[#1B3B7D] focus:ring-2 focus:ring-[#1B3B7D]/20 focus:bg-white transition-all duration-200 text-gray-900`}
                        />
                        {errors.company && <p className="mt-1 text-sm text-red-500">{errors.company}</p>}
                      </div>

                      <div>
                        <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
                          Job Title
                        </label>
                        <input
                          type="text"
                          id="jobTitle"
                          name="jobTitle"
                          value={formData.jobTitle}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:border-[#1B3B7D] focus:ring-2 focus:ring-[#1B3B7D]/20 focus:bg-white transition-all duration-200 text-gray-900"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:border-[#1B3B7D] focus:ring-2 focus:ring-[#1B3B7D]/20 focus:bg-white transition-all duration-200 text-gray-900"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message / Training Requirements
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:border-[#1B3B7D] focus:ring-2 focus:ring-[#1B3B7D]/20 focus:bg-white transition-all duration-200 text-gray-900 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-[#F97316] to-orange-400 text-white font-semibold py-3 px-4 rounded-xl hover:brightness-110 hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        'Submit Inquiry'
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
