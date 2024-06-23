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
    return <div>Something went wrong: {blogState.errorMessage}</div>;
  }

  return (
    <div className=" mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {blogState.blogList.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogPage;
