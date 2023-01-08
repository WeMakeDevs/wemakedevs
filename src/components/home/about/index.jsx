import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import ColumnSection from '../../layout/ColumnSection';
import ListItem from '../../Listitem';
import AboutImage from '../../../assets/home/aboutus.png';
import { container, items } from '../../../lib/animationConfig';

const About = ({ background = 'static' }) => {
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
      id='about'
      imgSrc={AboutImage}
      title='About us'
      buttonLinks={[
        {
          name: 'Join Discord',
          href: 'https://discord.gg/wemakedevs',
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
          We believe that everyone, irrespective of their college or branch,
          technical or non-technical background can make it big.{' '}
          <span className='highlight highlight--white'>
            {' '}
            WeMakeDevs is an initiative built on this thought.{' '}
          </span>
        </ListItem>
        <ListItem variants={items}>
          We provide{' '}
          <span className='highlight highlight--white'>
            hands-on training, mentorship for FREE
          </span>{' '}
          and have an{' '}
          <span className='highlight highlight--white'>
            inclusive community.
          </span>
        </ListItem>
        <ListItem variants={items}>
          Get{' '}
          <span className='highlight highlight--white'>
            expert guidance with career
          </span>
          , Open Source, and internships, jobs around the world.
        </ListItem>
        <ListItem variants={items}>
          We are also having various{' '}
          <span className='highlight highlight--white'>
            events weekly or monthly.{' '}
          </span>
          Do participate in those events to make your skills enhance.
        </ListItem>
      </motion.div>
    </ColumnSection>
  );
};

export default About;
