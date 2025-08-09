const useTheme = (isDarkMode) => {
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
    return isDarkMode ? themes.dark : themes.light;
  };


  export default useTheme