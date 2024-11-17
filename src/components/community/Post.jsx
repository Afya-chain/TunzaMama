// src/components/community/Post.jsx
import React from 'react';
import { MessageSquare, Heart, Share2, Award } from 'lucide-react';

const UserBadge = ({ type }) => {
  const badges = {
    verified: { icon: Award, text: 'Verified Mom', color: 'text-blue-600 bg-blue-50' },
    expert: { icon: Award, text: 'Expert', color: 'text-purple-600 bg-purple-50' }
  };

  const Badge = badges[type];
  
  return Badge ? (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${Badge.color}`}>
      <Badge.icon className="w-3 h-3 mr-1" />
      {Badge.text}
    </span>
  ) : null;
};

const Post = ({ 
  user, 
  userType,
  timeAgo, 
  content, 
  likes, 
  comments, 
  shares,
  image 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-4">
      {/* Post Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
            <span className="text-xl">👩</span>
          </div>
          <div className="ml-3">
            <div className="flex items-center">
              <h3 className="font-semibold text-gray-800">{user}</h3>
              {userType && (
                <div className="ml-2">
                  <UserBadge type={userType} />
                </div>
              )}
            </div>
            <p className="text-sm text-gray-500">{timeAgo}</p>
          </div>
        </div>
      </div>

      {/* Post Content */}
      <div className="mb-4">
        <p className="text-gray-700">{content}</p>
        {image && (
          <img 
            src={image} 
            alt="Post" 
            className="mt-4 rounded-lg w-full object-cover"
          />
        )}
      </div>

      {/* Engagement Stats */}
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <span>{likes} likes</span>
        <span className="mx-2">•</span>
        <span>{comments} comments</span>
        <span className="mx-2">•</span>
        <span>{shares} shares</span>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-4 pt-4 border-t">
        <button className="flex items-center text-gray-600 hover:text-purple-600">
          <Heart className="w-5 h-5 mr-2" />
          Like
        </button>
        <button className="flex items-center text-gray-600 hover:text-purple-600">
          <MessageSquare className="w-5 h-5 mr-2" />
          Comment
        </button>
        <button className="flex items-center text-gray-600 hover:text-purple-600">
          <Share2 className="w-5 h-5 mr-2" />
          Share
        </button>
      </div>
    </div>
  );
};

export default Post;