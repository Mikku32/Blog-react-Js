import { Button } from "@nextui-org/button";
import PropTypes from "prop-types";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteBlog, getBlogs, updateBlog } from "../../redux/slices/blogSlice";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/modal";

import { useState } from "react";
import { Input } from "@nextui-org/input";
import { toast } from "sonner";

const BlogCard = ({ blog }) => {
  const dispatch = useDispatch();

  const [isOpen, setOpenModal] = useState(false);

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
        <Button
          isIconOnly
          color="success"
          variant="ghost"
          size="sm"
          onClick={() => setOpenModal(true)}
        >
          <MdEdit />
        </Button>

        <Button
          isIconOnly
          color="danger"
          variant="ghost"
          size="sm"
          onClick={async () => {
            await dispatch(deleteBlog(blog.id));
            await dispatch(getBlogs());
          }}
        >
          <MdDelete />
        </Button>
      </div>

      <Modal backdrop="blur" isOpen={isOpen} onOpenChange={setOpenModal}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit Blog
              </ModalHeader>
              <ModalBody>
                <form
                  className="flex flex-col gap-3"
                  id="edit-blog"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const title = e.target.title.value;
                    const content = e.target.content.value;
                    const author = e.target.author.value;

                    try {
                      await dispatch(
                        updateBlog({
                          title: title,
                          content: content,
                          author: author,
                          id: blog.id,
                        })
                      ).unwrap();
                      await dispatch(getBlogs());
                      toast.success("WooHoo.. Updated");
                    } catch (error) {
                      toast.error("Something went wrong");
                    }
                    onClose();
                  }}
                >
                  <Input
                    label="Title"
                    id="title"
                    name="title"
                    defaultValue={blog.title}
                  />
                  <Input
                    label="Content"
                    id="content"
                    name="content"
                    defaultValue={blog.content}
                  />
                  <Input
                    label="Author"
                    id="author"
                    name="author"
                    defaultValue={blog.author}
                  />
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" form="edit-blog" type="submit">
                  Update Blog
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
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
