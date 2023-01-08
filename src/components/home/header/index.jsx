import clsx from 'clsx';
import { motion } from 'framer-motion';

import styles from './index.module.css';

import ArrowLink from '../../links/ArrowLink';
import ButtonLink from '../../links/ButtonLink';
import { container1, items1 } from '../../../lib/animationConfig';
const Header = () => {
  return (
    <section className={styles['header-container']}>
      <motion.div
        variants={container1}
        initial='hidden'
        animate='visible'
        className={clsx('layout', styles.layout)}
      >
        <motion.h1 variants={items1} className={styles.h1}>
          Inspire, Educate, Empower
        </motion.h1>
        <motion.p variants={items1} className={styles.tagLine}>
          This is a community which provides{' '}
          <span className='highlight highlight--light'>
            free hands-on training
          </span>{' '}
          in various fields of computer science and have an inclusive community
          focusing on a{' '}
          <span className='highlight highlight--light'>learn by doing</span>{' '}
          approach.
        </motion.p>
        <motion.div variants={items1} className={styles.links}>
          <ArrowLink
            variant='outline'
            as={ButtonLink}
            href='https://www.youtube.com/@WeMakeDevs'
          >
            Visit YouTube
          </ArrowLink>
          <ArrowLink
            as={ButtonLink}
            href='https://www.youtube.com/@KunalKushwaha/playlists?view=50&sort=dd&shelf_id=3'
          >
            See Courses
          </ArrowLink>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Header;
