import React, { ReactNode, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface AnimationProps {
    children: ReactNode
}

const Animation: React.FC<AnimationProps> = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (elementRef.current) {
                const { top } = elementRef.current.getBoundingClientRect();
                const isVisible = top <= window.innerHeight - 100;
                setIsVisible(isVisible);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <motion.div
            ref={elementRef}
            initial={{ opacity: 0, y: -100 }}
            animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : -100,
            }}
            transition={{ duration: 0.7 }}
        >
            {children}
        </motion.div>
    );
};

export default Animation;
