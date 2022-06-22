import { cleanObj } from "utils/index";
// 返回也面url中 ，指定键的参数值
import { useMemo } from "react";
import { useSearchParams, URLSearchParamsInit } from "react-router-dom";
export const useUrlQueryParam = <K extends string>(keys: K[]) => {
  const [searchParams, setSearchParams] = useSearchParams();
  return [
    useMemo(() => {
      return keys.reduce((prev, key) => {
        return { ...prev, [key]: searchParams.get(key) || "" };
      }, {} as { [key in K]: string });
    }, [searchParams, keys]),
    (params: Partial<{ [key in K]: unknown }>) => {
      //Object.fromEntries 传入iterable数据(已经实现了可迭代协议的可迭代对象) 把键值对列表 转化为 键值对对象
      // searchParams即URLSearchParams.get()的返回值 js已经为我们创造 了 iterator 可迭代对象
      const o = cleanObj({
        ...Object.fromEntries(searchParams),
        ...params,
      }) as URLSearchParamsInit;
      return setSearchParams(o);
    },
  ] as const;
};
