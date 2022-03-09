import React, { useState, FC } from 'react';

const Son: FC<any> = (props) => {
  console.log('son---props', props);
  const [value, setValue] = useState(0);
  return (
    <div>
      <div>{value}</div>
    </div>
  );
};

export default Son;
