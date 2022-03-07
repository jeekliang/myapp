import React, { useState, FC, createContext } from 'react';
import { Button } from 'antd';
import Child from './child';

const defaultConfig = { front: '1', back: 0.2 };

const ColorContext = createContext(defaultConfig);

const ContextDemo: FC = () => {
  const [value, setValue] = useState(defaultConfig);
  const [num, setNum] = useState(0);
  console.log('ContextDemo', value, num);
  return (
    <ColorContext.Provider value={value}>
      <div>{value.back}</div>
      <Button
        onClick={() =>
          setNum((preValue) => {
            return preValue + 1;
          })
        }
      >
        +
      </Button>
      <Child />
      <Button
        onClick={() => {
          setValue((preValue) => {
            return {
              ...preValue,
              back: Math.floor(Math.random() * 10),
            };
          });
        }}
      >
        按钮
      </Button>
    </ColorContext.Provider>
  );
};

export { ContextDemo, ColorContext };
