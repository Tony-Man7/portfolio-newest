const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <svg
          className="mx-auto text-green-500 h-16 w-16 mb-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        <h2 className="text-3xl font-semibold text-gray-800">
          Thank you for your message!
        </h2>
        <p className="mt-2 text-gray-600">
          I appreciate your contact. I will get back to you as soon as possible.
        </p>
        <a
          href="/"
          className="mt-4 inline-block px-6 py-3 text-[#e8e8e3] bg-[#262626] rounded-l-full hover:bg-[#262626] focus:outline-none focus:ring focus:border-blue-300 relative group button"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default ThankYou;
