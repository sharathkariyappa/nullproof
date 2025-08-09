import React, { useState } from 'react';
import {
  Home, TrendingUp, Wallet, Settings, Users, BarChart3, Zap,
  Shield, Sparkles
} from 'lucide-react';

const Sidebar = ({ activeItem, setActiveItem, theme }) => {
    const sidebarItems = [
      { id: 'dashboard', label: 'Dashboard', icon: Home },
      { id: 'portfolio', label: 'Portfolio', icon: TrendingUp },
      { id: 'wallet', label: 'Wallet', icon: Wallet },
      { id: 'staking', label: 'Staking', icon: Zap },
      { id: 'analytics', label: 'Analytics', icon: BarChart3 },
      { id: 'governance', label: 'Governance', icon: Users },
      { id: 'security', label: 'Security', icon: Shield },
      { id: 'settings', label: 'Settings', icon: Settings },
    ];
  
    return (
      <div className="fixed left-0 top-0 h-full w-64 backdrop-blur-xl border-r z-50" style={{
        background: theme.glass,
        borderRight: `1px solid ${theme.glassBorder}`,
        boxShadow: theme.shadow
      }}>
        {/* Logo */}
        <div className="p-6 border-b" style={{ borderColor: theme.glassBorder }}>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{
              background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryDark})`,
              boxShadow: theme.glowShadow
            }}>
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-light" style={{
                background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryDark})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>NullProof</h1>
              <p className="text-xs" style={{ opacity: 0.6 }}>Web3 Dashboard</p>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                  isActive ? 'text-white' : 'hover:text-white'
                }`}
                style={isActive ? {
                  background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryDark})`,
                  boxShadow: `${theme.shadow}, ${theme.glowShadow}`,
                  transform: 'translateY(-1px)'
                } : {}}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'group-hover:text-white'}`} style={{ opacity: isActive ? 1 : 0.7 }} />
                <span className={`font-light ${isActive ? 'text-white' : 'group-hover:text-white'}`} style={{ opacity: isActive ? 1 : 0.8 }}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    );
  };

  export default Sidebar;