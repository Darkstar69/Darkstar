import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { CiSearch } from "react-icons/ci";

const data = [
  {
    id: 1,
    title: "This is the first blog",
    date: "December 12, 2024",
  },
  {
    id: 2,
    title: "Exploring the second blog",
    date: "November 10, 2024",
  },
  {
    id: 3,
    title: "Understanding the third blog",
    date: "October 5, 2024",
  },
  {
    id: 4,
    title: "Insights from the fourth blog",
    date: "September 20, 2024",
  },
  {
    id: 5,
    title: "Discovering the fifth blog",
    date: "August 15, 2024",
  },
  {
    id: 6,
    title: "Learning from the sixth blog",
    date: "July 10, 2024",
  },
  {
    id: 7,
    title: "Exploring the seventh blog",
    date: "June 5, 2024",
  },
  {
    id: 8,
    title: "Understanding the eighth blog",
    date: "May 1, 2024",
  },
  {
    id: 9,
    title: "Insights from the ninth blog",
    date: "April 15, 2024",
  },
  {
    id: 10,
    title: "Discovering the tenth blog",
    date: "March 20, 2024",
  },
  {
    id: 11,
    title: "Learning from the eleventh blog",
    date: "February 25, 2024",
  },
  {
    id: 12,
    title: "Exploring the twelfth blog",
    date: "January 30, 2024",
  },
  {
    id: 13,
    title: "Understanding the thirteenth blog",
    date: "January 5, 2024",
  }
];

const SearchBox = ({ searchBoxOpen, setSearchBoxOpen }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setSearchBoxOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [setSearchBoxOpen]);

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.date.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="h-screen w-screen backdrop-blur fixed z-50 top-0 left-0 right-0 bottom-0 bg-black/30 flex items-center justify-center transition-all delay-75 ease-in-out"
      onClick={() => setSearchBoxOpen(!searchBoxOpen)}
    >
      <div
        className="rounded-2xl bg-blue-900 h-2/3 w-2/5 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-center px-3 py-2 gap-6 mt-4">
          <CiSearch className="text-white text-2xl" />
          <input
            type="text"
            className="w-3/4 h-10 bg-white/20 backdrop-blur-md text-white px-4 block outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <p className="text-white border border-gray-400 rounded-md px-2 py-1">
            ESC
          </p>
        </div>

        <div className="py-2 flex flex-col h-full">
          <h4 className="text-purple-700 font-mono font-bold text-center">
            CONTENT
          </h4>
          <div className="h-[1px] w-11/12 bg-gray-400 mx-auto"></div>
          <div className="overflow-y-scroll flex-grow">
            {filteredData.map((item) => (
              <div
                key={item.id}
                className="flex flex-col py-2 w-full hover:bg-purple-600 cursor-pointer px-6"
              >
                <p className="text-gray-300 text-xs">{item.date}</p>
                <p className="text-white">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
SearchBox.propTypes = {
  searchBoxOpen: PropTypes.bool.isRequired,
  setSearchBoxOpen: PropTypes.func.isRequired,
};

export default SearchBox;
