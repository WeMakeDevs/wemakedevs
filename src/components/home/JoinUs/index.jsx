import clsx from 'clsx';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { FaDiscord, FaScroll, FaTelegram } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

import styles from './index.module.css';

import JoinusCardLayout from './JoinUsCardLayout';
import { container, items, underline } from '../../../lib/animationConfig';

function JoinUs() {
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
    <section className={styles.section} id='joinus'>
      <div className={clsx(styles.layout, 'layout')}>
        <h2 className='h1'>Join Us</h2>
        <motion.hr
          variants={underline}
          intial='hidden'
          whileInView='visible'
          className='styled-hr'
        />
        <motion.div
          ref={ref}
          variants={container}
          initial='hidden'
          animate={animation}
          className={styles.wrapperCard}
        >
          {data.map((item) => (
            <JoinusCardLayout variants={items} key={item.title} {...item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default JoinUs;

const data = [
  {
    title: 'discord',
    href: 'https://discord.gg/wemakedevs',
    description: 'Join the community of 56k+ folks',
    icon: <FaDiscord color='white' size='130' />,
  },
  {
    title: 'telegram',
    href: 'https://t.me/WeMakeDevs',
    description: 'Join the community of 56k+ folks',
    icon: <FaTelegram color='white' size='130' />,
  },
  {
    title: 'newsletter',
    href: 'https://blog.wemakedevs.org/',
    description: 'Join the community of 56k+ folks',
    icon: <FaScroll color='white' size='130' />,
  },
];
