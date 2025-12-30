import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <style>{`
        :root {
          --kw-red: #b40101;
          --gold: #d4af37;
          --slate-900: #0f172a;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        ::selection {
          background-color: #fbbf24;
          color: #0f172a;
        }
      `}</style>
      {children}
    </div>
  );
}