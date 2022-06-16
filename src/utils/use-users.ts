import { useMount } from "utils";
import { User } from "screens/search-panel";
import { useAsync } from "utils/use-async";
import { useHttp } from "utils/http";

export const useUsers = (param?: Partial<User>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<User[]>();
  useMount(() => {
    run(client("users"));
  });
  return result;
};
