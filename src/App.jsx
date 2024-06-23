import NavBar from "./Pages/Blog/Components/NavBar";
import BlogPage from "./Pages/Blog/BlogPAge";
import { Toaster } from "sonner";

const App = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen  ">
        <Toaster richColors />
        <NavBar />
        <BlogPage />
      </div>
    </>
  );
};

export default App;
