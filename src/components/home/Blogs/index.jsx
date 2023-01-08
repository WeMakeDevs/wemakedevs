import clsx from 'clsx';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import styles from './index.module.css';

import BlogCardLayout from './BlogCardLayout';
import blog1 from '../../../assets/blogs/blog1.png';
import blog2 from '../../../assets/blogs/blog2.png';
import blog3 from '../../../assets/blogs/blog3.png';
import { container, items, underline } from '../../../lib/animationConfig';

const Blogs = ({ background = 'static' }) => {
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
      id='blogs'
      className={background === 'gradient' ? 'gradient' : 'static-bg'}
    >
      <div className={clsx('layout', styles.layout)}>
        <h2 className='h1'>Blogs</h2>
        <motion.hr
          ref={ref}
          variants={underline}
          initial='hidden'
          whileInView='visible'
          className={clsx('styled-hr', styles.headingLine)}
        />
        <motion.div
          variants={container}
          initial='hidden'
          animate={animation}
          className={styles.cardWrapper}
        >
          {data.map((item) => (
            <BlogCardLayout variants={items} key={item.title} {...item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;

const data = [
  {
    title: 'KubeLetter',
    src: blog1,
    discription:
      'We invite you to check out our kubeletters, where we provide updates and insights on all about cloud native.',
    href: 'https://blog.wemakedevs.org/series/kubeletter',
  },
  {
    title: 'Case Study',
    src: blog2,
    discription:
      'Our case studies feature real-world use cases and the influence of various technologies on enterprises.',
    href: 'https://blog.wemakedevs.org/series/case-studies',
  },
  {
    src: blog3,
    title: 'Tutorials',
    discription:
      "Here, you'll find a variety of in-depth guides and resources to help you learn new skills and technologies.",
    href: 'https://blog.wemakedevs.org',
  },
];
