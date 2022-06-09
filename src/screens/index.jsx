import React from "react";
import { useEffect, useState } from "react";
import { cleanObj,useMount,useDebounce } from "utils";
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
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/projects?${qs.stringify(cleanObj(debouncedParam))}`).then(async (res) => {
      if (res.ok) {
        setList(await res.json());
      }
    });
  }, [debouncedParam]);
  useMount(()=>{
    fetch(`${process.env.REACT_APP_API_URL}/users`).then(async (res) => {
        if (res.ok) {
          setUsers(await res.json());
        }
      });
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
