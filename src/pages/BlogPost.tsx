import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { loadBlogPosts } from '../blog/utils/blogLoader';
import { BlogPost as BlogPostType } from '../types';
import { Calendar, ArrowLeft } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPostType | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      const posts = await loadBlogPosts();
      const currentPost = posts.find(p => p.slug === slug);
      if (currentPost) {
        setPost(currentPost);
      }
    };

    loadPost();
  }, [slug]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const BackButton = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link
        to="/blog"
        className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Blog
      </Link>
    </motion.div>
  );

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-24 bg-primary">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e')] bg-cover bg-center">
          <div className="absolute inset-0 bg-primary bg-opacity-90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-8"
            >
              {post.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex items-center justify-center text-white mb-8"
            >
              <Calendar className="h-5 w-5 mr-2" />
              <span>{formattedDate}</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl text-white max-w-3xl mx-auto"
            >
              {post.excerpt}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <BackButton />
          </div>
          <article className="bg-white rounded-lg shadow-lg p-8">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <style>{`
              .prose h1 {
                font-size: 2.5rem;
                color: #213555;
                text-align: center;
                margin-bottom: 2rem;
              }
              
              .prose h2 {
                font-size: 1.75rem;
                color: #3E5879;
                margin-top: 2.5rem;
                border-bottom: 3px solid #D8C4B6;
                padding-bottom: 0.5rem;
              }
              
              .prose p {
                color: #4a5568;
                margin-bottom: 1.5rem;
                line-height: 1.8;
              }

              .prose ul {
                background: #F5EFE7;
                padding: 1.5rem 2rem;
                border-radius: 0.5rem;
                margin: 1.5rem 0;
              }
              
              .prose li {
                margin: 0.75rem 0;
                color: #4a5568;
              }

              .prose li strong {
                color: #213555;
              }

              .prose .tip {
                background: #F5EFE7;
                padding: 1.5rem;
                border-left: 5px solid #213555;
                margin: 1.5rem 0;
                border-radius: 0.5rem;
                font-style: italic;
              }

              .prose .tip strong {
                color: #213555;
              }
              
              .prose .final-thoughts {
                font-size: 1.5rem;
                font-weight: bold;
                text-align: center;
                margin-top: 2.5rem;
                padding-top: 1.5rem;
                border-top: 3px solid #D8C4B6;
                color: #213555;
              }

              .prose .section-image {
                width: 100%;
                height: 300px;
                object-fit: cover;
                border-radius: 0.5rem;
                margin: 2rem 0;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
              }

              .prose .image-caption {
                text-align: center;
                font-size: 0.875rem;
                color: #666;
                margin-top: -1rem;
                margin-bottom: 2rem;
                font-style: italic;
              }
            `}</style>
          </article>
          <div className="mt-8">
            <BackButton />
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;