import React, { useContext } from "react";
import List from "./List.jsx";
import useFetch from "../useFetch.js";
import { UserContext } from "../UserContext.js";

const Home = () => {
  const { user } = useContext(UserContext);
  const { data: blogs, isPending, error } = useFetch(
    "/" + (user && user.isAdmin ? "/admin/posts" : "/posts")
  );
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <List dataList={blogs} />}
    </div>
  );
};

export default Home;
