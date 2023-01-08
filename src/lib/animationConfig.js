export const container1 = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      // duration:0.2
    },
  },
};
export const items1 = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.29,
      // delay: 1.3,
    },
  },
};
export const container = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      // duration:0.2
    },
  },
};
export const items = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.29,
      // delay: 1.3,
    },
  },
};

export const underline = {
  hidden: {
    width: '1rem',
  },
  visible: {
    width: ['8rem', '12rem', '8rem'],
    transition: {
      delay: 0.1,
    },
  },
};
export const subscribe = {
  hidden: {
    x: 0,
  },
  visible: {
    x: [-3, 3],

    transition: {
      type: 'spring',
      repeat: 3,
      repeatType: 'reverse',
    },
  },
};

export const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 4, yoyo: Infinity, ease: 'easeInOut' },
  },
};
export const svg = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
