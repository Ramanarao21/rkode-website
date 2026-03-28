import { useState } from 'react';
import Section from '../common/Section';
import Container from '../common/Container';
import BlogCard from '../common/BlogCard';
import blogService from '../../services/blogService';

const categories = ['All', 'ENGINEERING', 'DESIGN', 'SUSTAINABILITY'];

export default function BlogGrid({ blogs, loading }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredBlogs = blogs.filter((blog) => {
    if (activeCategory === 'All') return true;
    return blog.category === activeCategory;
  });

  return (
    <Section className="bg-white">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-[#6c47ff] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Loading blogs...</p>
          </div>
        ) : filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog) => (
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
            <p className="text-gray-500">No blogs found in this category</p>
          </div>
        )}
      </Container>
    </Section>
  );
}
