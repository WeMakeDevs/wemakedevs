import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import ColumnSection from '../../layout/ColumnSection';
import ListItem from '../../Listitem';
import BannerImage from '../../../assets/home/events.png';
import { container, items } from '../../../lib/animationConfig';

const Events = ({ background = 'static' }) => {
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
      id='events'
      imgSrc={BannerImage}
      title='Events'
      background={background}
      buttonLinks={[
        { href: 'https://blog.wemakedevs.org/', name: 'Blogging Challenges' },
        {
          href: 'https://devpost.com/hackathons?search=wemakedevs',
          name: 'Hackathons',
        },
        {
          href: 'https://github.com/wemakedevs/events',
          name: 'Meetups',
        },
      ]}
      direction='right'
    >
      <motion.div
        ref={ref}
        variants={container}
        initial='hidden'
        animate={animation}
      >
        <ListItem variants={items}>
          <span className='highlight highlight--white'>
            All of our events are completely free and open for everyone.
          </span>{' '}
          Fun-filled events with no compromise on quality.
        </ListItem>
        <ListItem variants={items}>
          Events conducted will help{' '}
          <span className='highlight highlight--white'>
            develop various skills of students{' '}
          </span>
          in co-curricular activities and to expose them to the current trends
          in the technical and professional fields.
        </ListItem>
        <ListItem variants={items}>
          Explore the plethora of events & have the opportunity to{' '}
          <span className='highlight highlight--white'>
            grab amazing prizes & goodies!
          </span>
        </ListItem>
      </motion.div>
    </ColumnSection>
  );
};

export default Events;
