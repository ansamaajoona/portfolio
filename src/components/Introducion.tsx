import React from 'react';
import { motion } from 'framer-motion';

const Introduction: React.FC = () => {
    return (
        <motion.body initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <section id="about" className="flex flex-col mt-10 mx-4 md:mx-56 lg:h-screen">
                <div className="flex flex-col">
                    <span className="text-emerald-300 font-mono">Hello there, my name is</span>
                    <h1 className="font-extrabold my-3 text-transparent text-4xl md:text-8xl bg-clip-text bg-gradient-to-r from-emerald-200 to-emerald-800">
                        Joona Ansamaa
                    </h1>
                    <h2 className="font-extrabold text-transparent text-2xl md:text-4xl bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
                        I build s**tware with passion
                    </h2>
                </div>
                <div className="flex flex-col justify-between mt-5 w-full md:w-1/2">
                    <span className="font-mono text-gray-300">
                        I'm actively seeking opportunities to contribute my skills in developing high-quality software that addresses
                        and solves challenging business problems.
                    </span>
                    <a
                        href="mailto:joona.ansa@gmail.com"
                        className="flex justify-center items-center block mt-5 w-48 font-semibold border border-emerald-300 text-emerald-300 h-12 rounded shadow-md hover:cursor-pointer hover:bg-emerald-300 hover:text-black duration-100"
                    >
                        Let's discuss!
                    </a>
                </div>
            </section>
        </motion.body>
    );
};

export default Introduction;
