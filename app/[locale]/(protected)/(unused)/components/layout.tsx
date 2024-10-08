import Link from 'next/link';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div dir='ltr'>
      {children}
    </div>
  );
};

export default Layout;