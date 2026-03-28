import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Container from '../components/common/Container';
import blogService from '../services/blogService';

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlog();
  }, [id]);

  const fetchBlog = async () => {
    setLoading(true);
    const result = await blogService.getBlogById(id);
    
    if (result.success) {
      setBlog(result.data);
    } else {
      setError(result.message);
    }
    
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white pt-32 pb-20">
        <Container>
          <div className="text-center py-20">
            <p className="text-gray-500">Loading blog...</p>
          </div>
        </Container>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-white pt-32 pb-20">
        <Container>
          <div className="text-center py-20">
            <p className="text-red-600 mb-4">{error || 'Blog not found'}</p>
            <Link
              to="/blog"
              className="text-[#6c47ff] hover:underline font-medium"
            >
              ← Back to Blog
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <main className="bg-white">
      <section className="bg-gradient-to-b from-[#f0ecff] to-white pt-32 pb-12">
        <Container>
          <Link
            to="/blog"
            className="inline-flex items-center text-sm font-medium text-[#6c47ff] hover:underline mb-6"
          >
            ← DIGITAL INSIGHTS
          </Link>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#0f0d1a] leading-tight mb-6">
              {blog.title}
            </h1>
            
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#6c47ff] flex items-center justify-center text-white font-semibold">
                  {blog.author.charAt(0)}
                </div>
                <span className="font-medium text-gray-700">{blog.author}</span>
              </div>
              <span>•</span>
              <span>
                {new Date(blog.createdAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
              <span>•</span>
              <span>{blog.readTime}</span>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl overflow-hidden mb-12">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-auto object-cover"
              />
            </div>

            <span className="inline-block px-4 py-1.5 bg-[#ede9ff] text-[#6c47ff] text-xs font-semibold tracking-widest uppercase rounded-full mb-8">
              {blog.category}
            </span>

            <article className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {blog.content}
              </div>
            </article>

            <div className="mt-16 pt-8 border-t border-gray-200">
              <Link
                to="/blog"
                className="inline-flex items-center text-sm font-medium text-[#6c47ff] hover:underline"
              >
                ← Back to all posts
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
