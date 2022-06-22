import { useState } from "react";
import styled from "@emotion/styled";
import { Typography } from "antd";
import { List } from "./list";
import { SearchPanel } from "./search-panel";
import { useProjects } from "utils/use-projects";
import { useUsers } from "utils/use-users";
import { useDebounce } from "utils";
import { useDocumentTitle } from "utils/use-documenttitle";
import { useUrlQueryParam } from "utils/url";

const ProjectListScreen = () => {
  const [keys] = useState<("name" | "personId")[]>(["name", "personId"]);
  const [param, setParam] = useUrlQueryParam(keys);

  const debouncedParam = useDebounce(param, 200);
  const { data: list, error, isLoading } = useProjects(debouncedParam);

  const { data: users } = useUsers();

  useDocumentTitle("项目列表", false);

  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel param={param} setParam={setParam} users={users || []} />
      {error ? (
        <Typography.Text type="danger">{error.message}</Typography.Text>
      ) : (
        ""
      )}
      <List loading={isLoading} dataSource={list || []} users={users || []} />
    </Container>
  );
};

ProjectListScreen.whyDidYouRender = true;

const Container = styled.div`
  padding: 3.2rem;
`;

export default ProjectListScreen;
