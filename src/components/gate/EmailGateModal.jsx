import React from 'react';
import { useForm } from '@formspree/react';
import { motion } from 'framer-motion';

const EmailGateModal = ({ onSuccess }) => {
  const [state, handleSubmit] = useForm("mzdbkdnb"); // Formspree ID from ContactSection

  React.useEffect(() => {
    if (state.succeeded) {
      onSuccess();
    }
  }, [state.succeeded, onSuccess]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-80 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl shadow-2xl max-w-md w-full mx-4 text-white"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Welcome!</h2>
        <p className="text-gray-300 mb-6 text-center">
          Please enter your name and email to access the site.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder="Your full name"
            className="w-full px-4 py-2 border border-gray-600 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-orange-500 focus:outline-none"
          />
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="Your email address"
            className="w-full px-4 py-2 border border-gray-600 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-orange-500 focus:outline-none"
          />
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-orange-500 text-white py-3 px-4 rounded-xl hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 shadow-lg shadow-orange-500/25"
          >
            {state.submitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
        {state.errors && state.errors.length > 0 && (
          <p className="text-red-400 mt-4 text-center">
            There was an error submitting your information. Please try again.
          </p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default EmailGateModal;