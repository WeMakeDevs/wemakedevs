import clsx from 'clsx';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { FaGraduationCap, FaMagic, FaUsers, FaYoutube } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

import styles from './index.module.css';

import { container, items, underline } from '../../../lib/animationConfig';

const Stats = ({ background = 'static' }) => {
  const [ref, inView] = useInView({
    threshold: 0.19,
    // triggerOnce:true,
  });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start('visible');
    } else {
      animation.start('hidden');
    }
  });
  return (
    <section
      className={clsx(
        styles.section,
        background === 'gradient' ? 'gradient' : 'static-bg'
      )}
    >
      <div className={clsx('layout', styles.layout)}>
        <h2 className='h1'>Numbers Say it All</h2>
        <motion.hr
          variants={underline}
          initial='hidden'
          whileInView='visible'
          className={clsx('styled-hr', styles.headingLine)}
        />
        <motion.div
          ref={ref}
          variants={container}
          initial='hidden'
          animate={animation}
          className={styles.statsContainer}
        >
          <motion.div variants={items} className={styles.card}>
            <div className={styles.icon}>
              <FaUsers />
            </div>
            <div className={styles.number}>56,000+</div>
            <div className={styles.title}>Members</div>
          </motion.div>
          <motion.div variants={items} className={styles.card}>
            <div className={styles.icon}>
              <FaMagic />
            </div>
            <div className={styles.number}>20,000+</div>
            <div className={styles.title}>Positive Reviews</div>
          </motion.div>
          <motion.div variants={items} className={styles.card}>
            <div className={styles.icon}>
              <FaYoutube />
            </div>
            <div className={styles.number}>350,000+</div>
            <div className={styles.title}>Youtube</div>
          </motion.div>
          <motion.div variants={items} className={styles.card}>
            <div className={styles.icon}>
              <FaGraduationCap />
            </div>
            <div className={styles.number}>500+</div>
            <div className={styles.title}>Colleges</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
