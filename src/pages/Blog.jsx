import { useState, useEffect } from 'react';
import BlogHero from '../components/blog/BlogHero';
import BlogGrid from '../components/blog/BlogGrid';
import Newsletter from '../components/blog/Newsletter';
import blogService from '../services/blogService';
import { Helmet } from 'react-helmet-async';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const result = await blogService.getAllBlogs();
    if (result.success) {
      setBlogs(result.data);
    }
    setLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>Blog - RKODE LABS</title>
        <meta name="description" content="Stay updated with the latest insights, trends, and best practices in technology and digital innovation." />
      </Helmet>
      <main>
        <BlogHero />
        <BlogGrid blogs={blogs} loading={loading} />
        <Newsletter />
      </main>
    </>
  );
}
