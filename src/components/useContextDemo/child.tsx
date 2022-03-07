import React, { useState, FC, useContext, memo } from 'react';
import { ColorContext } from './index';
import Son from './son';
import son from './son';

const Child: FC = () => {
  // const color = useContext(ColorContext);
  // const [value, setValue] = useState(0);
  // console.log('child----color', color);
  return (
    <ColorContext.Consumer>
      {({ value }) => <Son value={son} />}
    </ColorContext.Consumer>
  );
};

export default memo(Child);
