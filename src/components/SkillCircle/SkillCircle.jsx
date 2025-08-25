import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const CircularSkill = ({ skill, targetPercent, size = 120, strokeWidth = 10 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const [percent, setPercent] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true, // scroll এ প্রথমবার view এ এলে animation
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setPercent((prev) => {
          if (prev >= targetPercent) {
            clearInterval(interval);
            return targetPercent;
          }
          return prev + 1;
        });
      }, 20); // animation speed

      return () => clearInterval(interval);
    }
  }, [inView, targetPercent]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <svg width={size} height={size} className="rotate-[-90deg]">
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#E5E7EB"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#gradient)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - percent / 100)}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="100%" stopColor="#4F46E5" />
          </linearGradient>
        </defs>
      </svg>
      <span className="mt-2 font-semibold text-lg text-center">
        {skill} {percent}%
      </span>
    </div>
  );
};

export default function SkillsSection() {
  return (
    <section className="py-16 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">My Skills</h1>
        <div className="flex flex-wrap gap-10 justify-center">
          <CircularSkill skill="React" targetPercent={90} />
          <CircularSkill skill="Node.js" targetPercent={80} />
          <CircularSkill skill="JavaScript" targetPercent={90} />
          <CircularSkill skill="Tailwind CSS" targetPercent={95} />
          <CircularSkill skill="Next.js" targetPercent={80} />
        </div>
      </div>
    </section>
  );
}
