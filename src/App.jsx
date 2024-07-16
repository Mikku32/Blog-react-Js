import NavBar from "./Pages/Components/NavBar";
import BlogPage from "./Pages/BlogPAge";
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
