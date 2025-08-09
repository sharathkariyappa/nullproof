import React, { useState } from 'react';
import {
  Home, TrendingUp, Wallet, Settings, Users, BarChart3, Zap,
  Shield, Bell, Search, User, ChevronDown, Moon, Sun, Activity,
  ArrowUpRight, ArrowDownRight, Eye, Copy, ExternalLink, Sparkles
} from 'lucide-react';



const PortfolioPage = ({ theme }) => {
    const portfolioData = [
      { symbol: 'ETH', name: 'Ethereum', balance: '2.45', value: '$4,892.34', change: '+12.5%', positive: true },
      { symbol: 'BTC', name: 'Bitcoin', balance: '0.125', value: '$5,234.12', change: '+8.2%', positive: true },
      { symbol: 'MATIC', name: 'Polygon', balance: '1,234', value: '$987.65', change: '-3.1%', positive: false },
      { symbol: 'UNI', name: 'Uniswap', balance: '45.2', value: '$289.34', change: '+15.7%', positive: true },
    ];
  
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-light" style={{
            background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryDark})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Portfolio Overview</h2>
          <button className="px-6 py-3 rounded-xl text-white font-medium" style={{
            background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryDark})`,
            boxShadow: theme.glowShadow
          }}>
            Add Token
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl p-6 backdrop-blur-xl" style={{
            background: theme.cardBg,
            border: `1px solid ${theme.glassBorder}`,
            boxShadow: theme.shadow
          }}>
            <h3 className="text-xl font-light mb-6">Token Holdings</h3>
            <div className="space-y-4">
              {portfolioData.map((token, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-xl transition-all group cursor-pointer" style={{
                  border: `1px solid transparent`
                }}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white" style={{
                      background: `linear-gradient(to right, ${theme.primary}, ${theme.accent})`
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
          
          <div className="rounded-2xl p-6 backdrop-blur-xl" style={{
            background: theme.cardBg,
            border: `1px solid ${theme.glassBorder}`,
            boxShadow: theme.shadow
          }}>
            <h3 className="text-xl font-light mb-6">Quick Actions</h3>
            <div className="space-y-3">
              {['Buy Crypto', 'Sell Crypto', 'Swap Tokens', 'Send Crypto'].map((action, index) => (
                <button key={index} className="w-full p-3 rounded-xl transition-all text-left" style={{
                  border: `1px solid ${theme.primary}20`,
                  background: `${theme.primary}05`
                }}>
                  {action}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default PortfolioPage