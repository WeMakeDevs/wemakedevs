import clsx from 'clsx';
import { motion } from 'framer-motion';

import styles from './index.module.css';

import ArrowLink from '../../links/ArrowLink';
import ButtonLink from '../../links/ButtonLink';
import { underline } from '../../../lib/animationConfig';
const ColumnSection = ({
  id,
  imgSrc,
  title,
  buttonLinks,
  direction = 'left',
  background = 'static',
  children,
}) => {
  return (
    <section
      id={id}
      className={clsx(
        styles.section,
        background === 'gradient' ? 'gradient' : 'static-bg',
        direction === 'right' && styles.right
      )}
    >
      <div className={clsx('layout', styles.container)}>
        <img className={styles.img} src={imgSrc} alt={title} />
        <div className={styles.infoContainer}>
          <h2 className='h1'>{title}</h2>
          <motion.hr
            variants={underline}
            initial='hidden'
            whileInView='visible'
            className='styled-hr'
          />
          <ul>{children}</ul>
          <div className={styles.btns}>
            {buttonLinks?.map((buttonLink) => (
              <ArrowLink
                key={buttonLink.name}
                href={buttonLink.href}
                className={styles.btn}
                as={ButtonLink}
              >
                {buttonLink.name}
              </ArrowLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColumnSection;
