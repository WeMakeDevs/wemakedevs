import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import ColumnSection from '../../layout/ColumnSection';
import ListItem from '../../Listitem';
import BannerImage from '../../../assets/home/courses.png';
import { container, items } from '../../../lib/animationConfig';
const Mentorship = ({ background = 'static' }) => {
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
      imgSrc={BannerImage}
      title='Mentorship'
      background={background}
      buttonLinks={[
        {
          href: 'https://github.com/WeMakeDevs/roadmaps',
          name: 'Learn More',
        },
      ]}
      id='mentorship'
    >
      <motion.div
        ref={ref}
        variants={container}
        initial='hidden'
        animate={animation}
      >
        <ListItem variants={items}>
          <span className='highlight higlight-white'>
            A comprehensive answer to all of your mentoring needs
          </span>
          , including educational materials, communities to join, opportunities,
          and much more.
        </ListItem>
        <ListItem variants={items}>
          <span className='highlight higlight-white'>
            Roadmaps to help you stay on track
          </span>
          , including those for open-source, full-stack, devrel, and more.
        </ListItem>
      </motion.div>
    </ColumnSection>
  );
};

export default Mentorship;
