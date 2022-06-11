import { useEffect, useState } from "react";
import { cleanObj,useMount,useDebounce } from "utils";
import { useHttp } from "utils/http";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import * as qs from "qs"



export const ProjectList = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const debouncedParam = useDebounce(param,1000)
  const client = useHttp()
  useEffect(() => {
    client('projects',{data:cleanObj(debouncedParam)}).then(setList)
  }, [debouncedParam]);
  useMount(()=>{
    client('users').then(setUsers)
  })
  return (
    <div>
      <SearchPanel
        param={param}
        setParam={setParam}
        users={users}
      ></SearchPanel>
      <List list={list} users={users}></List>
    </div>
  );
};
