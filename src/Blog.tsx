import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Post {
  id: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  content?: string;
}

interface PostMetadata {
  posts: Post[];
}

function Blog() {
  const { id } = useParams();
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPost, setCurrentPost] = useState<Post | null>(null);
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    // Load posts metadata
    fetch('/stophone_tsx/metadata.json')
      .then(res => res.json())
      .then((data: PostMetadata) => {
        setPosts(data.posts);
        if (id) {
          const post = data.posts.find(p => p.id === id);
          if (post) {
            setCurrentPost(post);
            // Load post content
            fetch(`/src/posts/${id}.md`)
              .then(res => res.text())
              .then(setContent);
          }
        }
      });
  }, [id]);

  if (!id) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">ブログ記事一覧</h1>
          <div className="max-w-4xl mx-auto space-y-8">
            {posts.map(post => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h2>
                <div className="flex items-center gap-4 text-gray-600 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
                <p className="text-gray-600">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
    );
  }

  if (!currentPost) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            記事一覧に戻る
          </Link>
          
          <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{currentPost.title}</h1>
                <div className="flex items-center gap-4 text-gray-600">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {currentPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {currentPost.readTime}
                  </span>
                </div>
              </header>
              
              <div className="prose prose-blue max-w-none">
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Blog;