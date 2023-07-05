import React from 'react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {


    return (

        <motion.body initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>

            <section id="projects" className="flex flex-col mt-10 mx-4 md:mx-56 h-screen">

                <h2 className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">Things I've built</h2>

            </section>

        </motion.body>

    );
};

export default Projects;
