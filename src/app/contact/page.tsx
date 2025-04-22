"use client";
import React from 'react';
import { Mail } from 'lucide-react';

function ContactPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                        Contact Us
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Have questions? We'd love to hear from you.
                    </p>
                </div>
                <div className="mt-8 space-y-6">
                    <div className="flex items-center justify-center space-x-3">
                        <Mail className="h-5 w-5 text-indigo-600" />
                        <span className="text-lg text-gray-700">ashvainfotech3@gmail.com</span>
                    </div>
                    <div className="flex justify-center">
                        <button
                            onClick={() => window.location.href = 'mailto:ashvainfotech3@gmail.com'}
                            className="group relative flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <Mail className="mr-2 h-4 w-4" />
                            Send Email
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
