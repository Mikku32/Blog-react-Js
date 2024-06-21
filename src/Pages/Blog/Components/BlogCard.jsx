import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <a className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-300 dark:bg-gray-700 dark:border-gray-70 dark:hover:bg-gray-600">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {blog.title}
      </h5>
      <h5 className="mb-2 text-2sm font-bold tracking-tight text-gray-300 dark:text-red-400 underline">
        {blog.author}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {blog.content}
      </p>
    </a>
  );
};

export default BlogCard;
