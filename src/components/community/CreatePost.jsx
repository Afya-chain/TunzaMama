// src/components/community/CreatePost.jsx
import React from 'react';
import { Image, Hash } from 'lucide-react';

const CreatePost = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Share Your Experience</h2>
      <div className="flex items-start space-x-4">
        <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
          <span className="text-xl">👩</span>
        </div>
        <div className="flex-1">
          <textarea
            className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-200 focus:border-purple-500 resize-none"
            placeholder="What's on your mind?"
            rows="3"
          />
          <div className="flex items-center justify-between mt-4">
            <div className="flex space-x-2">
              <button className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <Image className="w-5 h-5 mr-2" />
                Photo
              </button>
              <button className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <Hash className="w-5 h-5 mr-2" />
                Topic
              </button>
            </div>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;