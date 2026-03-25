import { motion, useSpring } from "framer-motion";

interface CustomCursorProps {
  x: number;
  y: number;
  isPointer: boolean;
}

export function CustomCursor({ x, y, isPointer }: CustomCursorProps) {
  const springX = useSpring(x - 12, { stiffness: 500, damping: 34, mass: 0.25 });
  const springY = useSpring(y - 12, { stiffness: 500, damping: 34, mass: 0.25 });
  const ringX = useSpring(x - 26, { stiffness: 260, damping: 28, mass: 0.5 });
  const ringY = useSpring(y - 26, { stiffness: 260, damping: 28, mass: 0.5 });

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[120] hidden h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mix-blend-screen md:block"
        style={{ x: springX, y: springY, scale: isPointer ? 0.7 : 1 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[119] hidden h-14 w-14 rounded-full border border-white/25 bg-white/[0.03] backdrop-blur-sm md:block"
        style={{ x: ringX, y: ringY, scale: isPointer ? 1.35 : 1 }}
      />
    </>
  );
}
