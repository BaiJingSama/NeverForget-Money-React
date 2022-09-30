import { useEffect, useRef } from "react";

const useUpdate = (fn: () => void, dependency: any[]) => {
  const count = useRef(0);

  useEffect(() => {
    count.current += 1;
  });
  // 当页面刷新计数器加1

  useEffect(() => {
    if (count.current > 1) {
      fn();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fn, dependency]);
  // 从第二次页面渲染开始 每次tags变化了都存储数据
};

export default useUpdate;
