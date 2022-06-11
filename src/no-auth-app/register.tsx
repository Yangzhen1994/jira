import { FormEvent } from "react";
import { useAuth } from "context/auth-context";
export interface LoginParam {
  username: string;
  password: string;
}

export const RegisterScreen = () => {
  const { register, user } = useAuth();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    register({ username, password });
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
      <button type={"submit"}>注册</button>
    </form>
  );
};
