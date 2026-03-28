const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

class BlogService {
  async getAllBlogs() {
    try {
      const response = await fetch(`${API_BASE_URL}/api/blogs`);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch blogs');
      }
      
      return {
        success: true,
        data: data.data,
      };
    } catch (error) {
      console.error('Error fetching blogs:', error);
      return {
        success: false,
        message: error.message || 'Failed to fetch blogs',
        data: [],
      };
    }
  }

  async getBlogById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/blogs/${id}`);
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch blog');
      }
      
      return {
        success: true,
        data: data.data,
      };
    } catch (error) {
      console.error('Error fetching blog:', error);
      return {
        success: false,
        message: error.message || 'Failed to fetch blog',
        data: null,
      };
    }
  }

  truncateContent(content, maxLength = 150) {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength).trim() + '...';
  }
}

export default new BlogService();
