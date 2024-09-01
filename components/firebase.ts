// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getStorage } from "firebase/storage";
// import { getFirestore } from "firebase/firestore"; // Import Firestore
// import {getAuth } from "firebase/auth"

// // import {getAuth } from "firebase/auth"

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
// //   apiKey:
// //   authDomain: 
// //   projectId: 
//   storageBucket: "nextjs-830bc.appspot.com",
//   messagingSenderId: "214733890609",
// //   appId: 
//   measurementId: "G-DGSMV0MFSR"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app); // Initialize Firestore

// const analytics = getAnalytics(app);
// // const app = initializeApp(firebaseConfig);
// export default app;
// export { auth ,db,storage};
// Import the functions you need from the SDKs you need
// import { initializeApp, FirebaseApp } from "firebase/app";
// import { getAnalytics, Analytics } from "firebase/analytics";
// import { getFirestore, Firestore } from "firebase/firestore";
// import { getStorage, FirebaseStorage } from "firebase/storage";
// import { getAuth, Auth } from "firebase/auth";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_apiKey,
//   authDomain: process.env.NEXT_PUBLIC_authDomain,
//   projectId: process.env.NEXT_PUBLIC_projectId,
//   storageBucket: "nextjs-830bc.appspot.com",
//   messagingSenderId: "214733890609",
//   appId: process.env.NEXT_PUBLIC_appId,
//   measurementId: "G-DGSMV0MFSR",
// };

// // Initialize Firebase
// const app: FirebaseApp = initializeApp(firebaseConfig);
// const db: Firestore = getFirestore(app);
// const analytics: Analytics | null = typeof window !== "undefined" ? getAnalytics(app) : null;
// const storage: FirebaseStorage = getStorage(app);
// const auth: Auth = getAuth(app);

// export default app;
// export { auth, db, storage };



// Import the functions you need from the SDKs you need
// import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
// import { getAnalytics, Analytics } from "firebase/analytics";
// import { getFirestore, Firestore } from "firebase/firestore";
// import { getStorage, FirebaseStorage } from "firebase/storage";
// import { getAuth, Auth } from "firebase/auth";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_apiKey,
//   authDomain: process.env.NEXT_PUBLIC_authDomain,
//   projectId: process.env.NEXT_PUBLIC_projectId,
//   storageBucket: "nextjs-830bc.appspot.com",
//   messagingSenderId: "214733890609",
//   appId: process.env.NEXT_PUBLIC_appId,
//   measurementId: "G-DGSMV0MFSR",
// };

// // Ensure the Firebase app is initialized only once
// const app: FirebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const db: Firestore = getFirestore(app);
// const analytics: Analytics | null = typeof window !== "undefined" ? getAnalytics(app) : null;
// const storage: FirebaseStorage = getStorage(app);
// const auth: Auth = getAuth(app);

// export default app;
// export { auth, db, storage };







// firebase.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_apiKey,
  authDomain: process.env.NEXT_PUBLIC_authDomain,
  projectId: process.env.NEXT_PUBLIC_projectId,
  storageBucket: "nextjs-830bc.appspot.com",
  messagingSenderId: "214733890609",
  appId: process.env.NEXT_PUBLIC_appId,
  measurementId: "G-DGSMV0MFSR",
};

// Ensure the Firebase app is initialized only once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
