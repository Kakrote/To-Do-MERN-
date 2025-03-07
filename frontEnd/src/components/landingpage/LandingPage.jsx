import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const LandingPage = () => {
  return (
    <div className='min-h-screen p-8 text-white '>

      {/* Header */}
      <motion.header 
        className='text-center py-12 text-white rounded-lg shadow-md mb-2'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h1 className='font-bold text-5xl'>Welcome to My App</h1>
      </motion.header>

      {/* About App */}
      <motion.section 
        id='AboutApp' 
        className='text-center p-8 rounded-lg shadow-md shadow-blue-600/50 mb-8'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className='font-bold text-3xl mb-4  text-blue-600'>About App</h2>
        <p className='leading-relaxed mx-auto  '>
          This app helps users manage their tasks efficiently. With features like priority lists, real-time updates using Redux, and seamless user authentication, it's designed to simplify your workflow.
        </p>
      </motion.section>

      {/* About Developer */}
      <motion.section 
        id='AboutDevloper' 
        className='p-8 rounded-lg shadow-md shadow-blue-600/50 mb-3'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className='font-bold text-3xl mb-6 text-blue-600 text-center'>About Developer</h2>
        <div className='flex flex-col md:flex-row items-center justify-around gap-8'>
          <div className='max-w-xl leading-relaxed text-center md:text-left'>
            <p>
              Hi, <strong>I'm Anshul Pundir</strong>, a passionate developer skilled in the MERN stack and data analytics. This project is a blend of my skills in full-stack development and my love for building user-centric applications.
            </p>
          </div>
          <div className='rounded-full overflow-hidden w-80 h-80 border-4 border-blue-600 shadow-md'>
            <img src='/profile2.png' alt='Profile' className='w-full h-full object-cover' />
          </div>
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section 
        className='py-11 px-8 shadow-md shadow-blue-600/60'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className='text-4xl font-semibold mb-6 text-center'>Contact Me</h2>
        <div className='flex justify-center gap-4'>
          <a 
            href="mailto:anshul.pundir111@gmail.com" 
            className='bg-white text-blue-800 px-6 py-2 rounded-lg font-medium hover:bg-gray-300 transition-all'
          >
            Email
          </a>
          <a 
            href="https://github.com/Kakrote" 
            target="_blank" 
            rel="noopener noreferrer" 
            className='bg-white text-blue-800 px-6 py-2 rounded-lg font-medium hover:bg-gray-300 transition-all'
          >
            GitHub
          </a>
        </div>
      </motion.section>
    </div>
  );
};

export default LandingPage;
