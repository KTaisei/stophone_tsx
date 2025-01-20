import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import fs from 'fs';
import path from 'path';

type BlogPost = {
  id: string;
  title: string;
  date: string;
  readTime: string;
  content: string;
};

function Blog() {
  const [blogPosts, setBlogPosts] = useState<Record<string, BlogPost>>({});
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    function fetchBlogPosts() {
      const directoryPath = path.join(process.cwd(), 'blogs');
      const files = fs.readdirSync(directoryPath);
      const posts: Record<string, BlogPost> = {};

      files.forEach((file) => {
        if (file.endsWith('.md')) {
          const filePath = path.join(directoryPath, file);
          const content = fs.readFileSync(filePath, 'utf-8');
          const [metadata, body] = content.split('---\n').slice(1);
          const metaLines = metadata.split('\n');
          const meta: Partial<BlogPost> = {};

          metaLines.forEach((line) => {
            const [key, value] = line.split(':').map((s) => s.trim());
            if (key && value) {
              (meta as any)[key] = value;
            }
          });

          if (meta.id && meta.title && meta.date && meta.readTime) {
            posts[meta.id] = {
              id: meta.id,
              title: meta.title,
              date: meta.date,
              readTime: meta.readTime,
              content: body,
            };
          }
        }
      });

      setBlogPosts(posts);
      if (id) {
        setPost(posts[id] || null);
      }
    }

    fetchBlogPosts();
  }, [id]);

  if (!id || !post) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">ブログ記事一覧</h1>
          <div className="max-w-4xl mx-auto space-y-8">
            {Object.entries(blogPosts).map(([postId, post]) => (
              <Link
                key={postId}
                to={`/blog/${postId}`}
                className="block bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h2>
                <div className="flex items-center gap-4 text-gray-600">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
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
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
                <div className="flex items-center gap-4 text-gray-600">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
              </header>
              
              <div className="prose prose-blue max-w-none">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Blog;
