// import React, { createContext, useContext, ReactNode } from 'react';
// import { collection, addDoc, doc, updateDoc, getDoc } from 'firebase/firestore';
// import { db } from '../components/firebase';
// import { useAuth } from './AuthContext';
// import { auth } from '../components/firebase'
 


// // Define types for the context values
// interface UserProblemFormContextType {
//     InsertProblem: (description: string, imageorVideo: string) => Promise<string | undefined>;
//     // UpdateProblem: (id: string, description: string, imageorVideo: string) => Promise<void>;
// }

// // Define the context
// const UserProblemFormContext = createContext<UserProblemFormContextType | undefined>(undefined);

// interface UserProblemFormContextProviderProps {
//     children: ReactNode;
// }

// export function UserProblemFormContextProvider({ children }: UserProblemFormContextProviderProps) {
//     const { user } = useAuth(); // Access the current user from UserAuthContext
//     // console.log(user)

//     // Function to insert a new problem into Firestore
//     const InsertProblem = async (description: string, imageorVideo: string) => {
//         if (!user) {
//             console.error('User not authenticated');
//             return;
//         }

//         try {
//             const docRef = await addDoc(collection(db, 'problemForm'), {
//                 description,
//                 imageorVideo,
//                 // markerPosition,
                
//             });
//             console.log('Document written with ID:', docRef.id);
//             return docRef.id; // Return ID for future updates
//         } catch (e) {
//             console.error('Error adding document: ', e);
//         }
//     };

   

//     return (
//         <UserProblemFormContext.Provider value={{ InsertProblem }}>
//             {children}
//         </UserProblemFormContext.Provider>
//     );
// }

// // Custom hook to use the context
// export const useUserProblemForm = (): UserProblemFormContextType => {
//     const context = useContext(UserProblemFormContext);
//     if (context === undefined) {
//         throw new Error('useUserProblemForm must be used within a UserProblemFormContextProvider');
//     }
//     return context;
// };
// export default UserProblemFormContextProvider;









import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { db } from '../components/firebase';
import { useAuth } from './AuthContext';

// Define types for the context values
interface Problem {
    id: string;
    description: string;
}

interface UserProblemFormContextType {
    InsertProblem: (description: string, imageorVideo: string) => Promise<string | undefined>;
    problems: Problem[];
    loading: boolean;
    error: string | null;
    fetchProblems: () => Promise<void>;
}

// Define the context
const UserProblemFormContext = createContext<UserProblemFormContextType | undefined>(undefined);

interface UserProblemFormContextProviderProps {
    children: ReactNode;
}

export function UserProblemFormContextProvider({ children }: UserProblemFormContextProviderProps) {
    const { user } = useAuth(); // Access the current user from UserAuthContext

    const [problems, setProblems] = useState<Problem[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // Function to insert a new problem into Firestore
    const InsertProblem = async (description: string, imageorVideo: string) => {
        if (!user) {
            console.error('User not authenticated');
            return;
        }

        try {
            const docRef = await addDoc(collection(db, 'problemForm'), {
                description,
                imageorVideo,
                userId: user.uid, // Ensure userId is included
            });
            console.log('Document written with ID:', docRef.id);
            return docRef.id; // Return ID for future updates
        } catch (e) {
            console.error('Error adding document: ', e);
        }
    };

    // Function to fetch problems from Firestore
    const fetchProblems = async () => {
        if (!user) return; // Exit early if user is not available

        setLoading(true);

        try {
            console.log('Fetching problems for user:', user.uid);

            const q = query(collection(db, 'problemForm'), where('userId', '==', user.uid));
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                console.log('No matching documents found.');
                setProblems([]);
                return;
            }

            const problemList = querySnapshot.docs.map(doc => {
                const data = doc.data();
                if (!data.description) {
                    throw new Error(`Missing description for problem with ID ${doc.id}`);
                }
                return { id: doc.id, description: data.description };
            });

            setProblems(problemList);
        } catch (error) {
            console.error('Error fetching problems:', error);
            setError('Error fetching problems');
        } finally {
            setLoading(false);
        }
    };

    // Fetch problems when user changes
    useEffect(() => {
        fetchProblems();
    }, [user]);

    return (
        <UserProblemFormContext.Provider value={{ InsertProblem, problems, loading, error, fetchProblems }}>
            {children}
        </UserProblemFormContext.Provider>
    );
}

// Custom hook to use the context
export const useUserProblemForm = (): UserProblemFormContextType => {
    const context = useContext(UserProblemFormContext);
    if (context === undefined) {
        throw new Error('useUserProblemForm must be used within a UserProblemFormContextProvider');
    }
    return context;
};

export default UserProblemFormContextProvider;
