import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {


    return (

        <motion.footer initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>

            <section id="footer" className="flex flex-col sm:flex-row justify-end items-start sm:justify-between sm:items-end px-5 sm:px-12 pb-20 sm:pb-10 h-48 bg-gradient-to-b from-slate-800 to-slate-900">

                <div>
                    <a href="https://github.com/ansamaajoona/portfolio" target="_blank" className="text-gray-500 font-semibold hover:underline hover:cursor-pointer hover:text-emerald-300 duration-100">
                        The code behind this masterpiece
                    </a>
                </div>

                <div>
                    <a href="https://joonaansamaa.dev" target="_blank" className="text-gray-500 font-semibold hover:underline hover:cursor-pointer hover:text-emerald-300 duration-100">
                        &copy; 2023 Joona Ansamaa
                    </a>
                </div>

            </section>

        </motion.footer>

    );
};

export default Footer;
