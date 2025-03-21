import { motion } from "framer-motion";

const BlogCard = ({ title, description, image }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }} // Smooth zoom on hover
      whileTap={{ scale: 0.98 }} // Subtle shrink on click
      className="relative bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] 
      shadow-lg rounded-xl overflow-hidden w-full max-w-sm border-2 border-transparent 
      transition-all duration-300 group hover:border-pink-500"
    >
      <div className="absolute inset-0 w-full h-full rounded-xl opacity-0 
      transition-all duration-500 ease-in-out group-hover:opacity-100 
      group-hover:shadow-[0px_0px_20px_4px_#ff00ff] pointer-events-none"></div>

      <img
        src={image}
        alt={title || "Blog image"}
        className="w-full h-48 object-cover rounded-t-xl"
      />

      <div className="p-5 text-white">
        <h2 className="text-xl font-semibold leading-tight">{title}</h2>
        <p className="text-gray-300 mt-2 text-sm leading-relaxed">{description}</p>
        <button className="mt-4 w-full bg-pink-500 text-white px-4 py-2 rounded-lg 
        hover:shadow-[0px_0px_15px_#ff00ff] transition-all duration-300 text-sm font-medium">
          Read More
        </button>
      </div>
    </motion.div>
  );
};

const BlogList = ({ blogs = [] }) => {
  if (!blogs || blogs.length === 0) {
    return <p className="text-center text-gray-300">No blogs available.</p>;
  }

  return (
    <div className="container mx-auto px-6 lg:px-12 max-w-7xl w-full">
      <h2 className="text-center text-3xl font-bold mb-8 text-white">Latest Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
