import { motion } from 'framer-motion';
import Link from 'next/link';

import { MessageIcon, VercelIcon, SparklesIcon  } from './icons';

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-3xl mx-auto md:mt-20"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="rounded-xl p-6 flex flex-col gap-8 leading-relaxed text-center max-w-xl">
        <p className="flex flex-row justify-center gap-4 items-center">
          <SparklesIcon size={32} />
          <span>+</span>
          <MessageIcon size={32} />
        </p>
        <p>
          This is a{' '}
          <Link
            className="font-medium underline underline-offset-4"
            href=" "
            target="_blank"
          >
            confidential
          </Link>{' '}
          chatbot built by RCEES AI Lab. It uses
          high{' '}
          <code className="rounded-md bg-muted px-1 py-0.5">LEVEL</code>{' '}
          Knowledge on Energy its Related issues and{' '}
          <code className="rounded-md bg-muted px-1 py-0.5">RCEES Model</code> 
          to create a seamless chat experience.
        </p>
        <p>
          You can learn more about the RCEES by visiting the{' '}
          <Link
            className="font-medium underline underline-offset-4"
            href="https://rcees.uenr.edu.gh/"
            target="_blank"
          >
            Info
          </Link>
          .
        </p>
      </div>
    </motion.div>
  );
};
