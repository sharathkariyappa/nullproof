import React, { useState } from 'react';
import {
  Home, TrendingUp, Wallet, Settings, Users, BarChart3, Zap,
  Shield, Bell, Search, User, ChevronDown, Moon, Sun, Activity,
  ArrowUpRight, ArrowDownRight, Eye, Copy, ExternalLink, Sparkles
} from 'lucide-react';

const Dashboard = () => {
  const [activeItem, setActiveItem] = useState('dashboard');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Theme configuration (unchanged)
  const themes = {
    dark: {
      background: 'hsl(220, 20%, 8%)',
      backgroundSecondary: 'hsl(220, 25%, 12%)',
      foreground: 'hsl(210, 40%, 98%)',
      glass: 'hsl(220, 20%, 15%, 0.8)',
      glassBorder: 'hsl(220, 30%, 25%, 0.5)',
      cardBg: 'hsl(220, 20%, 12%, 0.8)',
      primary: 'hsl(174, 100%, 39%)',
      primaryDark: 'hsl(174, 100%, 29%)',
      accent: 'hsl(270, 75%, 65%)',
      muted: 'hsl(220, 20%, 18%)',
      border: 'hsl(220, 30%, 25%)',
      gradientBg: `
        radial-gradient(circle at 20% 20%, hsl(174, 100%, 39%, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, hsl(270, 75%, 65%, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 50% 50%, hsl(220, 20%, 8%) 0%, hsl(220, 25%, 12%) 100%)
      `,
      shadow: '0 8px 32px hsl(220, 20%, 5%, 0.4)',
      glowShadow: '0 0 30px hsl(174, 100%, 65%, 0.3)'
    },
    light: {
      background: 'hsl(210, 40%, 98%)',
      backgroundSecondary: 'hsl(210, 40%, 95%)',
      foreground: 'hsl(220, 20%, 8%)',
      glass: 'hsl(210, 40%, 98%, 0.8)',
      glassBorder: 'hsl(220, 30%, 85%, 0.8)',
      cardBg: 'hsl(210, 40%, 98%, 0.9)',
      primary: 'hsl(174, 100%, 35%)',
      primaryDark: 'hsl(174, 100%, 25%)',
      accent: 'hsl(270, 75%, 55%)',
      muted: 'hsl(210, 15%, 90%)',
      border: 'hsl(220, 30%, 85%)',
      gradientBg: `
        radial-gradient(circle at 20% 20%, hsl(174, 100%, 39%, 0.08) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, hsl(270, 75%, 65%, 0.06) 0%, transparent 50%),
        linear-gradient(135deg, hsl(210, 40%, 98%) 0%, hsl(210, 40%, 95%) 100%)
      `,
      shadow: '0 8px 32px hsl(220, 20%, 80%, 0.3)',
      glowShadow: '0 0 30px hsl(174, 100%, 65%, 0.2)'
    }
  };
  const currentTheme = isDarkMode ? themes.dark : themes.light;

  // Sidebar items and static data — unchanged:
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
  const portfolioData = [
    { symbol: 'ETH', name: 'Ethereum', balance: '2.45', value: '$4,892.34', change: '+12.5%', positive: true },
    { symbol: 'BTC', name: 'Bitcoin', balance: '0.125', value: '$5,234.12', change: '+8.2%', positive: true },
    { symbol: 'MATIC', name: 'Polygon', balance: '1,234', value: '$987.65', change: '-3.1%', positive: false },
    { symbol: 'UNI', name: 'Uniswap', balance: '45.2', value: '$289.34', change: '+15.7%', positive: true },
  ];
  const recentTransactions = [
    { type: 'Swap', from: 'ETH', to: 'USDC', amount: '0.5 ETH', status: 'Completed', time: '2 min ago' },
    { type: 'Stake', token: 'MATIC', amount: '1,000 MATIC', status: 'Pending', time: '15 min ago' },
    { type: 'Transfer', token: 'BTC', amount: '0.01 BTC', status: 'Completed', time: '1 hour ago' },
    { type: 'Mint', token: 'NFT', amount: '1 NFT', status: 'Completed', time: '3 hours ago' },
  ];

  // Content renderers (fixed DashboardContent duplication)
  const DashboardContent = () => (
    <>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { title: 'Total Balance', value: '$12,345.67', change: '+12.34%', icon: Wallet, positive: true },
          { title: 'Active Positions', value: '8', change: '+2', icon: Activity, positive: true },
          { title: 'Staking Rewards', value: '$234.56', change: '+5.2%', icon: Zap, positive: true },
          { title: 'P&L (24h)', value: '$89.12', change: '-2.1%', icon: TrendingUp, positive: false }
        ].map((stat, index) => (
          <div
            key={index}
            className="rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer group backdrop-blur-xl"
            style={{
              background: currentTheme.cardBg,
              border: `1px solid ${currentTheme.glassBorder}`,
              boxShadow: currentTheme.shadow
            }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl" style={{ background: `${currentTheme.primary}20` }}>
                <stat.icon className="w-6 h-6" style={{ color: currentTheme.primary }} />
              </div>
              <div className={`flex items-center space-x-1 text-sm ${stat.positive ? 'text-green-400' : 'text-red-400'}`}>
                {stat.positive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                <span>{stat.change}</span>
              </div>
            </div>
            <div>
              <p className="text-2xl font-light mb-1">{stat.value}</p>
              <p className="text-sm" style={{ opacity: 0.6 }}>{stat.title}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Portfolio */}
        <div className="rounded-2xl p-6 backdrop-blur-xl" style={{
          background: currentTheme.cardBg,
          border: `1px solid ${currentTheme.glassBorder}`,
          boxShadow: currentTheme.shadow
        }}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-light">Portfolio</h3>
            <button className="transition-colors" style={{ color: currentTheme.primary }}>
              <Eye className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-4">
            {portfolioData.map((token, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-xl transition-all group cursor-pointer">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{
                    background: `linear-gradient(to right, ${currentTheme.primary}, ${currentTheme.accent})`
                  }}>
                    {token.symbol.slice(0, 2)}
                  </div>
                  <div>
                    <p className="font-medium">{token.symbol}</p>
                    <p className="text-sm" style={{ opacity: 0.6 }}>{token.name}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{token.value}</p>
                  <div className="flex items-center space-x-2">
                    <p className="text-sm" style={{ opacity: 0.6 }}>{token.balance}</p>
                    <span className={`text-sm ${token.positive ? 'text-green-400' : 'text-red-400'}`}>
                      {token.change}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Recent Transactions */}
        <div className="rounded-2xl p-6 backdrop-blur-xl" style={{
          background: currentTheme.cardBg,
          border: `1px solid ${currentTheme.glassBorder}`,
          boxShadow: currentTheme.shadow
        }}>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-light">Recent Transactions</h3>
            <button className="transition-colors" style={{ color: currentTheme.primary }}>
              <ExternalLink className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-4">
            {recentTransactions.map((tx, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-xl transition-all group cursor-pointer">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    tx.status === 'Completed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {tx.type === 'Swap' && <Activity className="w-5 h-5" />}
                    {tx.type === 'Stake' && <Zap className="w-5 h-5" />}
                    {tx.type === 'Transfer' && <ArrowUpRight className="w-5 h-5" />}
                    {tx.type === 'Mint' && <Sparkles className="w-5 h-5" />}
                  </div>
                  <div>
                    <p className="font-medium">{tx.type}</p>
                    <p className="text-sm" style={{ opacity: 0.6 }}>{tx.amount}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-medium ${
                    tx.status === 'Completed' ? 'text-green-400' : 'text-yellow-400'
                  }`}>
                    {tx.status}
                  </p>
                  <p className="text-xs" style={{ opacity: 0.6 }}>{tx.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  const PortfolioContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-light gradient-text" style={{
          background: 'linear-gradient(135deg, hsl(174, 100%, 39%), hsl(174, 100%, 29%))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>Portfolio Overview</h2>
        <button className="neuro-button px-6 py-3 rounded-xl text-white font-medium">
          Add Token
        </button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card rounded-2xl p-6" style={{
          background: 'hsl(220, 20%, 15%, 0.5)',
          backdropFilter: 'blur(16px)',
          border: '1px solid hsl(220, 30%, 25%, 0.3)',
          boxShadow: '0 8px 32px hsl(220, 20%, 5%, 0.3), inset 0 1px 0 hsl(220, 30%, 25%, 0.5)'
        }}>
          <h3 className="text-xl font-light mb-6">Token Holdings</h3>
          <div className="space-y-4">
            {portfolioData.map((token, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-xl hover:bg-glass/20 transition-all group cursor-pointer border border-transparent hover:border-primary/20">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center font-bold text-white">
                    {token.symbol.slice(0, 2)}
                  </div>
                  <div>
                    <p className="font-medium">{token.symbol}</p>
                    <p className="text-sm opacity-60">{token.name}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{token.value}</p>
                  <div className="flex items-center space-x-2">
                    <p className="text-sm opacity-60">{token.balance}</p>
                    <span className={`text-sm ${token.positive ? 'text-green-400' : 'text-red-400'}`}>
                      {token.change}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="glass-card rounded-2xl p-6" style={{
          background: 'hsl(220, 20%, 15%, 0.5)',
          backdropFilter: 'blur(16px)',
          border: '1px solid hsl(220, 30%, 25%, 0.3)',
          boxShadow: '0 8px 32px hsl(220, 20%, 5%, 0.3), inset 0 1px 0 hsl(220, 30%, 25%, 0.5)'
        }}>
          <h3 className="text-xl font-light mb-6">Quick Actions</h3>
          <div className="space-y-3">
            {['Buy Crypto', 'Sell Crypto', 'Swap Tokens', 'Send Crypto'].map((action, index) => (
              <button key={index} className="w-full p-3 rounded-xl border border-primary/20 hover:bg-primary/10 transition-all text-left">
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const WalletContent = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-light gradient-text" style={{
        background: 'linear-gradient(135deg, hsl(174, 100%, 39%), hsl(174, 100%, 29%))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>Wallet Management</h2>
      
      <div className="glass-card rounded-2xl p-6" style={{
        background: 'hsl(220, 20%, 15%, 0.5)',
        backdropFilter: 'blur(16px)',
        border: '1px solid hsl(220, 30%, 25%, 0.3)',
        boxShadow: '0 8px 32px hsl(220, 20%, 5%, 0.3), inset 0 1px 0 hsl(220, 30%, 25%, 0.5)'
      }}>
        <div className="flex items-center justify-between p-6 border border-primary/20 rounded-xl bg-primary/5">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
              <Wallet className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-medium">Connected Wallet</p>
              <p className="text-sm opacity-60">0x742d35Cc6134C0532925a3b8D4162000E4f8a</p>
            </div>
          </div>
          <button className="flex items-center space-x-2 text-primary hover:text-primary-dark">
            <Copy className="w-4 h-4" />
            <span>Copy</span>
          </button>
        </div>
      </div>
    </div>
  );

  const StakingContent = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-light gradient-text" style={{
        background: 'linear-gradient(135deg, hsl(174, 100%, 39%), hsl(174, 100%, 29%))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>Staking Pools</h2>
      <div className="glass-card rounded-2xl p-6" style={{
        background: 'hsl(220, 20%, 15%, 0.5)',
        backdropFilter: 'blur(16px)',
        border: '1px solid hsl(220, 30%, 25%, 0.3)',
        boxShadow: '0 8px 32px hsl(220, 20%, 5%, 0.3), inset 0 1px 0 hsl(220, 30%, 25%, 0.5)'
      }}>
        <p className="text-center py-12 opacity-60">Staking pools coming soon...</p>
      </div>
    </div>
  );

  const AnalyticsContent = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-light gradient-text" style={{
        background: 'linear-gradient(135deg, hsl(174, 100%, 39%), hsl(174, 100%, 29%))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>Analytics Dashboard</h2>
      <div className="glass-card rounded-2xl p-6" style={{
        background: 'hsl(220, 20%, 15%, 0.5)',
        backdropFilter: 'blur(16px)',
        border: '1px solid hsl(220, 30%, 25%, 0.3)',
        boxShadow: '0 8px 32px hsl(220, 20%, 5%, 0.3), inset 0 1px 0 hsl(220, 30%, 25%, 0.5)'
      }}>
        <p className="text-center py-12 opacity-60">Advanced analytics coming soon...</p>
      </div>
    </div>
  );

  const GovernanceContent = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-light gradient-text" style={{
        background: 'linear-gradient(135deg, hsl(174, 100%, 39%), hsl(174, 100%, 29%))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>Governance</h2>
      <div className="glass-card rounded-2xl p-6" style={{
        background: 'hsl(220, 20%, 15%, 0.5)',
        backdropFilter: 'blur(16px)',
        border: '1px solid hsl(220, 30%, 25%, 0.3)',
        boxShadow: '0 8px 32px hsl(220, 20%, 5%, 0.3), inset 0 1px 0 hsl(220, 30%, 25%, 0.5)'
      }}>
        <p className="text-center py-12 opacity-60">Governance proposals coming soon...</p>
      </div>
    </div>
  );

  const SecurityContent = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-light gradient-text" style={{
        background: 'linear-gradient(135deg, hsl(174, 100%, 39%), hsl(174, 100%, 29%))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>Security Settings</h2>
      <div className="glass-card rounded-2xl p-6" style={{
        background: 'hsl(220, 20%, 15%, 0.5)',
        backdropFilter: 'blur(16px)',
        border: '1px solid hsl(220, 30%, 25%, 0.3)',
        boxShadow: '0 8px 32px hsl(220, 20%, 5%, 0.3), inset 0 1px 0 hsl(220, 30%, 25%, 0.5)'
      }}>
        <p className="text-center py-12 opacity-60">Security features coming soon...</p>
      </div>
    </div>
  );

  const SettingsContent = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-light gradient-text" style={{
        background: 'linear-gradient(135deg, hsl(174, 100%, 39%), hsl(174, 100%, 29%))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>Settings</h2>
      <div className="glass-card rounded-2xl p-6" style={{
        background: 'hsl(220, 20%, 15%, 0.5)',
        backdropFilter: 'blur(16px)',
        border: '1px solid hsl(220, 30%, 25%, 0.3)',
        boxShadow: '0 8px 32px hsl(220, 20%, 5%, 0.3), inset 0 1px 0 hsl(220, 30%, 25%, 0.5)'
      }}>
        <p className="text-center py-12 opacity-60">Settings panel coming soon...</p>
      </div>
    </div>
  );

  // Render function
  const renderContent = () => {
    switch(activeItem) {
      case 'dashboard':
        return <DashboardContent />;
      case 'portfolio':
        return <PortfolioContent />;
      case 'wallet':
        return <WalletContent />;
      case 'staking':
        return <StakingContent />;
      case 'analytics':
        return <AnalyticsContent />;
      case 'governance':
        return <GovernanceContent />;
      case 'security':
        return <SecurityContent />;
      case 'settings':
        return <SettingsContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="min-h-screen text-foreground" style={{
      background: currentTheme.background,
      backgroundImage: currentTheme.gradientBg,
      color: currentTheme.foreground
    }}>
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 backdrop-blur-xl border-r z-50" style={{
        background: currentTheme.glass,
        borderRight: `1px solid ${currentTheme.glassBorder}`,
        boxShadow: currentTheme.shadow
      }}>
        {/* Logo */}
        <div className="p-6 border-b" style={{ borderColor: currentTheme.glassBorder }}>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{
              background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.primaryDark})`,
              boxShadow: currentTheme.glowShadow
            }}>
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-light" style={{
                background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.primaryDark})`,
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
                  isActive 
                    ? 'text-white' 
                    : 'hover:text-white'
                }`}
                style={isActive ? {
                  background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.primaryDark})`,
                  boxShadow: `${currentTheme.shadow}, ${currentTheme.glowShadow}`,
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
      {/* Main Content */}
      <div className="ml-64">
        {/* Header */}
        <header className="sticky top-0 z-40 backdrop-blur-xl border-b p-4" style={{
          background: currentTheme.glass,
          borderBottom: `1px solid ${currentTheme.glassBorder}`,
          boxShadow: currentTheme.shadow
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
                    background: currentTheme.cardBg,
                    border: `1px solid ${currentTheme.border}`,
                    color: currentTheme.foreground
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
                  background: currentTheme.glassBorder,
                  color: currentTheme.foreground
                }}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button className="relative p-2 rounded-lg transition-all hover:scale-105" style={{ background: currentTheme.glassBorder }}>
                <Bell className="w-5 h-5" style={{ opacity: 0.7 }} />
                <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full flex items-center justify-center" style={{ background: '#ef4444' }}>
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                </span>
              </button>
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-3 p-2 rounded-lg transition-all hover:scale-105"
                  style={{ background: currentTheme.glassBorder }}
                >
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{
                    background: `linear-gradient(to right, ${currentTheme.primary}, ${currentTheme.accent})`
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
        {/* Dashboard Content */}
        <main className="p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
