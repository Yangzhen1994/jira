// 登录后的界面
import { useAuth } from "context/auth-context";
import ProjectListScreen from "screens/index";
import { Button, Dropdown, Menu } from "antd";
import { Row } from "components/lib";
import styled from "@emotion/styled";
import { ReactComponent as SoftWareLogo } from "assets/software-logo.svg";

export const AuthedApp = () => {
  const { logout, user } = useAuth();
  return (
    <Container>
      <Header between={true}>
        <HeaderLeft gap={true}>
          <SoftWareLogo width={"18rem"} color={"rgb(38,132,255)"} />
          <h2>项目</h2>
          <h2>用户</h2>
        </HeaderLeft>
        <HeaderRight>
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key={"logout"}>
                  <Button type={"link"} onClick={logout}>
                    登出
                  </Button>
                </Menu.Item>
              </Menu>
            }
          >
            <Button type={"link"}>Hi, {user?.name}</Button>
          </Dropdown>
        </HeaderRight>
      </Header>
      <Main>
        <ProjectListScreen />
      </Main>
    </Container>
  );
};

/**
 * grid flex 应用场景
 * 1、要考虑 是 一维布局 flex 还是 二维布局 grid
 * 2、是从内容出发 还是从布局出发
 * 从内容出发： 内容数量不定，希望均匀排列 有内容大小决定占据空间 flex
 * 从布局出发： 先规划网格 数量一般比较固定 然后再把元素往里面填充 grid
 *
 */

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr 6rem;
  height: 100vh;
`;

const PageHeader = styled.header`
  height: 6rem;
`;

/* const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between ;
` */
const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;

const Main = styled.main`
  height: calc(100vh - 6rem);
`;
