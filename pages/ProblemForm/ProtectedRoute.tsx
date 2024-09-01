

import React, { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../lib/AuthContext';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [message, setMessage] = useState<string>(''); // Initialize with a default message
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      setMessage('Please login to access this page.');
      
      const timer = setTimeout(() => {
        router.push('AuthenticationFrontend/signin');
      }, 4000); // Redirects after 8 seconds

      return () => clearTimeout(timer);
    }
  }, [user, router]);

  if (user) {
    return <>{children}</>;
  }

  return (
    <div className="login-message" aria-live="polite">
      <h1 className="message text-center text-gray-800">{message}</h1>
      {/* Optionally show a loading spinner or placeholder */}
      <p className="text-center text-gray-600">Redirecting you to the login page...</p>
    </div>
  );
};

export default ProtectedRoute;



// Summary of Updates:
// Message Initialization:

// Provided a more descriptive default message to be clear to users about why they are being redirected.
// Accessibility Enhancements:

// Added aria-live="polite" to ensure that screen readers announce the message to users. This improves accessibility for users relying on assistive technologies.
// Added text to inform users that they are being redirected, which helps with user experience.
// Styling and Content:

// Updated class names to be more descriptive and to potentially align with a utility-first CSS framework (e.g., Tailwind CSS) if used.
// Added text to indicate that a redirect is occurring, which helps users understand what’s happening.
// SEO Considerations:
// Server-Side Rendering (SSR):

// Ensure that the server-side rendering of protected pages handles unauthorized access gracefully and provides appropriate status codes (e.g., 401 or 403) if necessary.
// Meta Tags:

// Manage meta tags in the pages that are wrapped by ProtectedRoute to ensure they are optimized for search engines.
// By enhancing accessibility and user messaging, you improve the overall experience and indirectly support better SEO practices by ensuring that users and search engines can interact with your content effectively.




