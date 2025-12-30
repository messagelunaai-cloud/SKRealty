import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EmailGateModal from './EmailGateModal';

const EmailGate = ({ children }) => {
  const [isGated, setIsGated] = useState(true);

  useEffect(() => {
    // Temporarily disabled for testing - uncomment below to enable gate
    // const hasVisited = localStorage.getItem('sk_has_visited');
    // if (hasVisited === 'true') {
    //   setIsGated(false);
    // }
  }, []);

  useEffect(() => {
    if (isGated) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isGated]);

  const handleSuccess = () => {
    // Temporarily disabled for testing - uncomment below to enable persistence
    // localStorage.setItem('sk_has_visited', 'true');
    setIsGated(false);
  };

  return (
    <AnimatePresence mode="wait">
      {isGated ? (
        <motion.div
          key="gated"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50"
        >
          <div className="pointer-events-none select-none blur-sm h-full overflow-hidden">
            {children}
          </div>
          <EmailGateModal onSuccess={handleSuccess} />
        </motion.div>
      ) : (
        <motion.div
          key="ungated"
          initial={{ opacity: 0, filter: 'blur(4px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.5 }}
          className="h-full"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EmailGate;