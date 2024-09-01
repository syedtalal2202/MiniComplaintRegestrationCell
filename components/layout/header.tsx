






// import { useAuth, signOut } from "../../lib/AuthContext";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { useRouter } from 'next/router';

// const Header: React.FC = () => {
//   const { user, loading } = useAuth();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1024);
//   const router = useRouter();
  
//   // Update windowWidth on resize
//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);
    
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Toggle function for mobile menu
//   const toggleMenu = () => {
//     setIsMenuOpen(prevState => !prevState);
//   };

//   // Inline styles for responsiveness
//   const navStyle = windowWidth < 768 ? {
//     display: isMenuOpen ? 'block' : 'none',
//     position: 'fixed',
//     top: '64px', // Adjust according to header height
//     left: '0',
//     width: '100%',
//     backgroundColor: 'white',
//     zIndex: 1000,
//     transition: 'transform 0.3s ease-in-out'
//   } : {
//     display: 'flex',
//     position: 'relative',
//     top: '0',
//     left: '0',
//     width: 'auto',
//     backgroundColor: 'transparent'
//   };

//   // Function to handle scrolling to section
//   const handleScrollToSection = (section: string) => {
//     if (router.pathname === '/') {
//       // If on the homepage, scroll to the section
//       document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
//     } else {
//       // Navigate to homepage with fragment
//       router.push(`/?${section}`);
//     }
//   };

//   return (
//     <header className="bg-white shadow-md">
//       <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between relative">
//         {/* Logo */}
//         <div className="text-2xl font-bold text-gray-900">
//           <Link href="/" passHref>
//             <a aria-label="Homepage">Your Logo</a>
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         {windowWidth < 768 && (
//           <button
//             aria-label="Toggle navigation menu"
//             className="text-gray-600 hover:text-gray-900 md:hidden"
//             onClick={toggleMenu}
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               ></path>
//             </svg>
//           </button>
//         )}

//         {/* Navigation Links */}
//         <nav
//           style={navStyle}
//           className="flex flex-col md:flex-row md:space-x-8 md:items-center"
//         >
//           <div className="flex flex-col md:flex-row md:space-x-8 md:items-center">
//             <Link href="/" passHref>
//               <a aria-label="Home" className="text-gray-600 hover:text-gray-900 py-2 px-4 block md:inline">Home</a>
//             </Link>
//             <button 
//               onClick={() => handleScrollToSection('services')}
//               aria-label="Services"
//               className="text-gray-600 hover:text-gray-900 py-2 px-4 block md:inline"
//             >
//               Services
//             </button>
//             <button 
//               onClick={() => handleScrollToSection('about')}
//               aria-label="About Us"
//               className="text-gray-600 hover:text-gray-900 py-2 px-4 block md:inline"
//             >
//               About Us
//             </button>
//             <button 
//               onClick={() => handleScrollToSection('contact')}
//               aria-label="Contact Us"
//               className="text-gray-600 hover:text-gray-900 py-2 px-4 block md:inline"
//             >
//               Contact Us
//             </button>

//             {/* Authentication Buttons */}
//             <div className="flex flex-col md:flex-row md:space-x-4 items-center mt-4 md:mt-0">
//               {!user && !loading ? (
//                 <>
//                   <Link passHref href="/AuthenticationFrontend/signup">
//                     <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full md:w-auto mb-2 md:mb-0">
//                       Signup
//                     </button>
//                   </Link>

//                   <Link passHref href="/AuthenticationFrontend/signin">
//                     <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full md:w-auto">
//                       Signin
//                     </button>
//                   </Link>
//                 </>
//               ) : null}
//               {user ? (
//                 <>
//                   <button
//                     onClick={signOut}
//                     className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full md:w-auto mb-2 md:mb-0"
//                   >
//                     Signout
//                   </button>

//                   <Link href="/ProblemForm/ProblemForm" passHref>
//                     <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 w-full md:w-auto">
//                       Register Complaint
//                     </button>
//                   </Link>
//                 </>
//               ) : null}
//             </div>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;



import { useAuth, signOut } from "../../lib/AuthContext";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const { user, loading } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const router = useRouter();
  
  // Update windowWidth on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle function for mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  // Inline styles for responsiveness
  const navStyle = windowWidth < 768 ? {
    display: isMenuOpen ? 'block' : 'none',
    position: 'fixed',
    top: '64px', // Adjust according to header height
    left: '0',
    width: '100%',
    backgroundColor: 'white',
    zIndex: 1000,
    transition: 'transform 0.3s ease-in-out'
  } : {
    display: 'flex',
    position: 'relative',
    top: '0',
    left: '0',
    width: 'auto',
    backgroundColor: 'transparent'
  };

  // Function to handle scrolling to section
  const handleScrollToSection = (section: string) => {
    if (router.pathname === '/') {
      // If on the homepage, scroll to the section
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to homepage with fragment
      router.push(`/?${section}`);
    }
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between relative">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900">
          <Link href="/" passHref>
            <a aria-label="Homepage">Your Logo</a>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        {windowWidth < 768 && (
          <button
            aria-label="Toggle navigation menu"
            className="text-gray-600 hover:text-gray-900 md:hidden ml-auto"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        )}

        {/* Navigation Links */}
        <nav
          style={navStyle}
          className="flex flex-col md:flex-row md:space-x-8 md:items-center"
        >
          <div className="flex flex-col md:flex-row md:space-x-8 md:items-center">
            <Link href="/" passHref>
              <a aria-label="Home" className="text-gray-600 hover:text-gray-900 py-2 px-4 block md:inline">Home</a>
            </Link>
            <button 
              onClick={() => handleScrollToSection('services')}
              aria-label="Services"
              className="text-gray-600 hover:text-gray-900 py-2 px-4 block md:inline"
            >
              Services
            </button>
            <button 
              onClick={() => handleScrollToSection('about')}
              aria-label="About Us"
              className="text-gray-600 hover:text-gray-900 py-2 px-4 block md:inline"
            >
              About Us
            </button>
            <button 
              onClick={() => handleScrollToSection('contact')}
              aria-label="Contact Us"
              className="text-gray-600 hover:text-gray-900 py-2 px-4 block md:inline"
            >
              Contact Us
            </button>

            {/* Authentication Buttons */}
            <div className="flex flex-col md:flex-row md:space-x-4 items-center mt-4 md:mt-0">
              {!user && !loading ? (
                <>
                  <Link passHref href="/AuthenticationFrontend/signup">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full md:w-auto mb-2 md:mb-0">
                      Signup
                    </button>
                  </Link>

                  <Link passHref href="/AuthenticationFrontend/signin">
                    <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full md:w-auto">
                      Signin
                    </button>
                  </Link>
                </>
              ) : null}
              {user ? (
                <>
                  <button
                    onClick={signOut}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full md:w-auto mb-2 md:mb-0"
                  >
                    Signout
                  </button>

                  <Link href="/ProblemForm/ProblemForm" passHref>
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 w-full md:w-auto">
                      Register Complaint
                    </button>
                  </Link>
                </>
              ) : null}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;



// // 1. Accessible Navigation
// // aria-label Attributes: Added aria-label attributes to navigation links and buttons for better accessibility. This helps screen readers provide context to users who might not be able to see the visual content.
// // Example:
// // jsx

// // <a aria-label="Home" className="text-gray-600 hover:text-gray-900 py-2 px-4 block md:inline">Home</a>
// // 2. Link Tags with Descriptive Labels
// // Descriptive Anchor Tags: Updated the anchor tags with descriptive labels that are meaningful and relevant. This improves both accessibility and SEO by making it clearer what each link is for.
// // Example:
// // jsx

// // <a aria-label="Register Complaint" className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 w-full md:w-auto">
// //   Register Complaint
// // </a>?