import { Button } from "@nextui-org/button";
import PropTypes from "prop-types";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteBlog, getBlogs } from "../../../redux/slices/blogSlice";

const BlogCard = ({ blog }) => {
  const dispatch = useDispatch();

  return (
    <a className=" flex flex-col  gap-2 max-w-sm p-6 bg-white border  border-gray-200 rounded-lg shadow hover:bg-gray-300 dark:bg-gray-700 dark:border-gray-70 dark:hover:bg-gray-600 hover:scale-105">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {blog.title}
      </h5>
      <h5 className="mb-2 text-2sm font-bold tracking-tight text-gray-300 dark:text-red-400 underline">
        {blog.author}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {blog.content}
      </p>

      <div className="flex mt-auto  gap-3  justify-end align-bottom">
        <Button isIconOnly color="success" variant="ghost" size="sm">
          <MdEdit />
        </Button>
        <Button
          isIconOnly
          color="danger"
          variant="ghost"
          size="sm"
          onClick={async () =>
            await dispatch(deleteBlog(blog.id), await dispatch(getBlogs()))
          }
        >
          <MdDelete />
        </Button>
      </div>
    </a>
  );
};

BlogCard.propTypes = {
  blog: {
    title: PropTypes.string,
    content: PropTypes.string,
    author: PropTypes.string,
    id: PropTypes.number,
  },
};
export default BlogCard;
