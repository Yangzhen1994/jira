// 登录后的界面
import { useAuth } from "context/auth-context";
import { ProjectList } from "screens/index";

export const AuthedApp = () => {
  const { logout } = useAuth();
  return (
    <div>
      <button onClick={logout}>登出</button>
      <ProjectList />
    </div>
  );
};
