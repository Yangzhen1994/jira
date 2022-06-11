import React, { ReactNode, useState } from "react";
import * as auth from "auth-provider";
import { http } from "utils/http";
import { useMount } from "utils";
interface AuthForm {
  username: string;
  password: string;
}

const boorStrapUser = async () => {
  let user = null;
  const token = auth.getToken();
  if (token) {
    const data = await http("me", { token });
    user = data.user;
  }

  return user;
};

const AuthContext = React.createContext<
  | {
      user: auth.User | null;
      register: (form: AuthForm) => Promise<void>;
      login: (form: AuthForm) => Promise<void>;
      logout: () => Promise<void>;
    }
  | undefined
>(undefined);
AuthContext.displayName = "AuthContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<auth.User | null>(null);

  const login = (form: AuthForm) => {
    return auth.login(form).then((user) => setUser(user));
  };
  const register = (form: AuthForm) => {
    return auth.register(form).then((user) => setUser(user));
  };
  const logout = () => auth.logout().then(() => setUser(null));

  useMount(() => {
    // 这里直接 setUser   等价于 .then(user => setUser(user))
    boorStrapUser().then(setUser);
  });
  return (
    <AuthContext.Provider
      children={children}
      value={{ user, login, register, logout }}
    />
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth必须在AuthProvider中使用");
  }
  return context;
};
