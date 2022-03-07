import {useState, useEffect, useRef, useLayoutEffect} from 'react'
import styles from './index.less';
import InfiniteScroll from 'react-infinite-scroller';

export default function IndexPage() {
  const [list, setList] = useState([])
  const containerRef = useRef<HTMLDivElement | null>(null);
  const currentRef = useRef(1)
  const goToPrevScroll = (oldScrollHeight = 0) => {
    const list = containerRef.current;
    if (list) {
      list.scrollTop = list.scrollHeight - oldScrollHeight + list.scrollTop;
    }
  }
  useEffect(() => {
    const res = new Array(15).fill(containerRef.current)
    let oldScrollHeight = containerRef?.current?.scrollHeight;
    setTimeout(() => {
      setList(res)
      currentRef.current =  currentRef.current + 1
      if (containerRef?.current?.scrollTop === 0) {
        goToPrevScroll(oldScrollHeight)
      }
    }, 1000)
  }, [])
  return (
    <div
      style={{background: '#eee', width: '200px', height: '300px', overflowY: 'auto'}}
      ref={containerRef}
    >
      <InfiniteScroll
        initialLoad={false}
        loadMore={() => {
          console.log('loadMore')
          // setTimeout(() => {
          //   const res = new Array(15).fill(currentRef.current)
          //   const result = list.concat(res)
          //   setList(result)
          //   currentRef.current += 1
          // }, 2000)
        }}
        isReverse={true}
        hasMore={true}
        loader={<div className="loader" key={0}>Loading ...</div>}
        useWindow={false}
        threshold={100}
      >
        <div>
          {
            list.map((item, index) => {
              return (
                <div style={{background: 'pink', height: '30px'}} key={index}>{index}</div>
              )
            })
          }
        </div>
      </InfiniteScroll>
    </div>
  );
}
