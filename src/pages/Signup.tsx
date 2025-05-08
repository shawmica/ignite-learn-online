
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SignupForm from '@/components/auth/SignupForm';
import { Book } from 'lucide-react';

const Signup = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <div className="flex justify-center">
              <Book className="h-12 w-12 text-primary-500" />
            </div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Join Ignite Learn
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Create an account to start your learning journey
            </p>
          </div>
          <SignupForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
