export default function Footer() {
  function toTop() {
    window.scrollTo(0, 0);
  }

  return (
    <footer className="mt-14 flex items-end justify-between px-5 py-4 sm:flex text-body-4 md:text-body-3">
      <div className="flex flex-col md:flex-row md:w-[62.5vw] lg:w-[57.5vw] justify-between">
        <div className="flex space-x-1">
          <span>&copy;</span>
          <span>2024</span>
          <span className="font-extrabold uppercase 2xl:text-body-1">Anthony Manansala</span>
        </div>
        <div>
          <span className=" text-body-4 2xl:text-body-1">All Right Reserved.</span>
        </div>
      </div>
      <button onClick={toTop} className="col-span-2 flex items-center space-x-2 w-fit group 2xl:text-body-1">
        <span className="font-extrabold uppercase hover:font-black duration-200"></span>
        <span className="group-hover:-translate-y-3 duration-300 ease-in-out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="3" 
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </span>
      </button>
    </footer>
  );
}
