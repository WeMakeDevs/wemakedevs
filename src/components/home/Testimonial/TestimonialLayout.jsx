import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';

import styles from './index.module.css';

const TestimonialLayout_ = React.forwardRef((props, ref) => {
  const { src, description, from, designation } = props;
  return (
    <div ref={ref} className={styles.card}>
      <img alt='testimonial' className={styles.img} src={src} />
      <p className={styles.description}>{description}</p>
      <hr className={clsx('styled-hr styled-hr--light', styles.hr)} />
      <h2 className={styles.name}>{from}</h2>
      <p className={styles.designation}>{designation}</p>
    </div>
  );
});

const TestimonialLayout = motion(TestimonialLayout_);
export default TestimonialLayout;
