import clsx from 'clsx';
import { motion } from 'framer-motion';
import * as React from 'react';
import { BsClipboard } from 'react-icons/bs';

import styles from './index.module.css';

import Button from '../../Button';
import ButtonLink from '../../links/ButtonLink';
import { underline } from '../../../lib/animationConfig';
const Partner = ({ background = 'static' }) => {
  const [copied, setCopied] = React.useState(false);
  const copyEmail = () => {
    navigator.clipboard.writeText('kunal@wemakedevs.org');
    setCopied(true);
  };
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (copied) setCopied(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [copied]);

  return (
    <section
      className={clsx(
        styles.section,
        background === 'gradient' ? 'gradient' : 'static-bg'
      )}
    >
      <div className={clsx('layout', styles.layout)}>
        <h2 className='h1'>Partner with us</h2>
        <motion.hr
          variants={underline}
          initial='hidden'
          whileInView='visible'
          className='styled-hr'
        />
        <p>
          You can partner with us if you want to host hackathons, talks and
          events. Let’s help each other and grow together!
        </p>
        <div className={styles.btns}>
          <ButtonLink
            variant='light-outline'
            href='mailto:kunal@wemakedevs.org'
            className='h3'
            isDarkBg={true}
          >
            kunal@wemakedevs.org
          </ButtonLink>
          <Button
            className={clsx('h3', styles.copy, copied && styles.copied)}
            onClick={copyEmail}
          >
            <BsClipboard />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Partner;
