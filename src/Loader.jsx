import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const messages = [
    "Initializing Portfolio...",
    "Loading Components...",
    "Loading Projects...",
    "Optimizing Experience...",
    "Launching Portfolio...",
  ];

  const currentMessage = messages[
    Math.min(
      Math.floor(progress / 17),
      messages.length - 1
    )
  ];

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value++;

      setProgress(value);

      if (value >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          setLoading(false);
        }, 600);
      }
    }, 120); // 120ms × 100 = 12 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="loader"
          exit={{
            opacity: 0,
            scale: 1.15,
            transition: { duration: 1 },
          }}
        >
          <motion.h1
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Balaji<span>.dev</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .4 }}
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            key={currentMessage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {currentMessage}
          </motion.p>

          <div className="loader-bar">
            <motion.div
              className="loader-progress"
              animate={{
                width: `${progress}%`
              }}
            />
          </div>

          <div className="loader-percent">
            {progress}%
          </div>

          <div className="loader-tech">
            React • Django • Python • SQL
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}