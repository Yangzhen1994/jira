import { useAuth } from "context/auth-context";
import { Form, Input, Button } from "antd";
import { LongButton } from "./index";
import { useAsync } from "utils/use-async";
export interface LoginParam {
  username: string;
  password: string;
}

export const LoginScreen = ({
  onError,
}: {
  onError: (error: Error) => void;
}) => {
  const { login, user } = useAuth();
  const { run, isLoading } = useAsync(undefined, { throwOnError: true });
  const handleSubmit = (values: { username: string; password: string }) => {
    // event.preventDefault();
    // const username = (event.currentTarget.elements[0] as HTMLInputElement)
    //   .value;
    // const password = (event.currentTarget.elements[1] as HTMLInputElement)
    //   .value;
    // login({ username, password });
    run(login(values)).catch((error) => {
      onError(error);
    });
  };

  return (
    <Form onFinish={handleSubmit}>
      {user ? <div>登录成功，用户名 {user?.name}</div> : null}

      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input placeholder={"请输入用户名"} type="text" id={"username"} />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input placeholder={"请输入密码"} type="password" id={"password"} />
      </Form.Item>
      <LongButton loading={isLoading} htmlType={"submit"} type={"primary"}>
        登录
      </LongButton>
    </Form>
  );
};
