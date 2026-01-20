import { createBrowserRouter } from "react-router-dom";
import Login from "./components/Login.tsx";
import Home from "./components/Home.tsx";
import Signup from "./components/Signup.tsx";
import Detail from "./components/Detail.tsx";
import ZustandStore from "./stores/store.tsx";
import { useShallow } from "zustand/react/shallow";
import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }: { children: ReactNode }) => {
  const [accessToken, refreshToken] = ZustandStore(
    useShallow((state) => [state.accessToken, state.refreshToken]),
  );

  // 토큰 둘 다 없으면 로그인 페이지로 이동
  if (!accessToken && !refreshToken) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireAuth>
        <Home />
      </RequireAuth>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/boards/:id",
    element: (
      <RequireAuth>
        <Detail />
      </RequireAuth>
    ),
  },
]);

export default router;
