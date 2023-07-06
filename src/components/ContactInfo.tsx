import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons'

import {
    faGithub,
    faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

const ContactInfo: React.FC = () => {


    return (

        <motion.body initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>

            <section id="contactinfo" className="flex flex-col mt-24 mx-4 md:mx-56 h-48">

                <h2 className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">Contact info & socials</h2>

                <div className="flex flex-col py-2 mt-2">

                    <div className="flex py-2">
                        <span className="mr-3 w-6"><FontAwesomeIcon icon={faEnvelope} className="text-emerald-300" /></span>
                        <a href="mailto:joona.ansa@gmail.com" target="_blank" className="tracking-widest text-gray-200 semibold hover:underline">joona.ansa@gmail.com</a>
                    </div>

                    <div className="flex py-2">
                        <span className="mr-3 w-6"><FontAwesomeIcon icon={faLinkedinIn} className="text-emerald-300" /></span>
                        <a href="https://www.linkedin.com/in/joona-ansamaa-8941131a9/" target="_blank" className="tracking-widest text-gray-200 semibold hover:underline">joona-ansamaa-8941131a9</a>
                    </div>

                    <div className="flex py-2">
                        <span className="mr-3 w-6"><FontAwesomeIcon icon={faGithub} className="text-emerald-300" /></span>
                        <a href="https://github.com/ansamaajoona" target="_blank" className="tracking-widest text-gray-200 semibold hover:underline">ansamaajoona</a>
                    </div>

                </div>

            </section>

        </motion.body>

    );
};

export default ContactInfo;
