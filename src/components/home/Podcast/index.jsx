import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import ColumnSection from '../../layout/ColumnSection';
import ListItem from '../../Listitem';
import BannerImage from '../../../assets/home/events.png';
import { container, items } from '../../../lib/animationConfig';

const Podcast = ({ background = 'static' }) => {
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
      id='podcast'
      imgSrc={BannerImage}
      title='Podcasts'
      background={background}
      buttonLinks={[
        {
          href: 'https://www.youtube.com/watch?v=cl0zMen43E4',
          name: 'Learn More',
        },
      ]}
    >
      <motion.div
        ref={ref}
        variants={container}
        initial='hidden'
        animate={animation}
      >
        <ListItem variants={items}>
          The Open Source Cafe is an initiative to highlight the stories,
          journeys, tips & tricks of some of the amazing community leaders and
          members.
        </ListItem>
        <ListItem variants={items}>
          Learn from the expereinces of industry expert, and get mentored from
          folks around the globe.
        </ListItem>
        <ListItem variants={items}>
          Grow your skills to the next level by gather tricks and tips from
          folks who have made it.
        </ListItem>
      </motion.div>
    </ColumnSection>
  );
};

export default Podcast;
