import React, { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

const Root: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Parse /clubs/<slug>/...
    const pathname = location.pathname;
    const match = pathname.match(/^\/clubs\/([^/]+)/);
    
    if (match && match[1]) {
      const slug = match[1];
      document.documentElement.dataset.club = slug;
    } else {
      document.documentElement.dataset.club = 'hub';
    }
  }, [location.pathname]);

  return <>{children}</>;
};

export default Root;
