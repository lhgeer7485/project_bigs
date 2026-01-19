export interface AuthType {
  accessToken: string;
  refreshToken: string;

  setAccessToken: (newToken: string) => void;
  removeAccessToken: () => void;

  setRefreshToken: (newToken: string) => void;
  removeRefreshToken: () => void;
}
