import React, { useState, FC, useReducer } from 'react';
import { Button } from 'antd';

interface IState {
  count: number;
}

interface IAction {
  type: action;
}

enum action {
  INCREMENT = 'increment',
  DECREMENT = 'decrement',
}

function reducer(state: IState, action: IAction) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return { count: state.count };
  }
}

const UseReducerDemo: FC = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <div>value {state.count}</div>
      <Button
        type="primary"
        onClick={() => dispatch({ type: action.INCREMENT })}
      >
        +
      </Button>
      <Button
        type="default"
        onClick={() => dispatch({ type: action.DECREMENT })}
      >
        -
      </Button>
    </div>
  );
};

export default UseReducerDemo;
