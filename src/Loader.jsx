import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("Initializing Portfolio...");

  useEffect(() => {
    const messages = [
      "Initializing Portfolio...",
      "Loading Components...",
      "Loading Projects...",
      "Connecting Backend...",
      "Optimizing Experience...",
      "Welcome 👋",
    ];

    let index = 0;

    const interval = setInterval(() => {
      index++;

      if (index < messages.length) {
        setText(messages[index]);
      }
    }, 500);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.15,
            transition: { duration: 1 },
          }}
        >
          <motion.h1
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Balaji<span>.dev</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            key={text}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {text}
          </motion.p>

          <div className="loader-bar">
            <motion.div
              className="loader-progress"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3 }}
            />
          </div>

          <div className="loader-tech">
            React • Django • Python • SQL
          </div>

          <div className="loader-particles">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}