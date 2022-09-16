import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Blog } from "../src/App";

function BlogDetails() {
  const [blog, setBlog] = useState<Blog | null>(null);
  const params = useParams();

  useEffect(() => {
    fetch(`http://localhost:5136/blogs/${params.id}`)
      .then((res) => res.json())
      .then((blogFromDb) => setBlog(blogFromDb));
  }, []);
  if (blog === null) return <p> Loading...</p>;
  return (
    <div>
      <img src={blog.user.profileImage} alt={blog.user.name} width={40} />
      <span>{blog.user.name}</span>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <button>
        <img
          src="https://cdn-icons-png.flaticon.com/128/2589/2589175.png"
          alt="likes"
          width={30}
        />
        {blog.likes.length}
      </button>
      <div>
        <button>
          <img
            src="https://cdn-icons-png.flaticon.com/128/1947/1947247.png"
            alt="comments"
            width={30}
          />

          {blog.responds
            ? blog.responds.map((respond) => <span>{respond.comment}</span>)
            : ""}
        </button>
      </div>
    </div>
  );
}

export default BlogDetails;
