import { motion } from 'framer-motion';
import React from 'react';

import styles from './index.module.css';

import ButtonLink from '../../links/ButtonLink';

const BlogCardLayout_ = React.forwardRef((props, ref) => {
  const { src, title, discription, href } = props;

  return (
    <div ref={ref} className={styles.card}>
      <img alt='blog' className={styles.img} src={src} />
      <div className={styles.data}>
        <h2 className='h3'>{title}</h2>
        <p>{discription}</p>
        <ButtonLink href={href}>Read More</ButtonLink>
      </div>
    </div>
  );
});
const BlogCardLayout = motion(BlogCardLayout_);
export default BlogCardLayout;
