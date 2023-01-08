import clsx from 'clsx';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import styles from './index.module.css';

import ekjottest2 from './../../../assets/home/ekjottest2.jpg';
import rahultest1 from './../../../assets/home/rahultest1.jpg';
import sajjantest3 from './../../../assets/home/sajjantest3.jpg';
import TestimonialLayout from './TestimonialLayout';
import { container, items, underline } from '../../../lib/animationConfig';

const Testimonials = ({ background = 'static' }) => {
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
      id='testimonials'
      className={background === 'gradient' ? 'gradient' : 'static-bg'}
    >
      <div className={clsx('layout', styles.layout)}>
        <h2 className='h1'>Testimonials</h2>
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
          className={styles.cardWrapper}
        >
          {data.map((item) => (
            <TestimonialLayout variants={items} key={item.from} {...item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

const data = [
  {
    src: rahultest1,
    description:
      "The way this guy is teaching me Java is just Mind Blowing and Brilliant. I've never thought that these topics would be that much easier. Kudos to @kunalstwt #DSAwithKunal",
    from: 'RAHUL KUMAR',
    designation: '@rahulstwt_',
  },
  {
    src: ekjottest2,
    description:
      "Thanks @kunalstwt for helping me understand the benefits of Binary Search and how it's a lot effective than linear search. Understood the theory now and will be solving questions with @WeMakeDevs and build up the concept. #DSAwithKunal",
    from: 'EKJOT SINGH',
    designation: '@Ekjotmakhija',
  },
  {
    src: sajjantest3,
    description:
      'Done with amazing playlist of Object Oriented Programming by @kunalstwt bhaiya. Every concept was explained very well and got to know so many new things. Thanks kunal bhaiya for such an amazing playlist. #DSAwithKunal',
    from: 'SAJJAN YADAV',
    designation: '@SajjanStr',
  },
];
