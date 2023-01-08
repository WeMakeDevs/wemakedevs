import { motion } from 'framer-motion';
import React from 'react';

import styles from './index.module.css';

import ArrowLink from '../../links/ArrowLink';
import ButtonLink from '../../links/ButtonLink';

const CardLayout_ = React.forwardRef((props, ref) => {
  const { title, link, description, btnText } = props;
  return (
    <div ref={ref} className={styles.card} key={title}>
      <h2 className='h1'> {title} </h2>
      <hr className='styled-hr styled-hr--dark'></hr>
      <p>{description}</p>
      <ArrowLink as={ButtonLink} className={styles.btn} href={link}>
        {btnText}
      </ArrowLink>
    </div>
  );
});

const CardLayout = motion(CardLayout_);
export default CardLayout;
