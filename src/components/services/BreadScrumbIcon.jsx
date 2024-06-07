import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa"; // Example icon, can use any icon library
import scrumb from "../../assets/scrumb.svg";

const Breadcrumb = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" className="relative w-full">
      <img src={scrumb} className="w-full" alt="Breadcrumb Background" />
      <div className="left-[-20px] relative w-full  mx-auto">
        <ol className="flex  w-[calc(100%+50px)] gap-5 justify-between items-center">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className={`
              ${index === 1 ? "pl-[25px]" : ""}
              ${
                items.length - 1 === index ? "text-blue-500" : ""
              } text-sm font-bold w-fit hover:underline`}
            >
              {item.text}
            </Link>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
