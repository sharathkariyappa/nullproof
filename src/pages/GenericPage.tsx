import React from 'react';

const GenericPage = ({ title, theme }) => (
    <div className="space-y-6">
      <h2 className="text-3xl font-light" style={{
        background: `linear-gradient(135deg, ${theme.primary}, ${theme.primaryDark})`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>{title}</h2>
      <div className="rounded-2xl p-6 backdrop-blur-xl" style={{
        background: theme.cardBg,
        border: `1px solid ${theme.glassBorder}`,
        boxShadow: theme.shadow
      }}>
        <p className="text-center py-12" style={{ opacity: 0.6 }}>{title} coming soon...</p>
      </div>
    </div>
  );

  export default GenericPage