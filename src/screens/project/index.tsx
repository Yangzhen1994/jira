import { Link } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import { KanbanScreen } from "screens/Kanban";
import { EpicScreen } from "screens/Epic";
export const ProjectScreen = () => {
  return (
    <div>
      <h1>ProjectScreen</h1>
      {/* /kanban 相当于跟路由 这里不加/ */}
      <Link to={"kanban"}>看板</Link>
      <Link to={"epic"}>任务组</Link>
      <Routes>
        <Route path={"/kanban"} element={<KanbanScreen></KanbanScreen>}></Route>
        <Route path={"/epic"} element={<EpicScreen></EpicScreen>}></Route>
        <Route index element={<KanbanScreen />} />
      </Routes>
      {/* <Navigate to={window.location.pathname + '/kanban'}></Navigate> */}
    </div>
  );
};
