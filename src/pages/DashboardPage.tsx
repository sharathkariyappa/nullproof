import React, { useState } from 'react';
import { TrendingUp, Wallet, Zap, Activity, ArrowUpRight, ArrowDownRight, Eye, ExternalLink, Sparkles } from 'lucide-react';


const DashboardPage = ({ theme }) => {
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
  
    return (
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
                background: theme.cardBg,
                border: `1px solid ${theme.glassBorder}`,
                boxShadow: theme.shadow
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl" style={{ background: `${theme.primary}20` }}>
                  <stat.icon className="w-6 h-6" style={{ color: theme.primary }} />
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
            background: theme.cardBg,
            border: `1px solid ${theme.glassBorder}`,
            boxShadow: theme.shadow
          }}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-light">Portfolio</h3>
              <button className="transition-colors" style={{ color: theme.primary }}>
                <Eye className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              {portfolioData.map((token, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-xl transition-all group cursor-pointer">
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
          
          {/* Recent Transactions */}
          <div className="rounded-2xl p-6 backdrop-blur-xl" style={{
            background: theme.cardBg,
            border: `1px solid ${theme.glassBorder}`,
            boxShadow: theme.shadow
          }}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-light">Recent Transactions</h3>
              <button className="transition-colors" style={{ color: theme.primary }}>
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
  };


  export default DashboardPage