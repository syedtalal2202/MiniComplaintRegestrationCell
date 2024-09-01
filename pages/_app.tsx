import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
// import './ContactUs.css';
// import FirebaseProvider from "../lib/AuthContext";
// import "../lib/firebaseConfig/init";
import  UserProblemFormContextProvider  from '../lib/ProblemFormContext';
// import { AuthContextProvider } from '../lib/AuthContext';
import AuthContextProvider from '../lib/AuthContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
       <UserProblemFormContextProvider>
    {/* <FirebaseProvider> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    {/* </FirebaseProvider> */}
     </UserProblemFormContextProvider>
     </AuthContextProvider>
  );
}
export default MyApp;
