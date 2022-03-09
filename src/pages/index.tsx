import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import styles from './index.less';
import { Button } from 'antd';
import ScrollComponent from '../components/scroll';
import StateComponent from '../components/state';
import { ContextDemo } from '../components/useContextDemo';
import UseReducerDemo from '@/components/useReducerDemo';

export default function IndexPage() {
  return (
    <div>
      {/*<ScrollComponent />*/}
      {/* <StateComponent /> */}
      <ContextDemo />
      <div>-------------------------------------------</div>
      <UseReducerDemo />
    </div>
  );
}
