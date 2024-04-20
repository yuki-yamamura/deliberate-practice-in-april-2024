'use client';

import Box from './Box';
import { useState } from 'react';

import styles from './index.module.scss';

const Boxes = () => {
  const [quantity, setQuantity] = useState(1);
  const indexes = Array.from(new Array(quantity), (_, index) => index + 1);

  const handleButtonClick = () => setQuantity((prev) => prev + 1);

  return (
    <div>
      <button
        type="button"
        onClick={handleButtonClick}
        className={styles.button}
      >
        Add new box
      </button>
      <ul className={styles.list}>
        {indexes.map((index) => (
          <Box index={index} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default Boxes;
1;
