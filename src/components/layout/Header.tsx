import React, { useState } from 'react';
import { Bell, Search, User, ChevronDown, Moon, Sun } from 'lucide-react';

const Header = ({ isDarkMode, setIsDarkMode, theme }) => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
  
    return (
      <header className="sticky top-0 z-40 backdrop-blur-xl border-b p-4" style={{
        background: theme.glass,
        borderBottom: `1px solid ${theme.glassBorder}`,
        boxShadow: theme.shadow
      }}>
        <div className="flex items-center justify-between">
          {/* Search */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" style={{ opacity: 0.5 }} />
              <input
                type="text"
                placeholder="Search tokens, transactions, or addresses..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border transition-all backdrop-blur-sm"
                style={{
                  background: theme.cardBg,
                  border: `1px solid ${theme.border}`,
                  color: theme.foreground
                }}
              />
            </div>
          </div>
          
          {/* Header Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg transition-all hover:scale-105"
              style={{
                background: theme.glassBorder,
                color: theme.foreground
              }}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            {/* Notifications */}
            <button className="relative p-2 rounded-lg transition-all hover:scale-105" style={{ background: theme.glassBorder }}>
              <Bell className="w-5 h-5" style={{ opacity: 0.7 }} />
              <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full flex items-center justify-center" style={{ background: '#ef4444' }}>
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              </span>
            </button>
            
            {/* Profile */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-3 p-2 rounded-lg transition-all hover:scale-105"
                style={{ background: theme.glassBorder }}
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{
                  background: `linear-gradient(to right, ${theme.primary}, ${theme.accent})`
                }}>
                  <User className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium">0x742d35...4f8a</p>
                  <p className="text-xs" style={{ opacity: 0.6 }}>Connected</p>
                </div>
                <ChevronDown className="w-4 h-4" style={{ opacity: 0.5 }} />
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  };


  export default Header;