


import React, { useState, ChangeEvent, FormEvent } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getAuth, User } from 'firebase/auth';
import { useUserProblemForm } from '../../lib/ProblemFormContext';
import ProtectedRoute from './ProtectedRoute';

const storage = getStorage();

const ProblemForm: React.FC = () => {
    const [description, setDescription] = useState<string>('');
    const [imageorVideo, setImageorVideo] = useState<File | null>(null);
    const { InsertProblem } = useUserProblemForm();
    const auth = getAuth();
    const user: User | null = auth.currentUser; // Get current user

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImageorVideo(e.target.files[0]);
        }
    };

    const uploadFile = async (file: File): Promise<string> => {
        try {
            const storageRef = ref(storage, `uploads/${file.name}`);
            await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(storageRef);
            return downloadURL;
        } catch (error) {
            console.error('Error uploading file:', error);
            throw error;
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!user) {
            console.log('User not authenticated');
            return;
        }
        
        try {
            let imageUrl = '';
            if (imageorVideo) {
                imageUrl = await uploadFile(imageorVideo);
            }
            await InsertProblem(description, imageUrl);
            console.log('Problem reported successfully!');
        } catch (error) {
            if (error instanceof Error) {
                console.error('Submission failed:', error.message);
            } else {
                console.error('Submission failed:', 'An unknown error occurred.');
            }
        }
    };

    return (
        <ProtectedRoute>
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 via-indigo-400 to-purple-500">
                <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Report a Problem</h1>
                    <p className="text-gray-600 mb-6 text-center">Fill out the form below to report a problem. Your feedback helps us improve our services.</p>
                    <form className="space-y-6" onSubmit={handleSubmit} aria-labelledby="report-problem-form">
                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                rows={4}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 text-gray-700 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="Describe the problem you're facing..."
                                aria-required="true"
                            />
                        </div>

                        <div>
                            <label htmlFor="file" className="block text-sm font-medium text-gray-700">Upload a Picture</label>
                            <input
                                id="file"
                                name="file"
                                type="file"
                                accept="image/*,video/*"
                                onChange={handleFileChange}
                                className="mt-1 block w-full text-sm text-gray-500 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                aria-required="false"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            aria-label="Report Problem"
                        >
                            Report Problem
                        </button>
                    </form>
                </div>
            </div>
        </ProtectedRoute>
    );
};

export default ProblemForm;



// Heading Structure:

// Changed <h2> to <h1> for the main heading to improve SEO, as it represents the primary content on this page.
// Descriptive Text:

// Added a <p> element to provide additional context about the form, which helps both users and search engines.
// ARIA Attributes:

// Added aria-labelledby and aria-label attributes to improve accessibility.
// Placeholder and Labels:

// Ensured that form elements have appropriate labels and placeholders to make the form more user-friendly and accessible.
// Additional Considerations:
// SEO Meta Tags: Ensure this page is included in your Next.js page with appropriate meta tags in the <Head> component.
// Performance: Optimize images and videos for faster loading times.
// Security: Make sure that file uploads are handled securely and that the form is protected against vulnerabilities like XSS or CSRF.