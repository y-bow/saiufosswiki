import React, { useState, useEffect } from 'react';

interface FossTypewriterProps {
  text: string;
  speed?: number;
}

const FossTypewriter: React.FC<FossTypewriterProps> = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
        setIsDone(true);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span style={{ fontFamily: 'monospace' }}>
      {displayedText}
      {!isDone && <span className="cursor" style={{ animation: 'blink 1s infinite' }}>_</span>}
    </span>
  );
};

export default FossTypewriter;
