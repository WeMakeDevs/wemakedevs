import clsx from 'clsx';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import styles from './index.module.css';

import CardLayout from './CardLayout';
import { container, items } from '../../../lib/animationConfig';

const Cards = ({ background = 'static' }) => {
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
        <motion.div
          ref={ref}
          variants={container}
          initial='hidden'
          animate={animation}
          className={styles.cards}
        >
          {data.map((item) => (
            <CardLayout variants={items} key={item.title} {...item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Cards;

const data = [
  {
    title: 'Education',
    description:
      'We provide FREE hands-on training in various fields of computer science and have an inclusive community focussing on a learn by doing approach.Our education programs are designed to be intensive, hands-on, and practical, so you can learn by doing and apply what you learn to real-world projects.',
    link: 'https://www.youtube.com/@KunalKushwaha/playlists?view=50&sort=dd&shelf_id=3',
    btnText: 'View Courses',
  },
  {
    title: 'Events',
    description:
      "Our events include intensive bootcamps, technical workshops, and networking events. Whether you're just starting out or looking to take your skills to the next level, we have something for everyone. Check out our current events and sign up now to reserve your spot. We look forward to seeing you at an event soon!",
    link: 'https://github.com/WeMakeDevs/events',
    btnText: 'Check Events',
  },
  {
    title: 'Mentorship',
    description:
      'Welcome to the mentorship program at WeMakeDevs! Are you an aspiring web developer looking for guidance and support on your journey? Our mentorship program is here to help. Our experienced mentors will work with you one-on-one and provide guidance, support, and advice to help you achieve your goals.',
    link: 'https://github.com/WeMakeDevs/roadmaps',
    btnText: 'View Roadmaps',
  },
];
