const About = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4">
      <div className="bg-gray-800 text-white p-8 rounded-2xl shadow-lg max-w-2xl text-center 
                      transition-all duration-300 transform hover:scale-105 hover:shadow-lg 
                      hover:ring-4 hover:ring-pink-500 hover:border-2 hover:border-pink-500">
        <h2 className="text-3xl font-bold mb-4 text-gray-200">About Us</h2>
        <p className="text-gray-300 leading-relaxed">
          Welcome to our tech blogging website! Here, we explore a wide range of technology-related topics, 
          from web development and programming languages to software engineering trends and industry insights.
        </p>
        <p className="mt-4 text-gray-300 leading-relaxed">
          Our goal is to provide informative and engaging content that helps developers, tech enthusiasts, 
          and learners stay updated with the latest advancements in the tech world. 
        </p>
        <p className="mt-4 text-gray-300 leading-relaxed">
          Join us on this journey of learning and discovery, and feel free to share your thoughts and experiences with our community!
        </p>
      </div>
    </div>
  );
};

export default About;
