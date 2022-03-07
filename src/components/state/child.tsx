import { useState, FC } from 'react';

const Child: FC = () => {
  console.log('child render');
  return (
    <div>
      <div>child</div>
    </div>
  );
};

export default Child;
