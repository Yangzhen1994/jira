import { useEffect, useState } from "react";

export const isFalsy = (val) => (val === 0 ? false : !val);

export const cleanObj = (obj) => {
  const result = { ...obj };
  Object.keys(obj).forEach((key) => {
    if (isFalsy(obj[key])) {
      delete result[key];
    }
  });
  return result;
};

// 自定义hook
export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};
// 自定义hook debounce 节流
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    // 每次value变化 设置一个定时器
    let timeout = setTimeout(() => setDebouncedValue(value), delay);
    // return 后的方法 再每次上一次useEffect运行后后执行 一般负责清理任务
    // 清理掉上次的定时器
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};
