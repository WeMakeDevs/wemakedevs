import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import ColumnSection from '../../layout/ColumnSection';
import ListItem from '../../Listitem';
import BannerImage from '../../../assets/home/courses.png';
import { container, items } from '../../../lib/animationConfig';

const Courses = ({ background = 'static' }) => {
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
    <ColumnSection
      id='courses'
      imgSrc={BannerImage}
      title='Courses'
      direction='right'
      buttonLinks={[
        {
          name: 'Explore Courses',
          href: 'https://www.youtube.com/@KunalKushwaha/playlists?view=50&sort=dd&shelf_id=3',
        },
      ]}
      background={background}
    >
      <motion.div
        ref={ref}
        variants={container}
        initial='hidden'
        animate={animation}
      >
        <ListItem variants={items}>
          All courses are FREE while never compromising on quality.
        </ListItem>
        <ListItem variants={items}>
          We cover every topic in detail with a hands-on approach and mentor you
          to stand out to get opportunities by breaking all the barriers.
        </ListItem>
        <ListItem variants={items}>
          Explore a wide range of courses including Data Structures &
          Algorithms, Web Development, DevOps, Machine Learning, and more!
        </ListItem>
        <motion.h3
          variants={items}
          className='h1'
          style={{
            marginTop: '1rem',
          }}
        >
          $0/month
        </motion.h3>
      </motion.div>
    </ColumnSection>
  );
};

export default Courses;
