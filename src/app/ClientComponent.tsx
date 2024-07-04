'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import StickyCursor from './components/stickyCursor';


const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
];

const ClientComponent = () => {
  return (
    <div className="relative bg-gray-900 text-white min-h-screen">    
    <StickyCursor stickyElementSrc="/PelotaCursor.png" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        className="relative text-center mb-8 h-[70vh] md:h-[80vh] lg:h-[90vh] flex flex-col items-center justify-center"
      >
        <div className="absolute inset-0 z-0 w-full h-full overflow-hidden" style={{ backgroundColor: '#080A29' }}>
          <Image
            src="/Logo.png"
            layout="fill"
            objectFit="contain"
            alt="Hero Image"
            className="w-full h-full"
          />
        </div>
        <div className="relative z-10 p-8 bg-black bg-opacity-50 rounded-lg">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.75 }}
            className="text-4xl font-bold mb-4"
          >
            Welcome to the Football Stats Page
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.75 }}
            className="text-lg mb-4"
          >
            Explore the latest statistics and insights on your favorite teams and players.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 p-8">
        <motion.div
          className="bg-white text-black rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.75 }}
        >
          <Image
            src="/Futbol-IA.png"
            width={1000}
            height={760}
            className="w-full h-64 object-cover"
            alt="Coming Soon"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Coming Soon</h2>
            <p>Stay tuned for more exciting features and updates!</p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white text-black rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5, duration: 0.75 }}
        >
          <Image
            src="/Pelota.png"
            width={1000}
            height={760}
            className="w-full h-64 object-cover"
            alt="Team Insights"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">Team Insights</h2>
            <p>Analyze team performance and compare with others.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ClientComponent;
