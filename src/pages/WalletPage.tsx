import React, { useState } from 'react';
import { Wallet,  Copy } from 'lucide-react';


const WalletPage = ({ theme }) => (
    <div className="space-y-6">
      <h2 className="text-3xl font-light" style={{
        background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryDark})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>Wallet Management</h2>
      
      <div className="rounded-2xl p-6 backdrop-blur-xl" style={{
        background: theme.cardBg,
        border: `1px solid ${theme.glassBorder}`,
        boxShadow: theme.shadow
      }}>
        <div className="flex items-center justify-between p-6 rounded-xl" style={{
          border: `1px solid ${theme.primary}20`,
          background: `${theme.primary}05`
        }}>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{
              background: `linear-gradient(to right, ${theme.primary}, ${theme.accent})`
            }}>
              <Wallet className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-medium">Connected Wallet</p>
              <p className="text-sm" style={{ opacity: 0.6 }}>0x742d35Cc6134C0532925a3b8D4162000E4f8a</p>
            </div>
          </div>
          <button className="flex items-center space-x-2 transition-colors" style={{ color: theme.primary }}>
            <Copy className="w-4 h-4" />
            <span>Copy</span>
          </button>
        </div>
      </div>
    </div>
  );


  export default WalletPage