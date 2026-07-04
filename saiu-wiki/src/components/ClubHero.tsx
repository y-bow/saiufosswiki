import React, { useEffect, useRef } from 'react';
import { ClubConfig } from '../data/clubs.config';

interface ClubHeroProps {
  club: ClubConfig;
}

const ClubHero: React.FC<ClubHeroProps> = ({ club }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (club.theme === 'foss' && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      let animationFrameId: number;

      const resizeCanvas = () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      };

      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$+-*/=%\"\'#&_(),.;:?!\\|{}<>[]^~';
      const fontSize = 14;
      const columns = Math.floor(canvas.width / fontSize);
      const drops: number[] = Array(columns).fill(1);

      const draw = () => {
        ctx.fillStyle = 'rgba(10, 14, 10, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#39ff88';
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
          const text = characters.charAt(Math.floor(Math.random() * characters.length));
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);

          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
        animationFrameId = requestAnimationFrame(draw);
      };

      draw();

      return () => {
        window.removeEventListener('resize', resizeCanvas);
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, [club.theme]);

  return (
    <header 
      className={`club-hero club-hero--${club.theme}`} 
      style={{ 
        position: 'relative', 
        overflow: 'hidden', 
        padding: '6rem 2rem', 
        textAlign: 'center', 
        backgroundColor: 'var(--club-bg)',
        borderBottom: `1px solid var(--club-accent)`
      }}
    >
      {club.theme === 'foss' && (
        <canvas 
          ref={canvasRef} 
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            zIndex: 0,
            pointerEvents: 'none'
          }} 
        />
      )}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 8vw, 4rem)', 
          margin: '0 0 1rem 0', 
          color: 'var(--club-accent)',
          fontFamily: 'var(--club-font)'
        }}>
          {club.name}
        </h1>
        <p style={{ 
          fontSize: 'clamp(1rem, 4vw, 1.5rem)', 
          opacity: 0.9,
          margin: 0,
          fontFamily: 'var(--club-font)'
        }}>
          {club.tagline}
        </p>
      </div>
    </header>
  );
};

export default ClubHero;
