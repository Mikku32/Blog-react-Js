import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getBlogs, postBlog } from "../../redux/slices/blogSlice";
import { toast } from "sonner";

const NavBar = () => {
  const [isOpen, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md shadow-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between ml-2 mr-0  p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            BlogWeb
          </span>
        </a>
        <div className="flex ">
          <Button
            color="primary"
            variant="ghost"
            onClick={() => setOpenModal(true)}
          >
            Post
          </Button>
        </div>
      </div>
      <Modal backdrop="blur" isOpen={isOpen} onOpenChange={setOpenModal}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add Blog
              </ModalHeader>
              <ModalBody>
                <form
                  className="flex flex-col gap-3"
                  id="add-blog"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const title = e.target.title.value;
                    const content = e.target.content.value;
                    const author = e.target.author.value;

                    try {
                      await dispatch(
                        postBlog({
                          title: title,
                          content: content,
                          author: author,
                        })
                      ).unwrap(); // dispatch usually doesn't through the catch, so unwrap help to through the catch
                      await dispatch(getBlogs());

                      toast.success("Great, Post added susccesfully ");
                    } catch (error) {
                      toast.error("Failed to post, Don't worry try again");
                    }
                    onClose();
                  }}
                >
                  <Input
                    isRequired
                    labelPlacement="outside"
                    label="Title"
                    id="title"
                    name="title"
                  />
                  <Input
                    isRequired
                    labelPlacement="outside"
                    label="Content"
                    id="content"
                    name="content"
                  />
                  <Input
                    isRequired
                    labelPlacement="outside"
                    label="Author"
                    id="author"
                    name="author"
                  />
                </form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="success" form="add-blog" type="submit">
                  Post
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </nav>
  );
};

export default NavBar;
