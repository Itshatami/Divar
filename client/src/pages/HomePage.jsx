import { useQuery } from "@tanstack/react-query";

import Main from "../components/templates/Main";
import Sidebar from "../components/templates/Sidebar";
import { getAllPosts } from "../services/user";
import Loader from "../components/modules/Loader";

const style = { display: "flex" };

function HomePage() {
  const { data, isLoading } = useQuery(["post-list"], getAllPosts);
  console.log({ data, isLoading });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div style={style}>
          <Sidebar />
          <Main />
        </div>
      )}
    </>
  );
}

export default HomePage;
