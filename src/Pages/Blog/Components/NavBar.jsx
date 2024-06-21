import { Button } from "@nextui-org/button";

const NavBar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            BlogWeb
          </span>
        </a>
        <div className="flex gap-3">
          <Button color="primary" variant="ghost">
            Blog
          </Button>
          <Button color="primary" variant="ghost">
            Post
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
