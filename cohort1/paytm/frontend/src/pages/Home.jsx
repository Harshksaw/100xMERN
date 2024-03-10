import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';



const Home = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full mx-auto p-6 bg-gray-100 rounded-lg shadow-md"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: -1,
                    backgroundImage: 'url("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMms2MDUxNHhmYW5vcHR2dWFocnFndGIwcTdremYzeGhrZWQ5aTQ1MiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l3vRnoppYtfEbemBO/giphy.gif")',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            />
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md"
                style={{
                    zIndex: 1,
                }}
            >
                <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome to <span style={{ color: '#FF4500' }}>Paytm</span></h1>
                <p className="text-gray-700">
                    Paytm is an online wallet app that allows you to securely make payments and manage your finances. With its user-friendly interface and robust security features, Paytm ensures a seamless and convenient payment experience.
                </p>
                {/* Add your payment application content here */}
                <div className="flex justify-between mt-4">
                    <Link to="/signup" className="px-4 py-2 bg-blue-500 text-white rounded-md">Sign Up</Link>

                <Link to="/signin" className="px-4 py-2 bg-blue-500 text-white rounded-md">Sign In</Link>
                </div>
            </motion.div>
         
        </div>
    );
};

export default Home;
