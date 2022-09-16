import { useEffect, useState } from "react";
import "./App.css";
import LeftMenu from "../components/LeftMenu";

import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { BlogSec } from "../pages/BlogSec";
import { PageNotFound } from "../pages/PageNotFound";

export type Blog = {
  id: number;
  title: string;
  content: string;
  user: User;
  userId: number;
  likes: [];
  responds: Comment[];
};

export type User = {
  id: number;
  name: string;
  email: string;
  profileImage: string;
  blogs: Blog[];
};
type Comment = {
  id: number;
  comment: string;
  user: User;
};

function App() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  // const [user, setUser] = useState<User | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5136/blogs")
      .then((res) => res.json())
      .then((blogsFromDb) => setBlogs(blogsFromDb));
  }, []);

  // useEffect(() => {
  //   fetch(`http://localhost:5136/users/${user?.id}`)
  //     .then((res) => res.json())
  //     .then((userFromDb) => setUser(userFromDb));
  // }, [user?.id]);

  return (
    <div className="App">
      <LeftMenu />
      <main>
        <Routes>
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home blogs={blogs} />} />
          <Route path="/blogs/:id" element={<BlogSec />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
