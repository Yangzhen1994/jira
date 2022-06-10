import { stringify } from "querystring";
import { FormEvent } from "react";

interface LoginParam {
  username: string;
  password: string;
}

export const LoginScreen = () => {
  const loginFn = (param: LoginParam) => {
    fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(param),
    }).then(async (res) => {
      if (res.ok) {
      }
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    loginFn({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username"></label>
        <input type="text" id={"username"} />
      </div>
      <div>
        <label htmlFor="password"></label>
        <input type="password" id={"password"} />
      </div>
      <button type={"submit"}>登录</button>
    </form>
  );
};
