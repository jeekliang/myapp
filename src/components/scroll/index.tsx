import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from './index.less';

const Index = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(Array.from({ length: 15 }));
  }, []);
  const fetchMoreData = () => {
    setTimeout(() => {
      setList(list.concat(Array.from({ length: 15 })));
    }, 1500);
  };
  return (
    <div className={styles.layout}>
      <InfiniteScroll
        height={260}
        dataLength={list.length}
        style={{ display: 'flex', flexDirection: 'column-reverse' }}
        next={() => {
          console.log('next');
          // fetchMoreData();
        }}
        hasMore={list.length < 90}
        inverse={true}
        loader={<div style={{ height: '50px', background: 'red'}}>
          <h4>Loading...</h4>
        </div>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        scrollThreshold={'20px'}
      >
        {list.map((i, index) => (
          <div key={index}>div - #{index + 1}</div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Index;
