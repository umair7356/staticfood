import { ArrowLeft } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogDetailPageProps {
  blog: BlogPost;
  onBackClick: () => void;
}

export default function BlogDetailPage({ blog, onBackClick }: BlogDetailPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-72 overflow-hidden">
        <img
          src={blog.image_url}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t   from-black/70 via-black/30 to-transparent" />
        <button
          onClick={onBackClick}
          className="absolute top-4 left-4 flex items-center top-1/2 space-x-2 text-white hover:text-emerald-300 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">{blog.title}</h1>
        <h1 className="text-xl font-base text-gray-900 mb-1">Author : {blog.author}</h1>
        <h1 className="text-xl font-base text-gray-900 mb-6">Date :{blog.date}</h1>
        <p className="text-gray-600 mb-8">{blog.excerpt}</p>
        <div className="prose max-w-none">
          <p className="text-gray-600">{blog.content}</p>
          <p className="text-gray-600 mt-3">{blog.content1}</p>
          <p className="text-gray-600 mt-3">{blog.content2}</p>
          <p className="text-gray-600 mt-3">{blog.content3}</p>
          <p className="text-gray-600 mt-3">{blog.content4}</p>
          <p className="text-gray-600 mt-3">{blog.content5}</p>
          <p className="text-gray-600 mt-3">{blog.content6}</p>
          <p className="text-gray-600 mt-3">{blog.content7}</p>
        </div>
      </div>
    </div>
   
  );
}
