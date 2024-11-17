import { Bell, Menu, User } from 'lucide-react';
import { Button } from '../shared/Button';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-purple-600">TunzaMama</h1>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'My Pregnancy', 'Health Records', 'Community', 'Emergency'].map((item) => (
              <Button 
                key={item}
                variant="secondary"
                className="text-gray-500 hover:text-purple-600"
              >
                {item}
              </Button>
            ))}
          </nav>
          
          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-400 hover:text-purple-600">
              <Bell className="h-6 w-6" />
            </button>
            <button className="text-gray-400 hover:text-purple-600">
              <User className="h-6 w-6" />
            </button>
            <button className="md:hidden text-gray-400 hover:text-purple-600">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
