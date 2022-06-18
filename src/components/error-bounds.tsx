// 如果一个 class 组件中定义了 static getDerivedStateFromError() 或 componentDidCatch()
// 这两个生命周期方法中的任意一个（或两个）时，那么它就变成一个错误边界。
// 当抛出错误后，请使用 static getDerivedStateFromError() 渲染备用 UI ，使用 componentDidCatch() 打印错误信息。
// https://zh-hans.reactjs.org/docs/error-boundaries.html
import React, { ReactNode } from "react";
type FallbackRender = (pops: { error: Error | null }) => React.ReactElement;
// 一个错误边界组件 一定要使用classComponent 方式 <pros, state>
// export class ErrorBoundary extends React.Component<{
//    children: ReactNode,
//     fallbackRender:FallbackRender
// },any>{

// }
// React.PropsWithChildren 传入除了children其他属性 相当于 将children 和 其他属性 类型合并成一个类型 等价于上面注释的内容
export class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{ fallbackRender: FallbackRender }>,
  { error: Error | null }
> {
  state = { error: null };
  // 当子组件 抛出异常 这里会接收 并且调用
  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    const { fallbackRender, children } = this.props;
    if (error) {
      return fallbackRender({ error });
    }
    return children;
  }
}
