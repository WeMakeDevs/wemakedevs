import { motion } from 'framer-motion';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const ListItem_ = React.forwardRef((props, ref) => {
  const { as, children } = props;
  const Component = as || 'li';
  return (
    <Component
      ref={ref}
      style={{
        display: 'flex',
        gap: '0.4rem',
      }}
    >
      <AiFillStar style={{ flexShrink: 0 }} className='text-primary h2' />
      <span>{children}</span>
    </Component>
  );
});

const ListItem = motion(ListItem_);
export default ListItem;
