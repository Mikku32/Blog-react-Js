import NavBar from "./Pages/Blog/Components/NavBar";
import BlogPage from "./Pages/Blog/BlogPAge";

const App = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen  ">
        <NavBar />
        <BlogPage />
      </div>
    </>
  );
};

export default App;
