import { Calendar, Clock, User } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogCardProps {
  blog: BlogPost;
  onClick: () => void;
}

export default function BlogCard({ blog ,onClick }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={blog.image_url}
          alt={blog.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center space-x-1">
            <User className="w-4 h-4" />
            <span>{blog.author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(blog.date)}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{blog.read_time} min read</span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
          {blog.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {blog.excerpt}
        </p>
        <button onClick={onClick}  className="text-emerald-600 hover:text-emerald-700 font-semibold transition">
          Read More →
        </button>
      </div>
    </div>
  );
}
