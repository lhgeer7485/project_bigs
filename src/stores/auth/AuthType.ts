export interface AuthType {
  accessToken: string;
  refreshToken: string;

  setAccessToken: (newToken: string) => void;
  removeAccessToken: () => void;

  setRefreshToken: (newToken: string) => void;
  removeRefreshToken: () => void;

  username: string;
  name: string;
  loginUsername: string;
  loginName: string;

  setUsername: (newUsername: string) => void;
  setName: (newName: string) => void;
  setLoginUsername: (newLoginUsername: string) => void;
  setLoginName: (newLoginName: string) => void;

  userList: Record<string, string>;
  addUser: () => void;
  getLoginName: () => string;
}
