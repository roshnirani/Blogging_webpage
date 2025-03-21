const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="mb-6 text-lg">Have questions? Feel free to reach out!</p>
      <form className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg border-2 border-pink-500 hover:border-pink-700 transition duration-300">
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-bold mb-2">
            Name
          </label>
          <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-bold mb-2">
            Email
          </label>
          <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-bold mb-2">
            Message
          </label>
          <textarea rows="4" placeholder="Your Message" className="w-full px-4 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"></textarea>
        </div>
        <button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded transition duration-300">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
