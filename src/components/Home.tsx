import useBoardList from "../hooks/useBoardList.tsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ZustandStore from "../stores/store.tsx";

const Home = () => {
  const { data, onClick } = useBoardList();
  const accessToken = ZustandStore((state) => state.accessToken);

  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) navigate("/Login");
  }, [accessToken, navigate]);

  return (
    <main>
      <p>{data?.content.length}</p>
      <button onClick={onClick}>목록</button>
    </main>
  );
};

export default Home;
