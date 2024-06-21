import { useEffect } from "react";
import BlogCard from "./Components/BlogCard";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../../redux/slices/blogSlice";

const BlogPage = () => {
  const dispatch = useDispatch();
  const blogState = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);
  if (blogState.isLoading) {
    return <div>Loading...</div>;
  }

  if (blogState.isError) {
    return <div>{blogState.errorMessage}</div>;
  }

  return (
    <div className="flex flex-wrap gap-3 mt-4 mx-4 ">
      {blogState.blogList.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogPage;
