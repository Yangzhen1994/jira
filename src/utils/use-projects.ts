import { useEffect } from "react";
import { Project } from "screens/list";
import { useHttp } from "utils/http";

import { useAsync } from "utils/use-async";

import { cleanObj } from "utils/index";

export const useProjects = (param?: Partial<Project>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<Project[]>();

  useEffect(() => {
    run(client("projects", { data: cleanObj(param) }));
  }, [param]);
  return result;
};
