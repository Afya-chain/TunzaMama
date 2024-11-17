// src/components/community/CommunityContainer.jsx
import React from 'react';
import GroupList from './GroupList.jsx';
import PopularTopics from './PopularTopics.jsx';
import CreatePost from './CreatePost.jsx';
import Post from './Post.jsx';
import OnlineExperts from './OnlineExperts.jsx';

const mockPosts = [
  {
    user: 'Sarah Johnson',
    userType: 'verified',
    timeAgo: 'Posted 2 hours ago',
    content: 'Tips that helped me with morning sickness: Ginger tea first thing in the morning, small frequent meals, and keeping crackers by the bedside. What worked for you?',
    likes: 15,
    comments: 8,
    shares: 3
  },
  {
    user: 'Dr. James Miller',
    userType: 'expert',
    timeAgo: 'Posted 5 hours ago',
    content: 'Important reminder: Regular prenatal checkups are crucial for monitoring both mother and baby\'s health. Here are key things to discuss with your healthcare provider during your next visit...',
    likes: 32,
    comments: 12,
    shares: 20
  }
];

const CommunityContainer = () => {
  return (
    <div className="flex gap-8">
      {/* Left Sidebar */}
      <div className="w-64 space-y-6">
        <GroupList />
        <PopularTopics />
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <CreatePost />
        {mockPosts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </div>

      {/* Right Sidebar */}
      <div className="w-80">
        <OnlineExperts />
      </div>
    </div>
  );
};

export default CommunityContainer;