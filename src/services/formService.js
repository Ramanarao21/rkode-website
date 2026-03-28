import api from './api';

class FormService {
  async submitContactForm(formData) {
    try {
      console.log('Submitting form data:', formData);
      
      const response = await api.post('/api/forms', formData);
      
      console.log('Form submission successful:', response);
      
      return {
        success: true,
        data: response.data,
        message: response.message || 'Form submitted successfully',
      };
    } catch (error) {
      console.error('Form submission error:', error);
      
      return {
        success: false,
        message: error.message || 'Failed to submit form. Please try again.',
      };
    }
  }
}

export default new FormService();
