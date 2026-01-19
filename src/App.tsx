import "./App.css";
import router from "./router.tsx";
import { RouterProvider } from "react-router-dom";
import Loading from "./components/Loading.tsx";

function App() {
  return (
    <>
      <Loading />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
