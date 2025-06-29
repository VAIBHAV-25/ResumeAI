import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FileText, 
  User, 
  LogOut, 
  Home, 
  BarChart3,
  Brain,
  Sparkles,
  Zap,
  Activity
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-gray-900/95 backdrop-blur-xl border-b border-cyan-500/20 sticky top-0 z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gray-900 p-2 rounded-lg border border-cyan-500/30">
                <Brain className="h-6 w-6 text-cyan-400" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                ResumeAI
              </span>
              <span className="text-xs text-gray-400 -mt-1">Neural Powered</span>
            </div>
          </Link>
          
          <div className="flex items-center space-x-8">
            {user ? (
              <>
                {/* Navigation Links */}
                <div className="hidden md:flex items-center space-x-6">
                  <Link
                    to="/dashboard"
                    className="group flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-all duration-300"
                  >
                    <Home className="h-4 w-4 group-hover:animate-pulse" />
                    <span className="font-medium">Dashboard</span>
                  </Link>
                  <Link
                    to="/analyze"
                    className="group flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-300 hover:text-purple-400 hover:bg-gray-800/50 transition-all duration-300"
                  >
                    <BarChart3 className="h-4 w-4 group-hover:animate-pulse" />
                    <span className="font-medium">Analyze</span>
                  </Link>
                  <Link
                    to="/builder"
                    className="group flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-300 hover:text-emerald-400 hover:bg-gray-800/50 transition-all duration-300"
                  >
                    <FileText className="h-4 w-4 group-hover:animate-pulse" />
                    <span className="font-medium">Builder</span>
                  </Link>
                </div>

                {/* User Section */}
                <div className="flex items-center space-x-4">
                  <div className="hidden sm:flex items-center space-x-3 px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700/50">
                    <div className="relative">
                      <User className="h-5 w-5 text-cyan-400" />
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900 animate-pulse"></div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-white">{user.name}</span>
                      <span className="text-xs text-gray-400">Pro Member</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleLogout}
                    className="group flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-all duration-300 border border-gray-700/50 hover:border-red-500/30"
                  >
                    <LogOut className="h-4 w-4 group-hover:animate-pulse" />
                    <span className="text-sm font-medium">Logout</span>
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-gray-300 hover:text-cyan-400 transition-colors px-4 py-2 rounded-lg hover:bg-gray-800/50"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="group relative bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  <span className="relative z-10">Sign Up</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Animated border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
    </nav>
  );
};

export default Navbar;