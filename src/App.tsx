import { useEffect, useState } from "react";
import "./App.css";
import LeftMenu from "../components/LeftMenu";

type Blog = {
  id: number;
  title: string;
  content: string;
  user: User;
  userId: number;
  likes: number;
  responds: string[];
};

type User = {
  id: number;
  name: string;
  email: string;
  profileImage: string;
  blogs: Blog[];
};
function App() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("http://localhost:5136/blogs")
      .then((res) => res.json())
      .then((blogsFromDb) => setBlogs(blogsFromDb));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5136/users")
      .then((res) => res.json())
      .then((usersFromDb) => setUsers(usersFromDb));
  }, []);

  return (
    <div className="App">
      <LeftMenu />
      <ul>
        {blogs.map((blog) => (
          <div>
            <img
              src={blog.user.profileImage}
              alt={blog.user.name}
              width={50}
            ></img>
            <span>{blog.user.name}</span>
            <h1>{blog.title}</h1>
            <h3>{blog.content}</h3>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
