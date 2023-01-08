import clsx from 'clsx';
import { motion } from 'framer-motion';

import styles from './index.module.css';

import { data } from './data';
import Accordion from '../../Accordion/Accordion';
import { underline } from '../../../lib/animationConfig';
const FAQ = ({ background = 'static' }) => {
  return (
    <section
      id='faq'
      className={clsx(
        styles.section,
        background === 'gradient' ? 'gradient' : 'static-bg'
      )}
    >
      <div className={clsx('layout', styles.layout)}>
        <h2 className='h1'>FAQs</h2>
        <motion.hr
          variants={underline}
          initial='hidden'
          whileInView='visible'
          className={clsx('styled-hr', styles.headingLine)}
        />
        <div className={styles.faqContainer}>
          <Accordion data={data.faqs.slice(0, 3)}></Accordion>
          <Accordion data={data.faqs.slice(3, 6)}></Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
