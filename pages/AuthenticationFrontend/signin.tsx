
// import type { NextPage } from "next";
// import Head from "next/head";
// import {
//   getAuth,
//   signInWithEmailAndPassword,
//   GoogleAuthProvider,
//   signInWithPopup,
// } from "firebase/auth";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import { useAuth } from "../lib/AuthContext";

// const Home: NextPage = () => {
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const { user, loading } = useAuth();
//   const router = useRouter();  // Initialize useRouter

//   useEffect(() => {
//     if (user) {
//       router.push('/ProblemForm');  // Redirect to ProblemForm if user is logged in
//     }
//   }, [user, router]);  // Dependency array to re-run useEffect when user changes

//   if (loading) return null;

//   const auth = getAuth();

//   function login() {
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         console.log("success", user);
//         router.push('/ProblemForm');  // Redirect after successful login
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
//         router.push('/ProblemForm');  // Redirect after successful Google login
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
//         <title>Signin</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-500">
//         <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
//           <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign In</h2>

//           <div className="space-y-4">
//             <input
//               type="email"
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full border border-gray-300 rounded-lg p-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Email"
//             />
//             <input
//               type="password"
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full border border-gray-300 rounded-lg p-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Password"
//             />
//             <button
//               onClick={login}
//               className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               Login
//             </button>
//           </div>

//           <div className="mt-6">
//             {/* <button
//               onClick={loginWithGoogle}
//               className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
//             >
//               Login with Google
//             </button> */}
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
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../../lib/AuthContext";

const Home: NextPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { user, loading } = useAuth();
  const router = useRouter();  // Initialize useRouter

  useEffect(() => {
    if (user) {
      router.push('/ProblemForm/ProblemForm');  // Redirect to ProblemForm if user is logged in
    }
  }, [user, router]);  // Dependency array to re-run useEffect when user changes

  if (loading) return null;

  const auth = getAuth();

  function login() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("success", user);
        router.push('/ProblemForm/ProblemForm');  // Redirect after successful login
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log("error", errorMessage);
        window.alert(errorMessage);
      });
  }

  // function loginWithGoogle() {
  //   const googleProvider = new GoogleAuthProvider();

  //   signInWithPopup(auth, googleProvider)
  //     .then((result) => {
  //       const user = result.user;
  //       console.log("signed in with google", user);
  //       router.push('/ProblemForm/ProblemForm');  // Redirect after successful Google login
  //     })
  //     .catch((error) => {
  //       const errorMessage = error.message;
  //       console.log("error", errorMessage);
  //       window.alert(errorMessage);
  //     });
  // }

  return (
    <>
      <Head>
        <title>Sign In | Your Company</title>
        <meta name="description" content="Sign in to your account to access our services. Use email/password or Google to log in." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Sign In | Your Company" />
        <meta property="og:description" content="Sign in to your account to access our services. Use email/password or Google to log in." />
        <meta property="og:image" content="/path-to-your-image.jpg" /> {/* Optional */}
        <meta property="og:url" content="https://your-website.com/signin" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://your-website.com/signin" />
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-500">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign In</h2>

          <div className="space-y-4">
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
              aria-label="Email Address"
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
              aria-label="Password"
            />
            <button
              onClick={login}
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>

          <div className="mt-6">
            {/* Uncomment and configure Google login button if needed */}
            {/* <button
              onClick={loginWithGoogle}
              className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Login with Google
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;



// SEO Enhancements:
// Meta Tags:

// Added <meta name="description"> to provide a brief summary of the page's content. This helps search engines understand what the page is about and can improve click-through rates from search results.
// Added <meta name="robots" content="index, follow"> to ensure search engines index the page and follow links.
// Included Open Graph meta tags (og:title, og:description, og:image, og:url) to enhance social media sharing. Update the og:image and og:url with appropriate values for your site.
// Canonical Tag:

// Added <link rel="canonical"> to specify the preferred URL for the page, helping prevent duplicate content issues.
// Accessibility:

// Added aria-label attributes to input fields for better accessibility.
// Title:

// Updated the <title> tag to include both the action ("Sign In") and the company name for better clarity and branding.