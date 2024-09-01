
// import type { NextPage } from "next";
// import Head from "next/head";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   GoogleAuthProvider,
//   signInWithPopup,
// } from "firebase/auth";
// import { useState } from "react";
// import { useAuth } from "../lib/AuthContext";

// const Home: NextPage = () => {
//   const { user, loading } = useAuth();
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");

//   if (loading) return null;

//   if (user) return <h1 className="text-center text-xl">You are already logged in</h1>;

//   const auth = getAuth();

//   function createUserCredentials() {
//     createUserWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         console.log("success", user);
//       })
//       .catch((error) => {
//         const errorMessage = error.message;
//         console.log("error", errorMessage);
//         window.alert(errorMessage);
//       });
//   }

//   function loginWithGoogle() {
//     const googleProvider = new GoogleAuthProvider();

//     signInWithPopup(auth, googleProvider)
//       .then((result) => {
//         const user = result.user;
//         console.log("signed in with google", user);
//       })
//       .catch((error) => {
//         const errorMessage = error.message;
//         console.log("error", errorMessage);
//         window.alert(errorMessage);
//       });
//   }

//   return (
//     <>
//       <Head>
//         <title>Signup</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-300 via-pink-300 to-red-300">
//         <div className="relative w-full max-w-md bg-white rounded-lg shadow-xl p-8">
//           <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>

//           <div className="space-y-4">
//             <input
//               type="email"
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full border border-gray-300 rounded-lg p-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
//               placeholder="Email"
//             />
//             <input
//               type="password"
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full border border-gray-300 rounded-lg p-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
//               placeholder="Password"
//             />
//             <button
//               onClick={createUserCredentials}
//               className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
//             >
//               Sign Up
//             </button>
//           </div>

          
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;




import type { NextPage } from "next";
import Head from "next/head";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { useAuth } from "../../lib/AuthContext";

const Signup: NextPage = () => {
  const { user, loading } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  if (loading) return null;

  if (user) return <h1 className="text-center text-xl">You are already logged in</h1>;

  const auth = getAuth();

  function createUserCredentials() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("success", user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log("error", errorMessage);
        window.alert(errorMessage);
      });
  }

  function loginWithGoogle() {
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log("signed in with google", user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log("error", errorMessage);
        window.alert(errorMessage);
      });
  }

  return (
    <>
      <Head>
        <title>Sign Up | Your Company</title>
        <meta name="description" content="Create a new account with Your Company. Sign up using your email or Google account to get started." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Sign Up | Your Company" />
        <meta property="og:description" content="Create a new account with Your Company. Sign up using your email or Google account to get started." />
        <meta property="og:image" content="/path-to-your-image.jpg" /> {/* Optional */}
        <meta property="og:url" content="https://your-website.com/signup" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://your-website.com/signup" />
      </Head>

      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-300 via-pink-300 to-red-300">
        <div className="relative w-full max-w-md bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>

          <div className="space-y-4">
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Email"
              aria-label="Email Address"
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Password"
              aria-label="Password"
            />
            <button
              onClick={createUserCredentials}
              className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;


// SEO Enhancements:
// Meta Tags:

// Added <meta name="description"> to provide a summary of the page’s purpose, improving relevance in search results.
// Included <meta name="robots" content="index, follow"> to instruct search engines to index the page and follow links.
// Added Open Graph meta tags (og:title, og:description, og:image, og:url) for better social media integration. Make sure to replace placeholders with actual values specific to your site.
// Canonical Tag:

// Included <link rel="canonical"> to prevent duplicate content issues and specify the preferred URL for the page.
// Accessibility:

// Added aria-label attributes to input fields to improve accessibility for screen readers.
// Title:

// Updated the <title> tag to include both the action ("Sign Up") and the company name for better branding and search relevance.
// Summary