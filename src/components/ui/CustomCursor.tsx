import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeContext';

interface CursorPosition {
  x: number;
  y: number;
}

// Throttle function for performance
function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): T {
  let lastCall = 0;
  return ((...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      return func(...args);
    }
  }) as T;
}

export function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isTextArea, setIsTextArea] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [magneticTarget, setMagneticTarget] = useState<HTMLElement | null>(null);
  const [isProjectCard, setIsProjectCard] = useState(false);
  const { theme } = useTheme();
  
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  // Trail positions
  const trailPositions = useRef<CursorPosition[]>([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);
  
  const [trails, setTrails] = useState<CursorPosition[]>(trailPositions.current);
  const animationFrameRef = useRef<number>();
  
  useEffect(() => {
    // Check if it's a touch device
    const checkTouchDevice = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
      );
    };
    
    checkTouchDevice();
    window.addEventListener('resize', checkTouchDevice);
    
    return () => window.removeEventListener('resize', checkTouchDevice);
  }, []);
  
  // Magnetic effect calculation
  const applyMagneticEffect = useCallback((mouseX: number, mouseY: number) => {
    if (!magneticTarget) {
      cursorX.set(mouseX);
      cursorY.set(mouseY);
      return;
    }
    
    const rect = magneticTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = mouseX - centerX;
    const distanceY = mouseY - centerY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    
    const magneticRadius = 50;
    const magneticStrength = 0.25;
    
    if (distance < magneticRadius) {
      const factor = 1 - (distance / magneticRadius);
      const magnetX = mouseX - (distanceX * factor * magneticStrength);
      const magnetY = mouseY - (distanceY * factor * magneticStrength);
      
      cursorX.set(magnetX);
      cursorY.set(magnetY);
    } else {
      cursorX.set(mouseX);
      cursorY.set(mouseY);
    }
  }, [magneticTarget, cursorX, cursorY]);
  
  const updateTrails = useCallback(() => {
    setTrails([...trailPositions.current]);
  }, []);
  
  const throttledUpdateTrails = throttle(updateTrails, 16); // 60fps
  
  useEffect(() => {
    if (isTouchDevice) return;
    
    const moveCursor = (e: MouseEvent) => {
      // Cancel any pending animation frame
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      animationFrameRef.current = requestAnimationFrame(() => {
        applyMagneticEffect(e.clientX, e.clientY);
        
        // Update trail positions with delay
        trailPositions.current = [
          { x: e.clientX, y: e.clientY },
          ...trailPositions.current.slice(0, -1),
        ];
        
        throttledUpdateTrails();
      });
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for interactive elements
      const isInteractive = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer') ||
        target.closest('[role="button"]');
      
      // Check for project cards
      const projectCard = target.closest('.custom-cursor-project');
      
      // Check for text areas
      const isText = 
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.classList.contains('text-content') ||
        target.tagName === 'P' ||
        target.tagName === 'H1' ||
        target.tagName === 'H2' ||
        target.tagName === 'H3';
      
      setIsPointer(!!(isInteractive || projectCard));
      setIsTextArea(!!isText);
      setIsProjectCard(!!projectCard);
      
      // Set magnetic target for buttons and links
      if (isInteractive && !projectCard) {
        const interactiveElement = target.tagName === 'BUTTON' || target.tagName === 'A' 
          ? target 
          : target.closest('button') || target.closest('a');
        setMagneticTarget(interactiveElement as HTMLElement);
      } else {
        setMagneticTarget(null);
      }
    };
    
    const handleMouseLeave = () => {
      setIsHidden(true);
    };
    
    const handleMouseEnter = () => {
      setIsHidden(false);
    };
    
    // Add event listeners with throttling
    const throttledMoveCursor = throttle(moveCursor, 4); // 250fps max
    document.addEventListener('mousemove', throttledMoveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    
    // Hide default cursor
    document.body.style.cursor = 'none';
    
    // Add cursor-none class to all interactive elements
    const style = document.createElement('style');
    style.textContent = `
      * {
        cursor: none !important;
      }
      
      /* Performance optimization */
      .custom-cursor-hide {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.removeEventListener('mousemove', throttledMoveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.style.cursor = 'auto';
      style.remove();
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [applyMagneticEffect, throttledUpdateTrails, isTouchDevice]);
  
  // Don't render on touch devices
  if (isTouchDevice) return null;
  
  const cursorSize = isProjectCard ? 48 : isPointer ? 24 : isTextArea ? 6 : 12;
  const cursorOpacity = isTextArea ? 0.5 : 1;
  
  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference will-change-transform"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHidden ? 0 : isPointer ? 1.5 : 1,
          opacity: isHidden ? 0 : cursorOpacity,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      >
        <div
          className={`relative -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors ${
            theme === 'dark' ? 'bg-white' : 'bg-gray-900'
          }`}
          style={{
            width: `${cursorSize}px`,
            height: `${cursorSize}px`,
          }}
        >
          {isPointer && !isProjectCard && (
            <div
              className={`absolute inset-0 rounded-full animate-pulse ${
                theme === 'dark' ? 'bg-white/20' : 'bg-gray-900/20'
              }`}
              style={{
                transform: 'scale(1.5)',
              }}
            />
          )}
          {isProjectCard && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className={`text-xs font-medium ${
                theme === 'dark' ? 'text-black' : 'text-white'
              }`}>View</span>
            </div>
          )}
        </div>
      </motion.div>
      
      {/* Trail dots */}
      {trails.map((trail, index) => (
        <motion.div
          key={index}
          className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference will-change-transform"
          initial={{ opacity: 0 }}
          animate={{
            x: trail.x,
            y: trail.y,
            opacity: isHidden ? 0 : 0.5 - index * 0.1,
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 200,
            delay: index * 0.02,
          }}
        >
          <div
            className={`relative -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors ${
              theme === 'dark' ? 'bg-white' : 'bg-gray-900'
            }`}
            style={{
              width: `${8 - index}px`,
              height: `${8 - index}px`,
            }}
          />
        </motion.div>
      ))}
    </>
  );
}