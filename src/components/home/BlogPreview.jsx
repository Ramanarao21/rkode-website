import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Section from '../common/Section';
import Container from '../common/Container';
import BlogCard from '../common/BlogCard';
import blogService from '../../services/blogService';

export default function BlogPreview() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const result = await blogService.getAllBlogs();
    if (result.success) {
      setBlogs(result.data.slice(0, 3));
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <Section id="blog" className="bg-white">
        <Container>
          <div className="text-center py-12">
            <p className="text-gray-500">Loading blogs...</p>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section id="blog" className="bg-white">
      <Container>
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-semibold tracking-widest text-[#6c47ff] uppercase mb-3">
              Insights & Ideas
            </p>
            <h2 className="text-3xl font-bold text-[#0f0d1a]">Latest Insights</h2>
          </div>
          <Link
            to="/blog"
            className="hidden sm:inline-flex text-sm font-medium text-[#6c47ff] hover:underline"
          >
            View All Posts →
          </Link>
        </div>

        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                id={blog.id}
                category={blog.category}
                title={blog.title}
                excerpt={blogService.truncateContent(blog.content)}
                image={blog.image}
                date={new Date(blog.createdAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
                author={blog.author}
                readTime={blog.readTime}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No blogs available</p>
          </div>
        )}

        <Link
          to="/blog"
          className="sm:hidden inline-flex text-sm font-medium text-[#6c47ff] hover:underline mt-8"
        >
          View All Posts →
        </Link>
      </Container>
    </Section>
  );
}
