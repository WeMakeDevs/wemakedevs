import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';

import styles from './index.module.css';

import UnstyledLink from '../../links/UnstyledLink';
React;
const JoinusCardLayout_ = React.forwardRef((props, ref) => {
  const { title, href, description, icon } = props;
  return (
    <UnstyledLink ref={ref} href={href} className={styles.container}>
      <div className={clsx(styles.card, styles[title])}>
        <div className={clsx(styles.face, styles.face1)}>
          <div className={styles.icon}>{icon}</div>
        </div>
        <div className={clsx(styles.face, styles.face2)}>
          <div className={styles.content}>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </UnstyledLink>
  );
});
const JoinusCardLayout = motion(JoinusCardLayout_);
export default JoinusCardLayout;
