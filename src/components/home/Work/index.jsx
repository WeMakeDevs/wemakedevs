import clsx from 'clsx';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import styles from './index.module.css';

import Adobe from '../../../assets/home/adobe.svg';
import Amazon from '../../../assets/home/amazon.svg';
import Google from '../../../assets/home/google.svg';
import Microsoft from '../../../assets/home/microsoft.svg';
import { container, items, underline } from '../../../lib/animationConfig';

import Cisco from '!file-loader!../../../assets/home/Cisco.svg';
import Razorpay from '!file-loader!../../../assets/home/razorpay.svg';
import Samsung from '!file-loader!../../../assets/home/Samsung.svg';
import Virtusa from '!file-loader!../../../assets/home/virtusa.svg';

const Index = () => {
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
    <div className={styles.section}>
      <div className={clsx('layout', styles.layout)}>
        <h2 className='h1'>Our Students Work at</h2>
        <motion.hr
          variants={underline}
          initial='hidden'
          whileInView='visible'
          className={clsx('styled-hr', styles.headingWorkLine)}
        />
        <motion.div
          ref={ref}
          variants={container}
          initial='hidden'
          animate={animation}
          className={styles.workImg}
        >
          <motion.img
            variants={items}
            className={styles.workGoogle}
            src={Google}
            alt='google'
          />
          <motion.img
            variants={items}
            className={styles.workAmazon}
            src={Amazon}
            alt='amazon'
          />
          <motion.img
            variants={items}
            className={styles.workMicro}
            src={Microsoft}
            alt='microsoft'
          />
          <motion.img
            variants={items}
            className={styles.workAdobe}
            src={Adobe}
            alt='adobe'
          />
          <motion.img
            variants={items}
            className={styles.Samsung}
            src={Samsung}
            alt='samsung'
          />
          <motion.img
            variants={items}
            className={styles.virtusa}
            src={Virtusa}
            alt='virtusa'
          />
          <motion.img
            variants={items}
            className={styles.Cisco}
            src={Cisco}
            alt='Cisco'
          />
          <motion.img
            variants={items}
            className={styles.Razorpay}
            src={Razorpay}
            alt='Razorpay'
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
