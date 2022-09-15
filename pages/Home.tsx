import { Link } from "react-router-dom";
import { Blog } from "../src/App";

type Props = {
  blogs: Blog[];
};

export function Home({ blogs }: Props) {
  return (
    <ul>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <img
              src={blog.user.profileImage}
              alt={blog.user.name}
              width={50}
            ></img>
            <span>{blog.user.name}</span>
            <h1>{blog.title}</h1>
            <h3>{blog.content}</h3>
          </Link>
        </div>
      ))}
    </ul>
  );
}
