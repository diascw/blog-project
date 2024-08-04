import React from 'react';
import Header from '../Header/Hearder';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <main className="mt-4">{children}</main>
    </div>
  );
};

export default Layout;
