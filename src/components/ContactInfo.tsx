import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import Animation from './Animation';

import {
    faGithub,
    faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

const ContactInfo: React.FC = () => {


    return (

        <Animation>

            <section id="contactinfo" className="flex flex-col mt-24 mx-4 md:mx-56 h-48">

                <h2 className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">Contact info & socials</h2>

                <div className="flex flex-col py-2 mt-2">

                    <div className="flex py-2">
                        <span className="mr-3 w-6"><FontAwesomeIcon icon={faEnvelope} className="text-emerald-300" /></span>
                        <a href="mailto:joona.ansa@gmail.com" target="_blank" className="tracking-widest text-gray-200 semibold hover:underline">joona.ansa@gmail.com</a>
                    </div>

                    <div className="flex py-2">
                        <span className="mr-3 w-6"><FontAwesomeIcon icon={faLinkedinIn} className="text-emerald-300" /></span>
                        <a href="https://www.linkedin.com/in/ansamaajoona/" target="_blank" className="tracking-widest text-gray-200 semibold hover:underline">ansamaajoona</a>
                    </div>

                    <div className="flex py-2">
                        <span className="mr-3 w-6"><FontAwesomeIcon icon={faGithub} className="text-emerald-300" /></span>
                        <a href="https://github.com/ansamaajoona" target="_blank" className="tracking-widest text-gray-200 semibold hover:underline">ansamaajoona</a>
                    </div>

                </div>

            </section>

        </Animation>

    );
};

export default ContactInfo;
