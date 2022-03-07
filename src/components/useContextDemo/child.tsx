import React, { useState, FC, useContext } from 'react';
import { ColorContext } from './index';

const Child: FC = () => {
  const color = useContext(ColorContext);
  const [value, setValue] = useState(0);
  console.log('child----color', color);
  return (
    <div>
      <div>{value}</div>
    </div>
  );
};

export default Child;
