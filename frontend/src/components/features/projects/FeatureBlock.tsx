import React from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, transition } from "@/config/animations";

interface FeatureBlockProps {
  title: string;
  features: string[];
  color: {
    bg: string;
    border: string;
    text: string;
    icon: string;
    darkBg: string;
    darkBorder: string;
    darkText: string;
  };
  delay?: number;
}

export const FeatureBlock: React.FC<FeatureBlockProps> = ({
  title,
  features,
  color,
  delay = 0,
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  if (features.length === 0) return null;

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{ ...transition, delay }}
      className={`${color.darkBg} p-4 rounded-lg border ${color.border} ${color.darkBorder}`}
      style={{ backgroundColor: "rgba(31, 41, 55, 0.6)" }}
    >
      <h4
        className={`text-md font-semibold ${color.text} ${color.darkText} mb-3 flex items-center`}
      >
        <span className={`w-3 h-3 ${color.icon} rounded-full mr-2`}></span>
        {title}
      </h4>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            className="flex items-start text-sm"
            variants={fadeInUp}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ ...transition, delay: delay + index * 0.1 }}
          >
            <div
              className={`w-1.5 h-1.5 ${color.icon} rounded-full mt-2 mr-2 flex-shrink-0`}
            />
            <span className={`${color.text} ${color.darkText}`}>{feature}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};
