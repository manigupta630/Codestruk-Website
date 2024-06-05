import React, { useState } from "react";
import hoverHerePng from "../../assets/hover-here.png";
import hoverHereDiscPng from "../../assets/indicator-dic.png";
import hoverHerePlanPng from "../../assets/indicator-plan.png";
import clickHerePng from "../../assets/clickhere.png";
import vectorPng from "../../assets/Vector.png";

const ServicesAnimationCard = ({ image, title, description }) => {
  const [showDescription, setShowDescription] = useState(false);
  const getImageStyle = (title) => {
    switch (title) {
      case "Discovery Phase":
        return "absolute hidden group-hover:hidden md:block top-[-60px] right-[100px] bottom-0";
      case "Planning phase":
        return "absolute hidden group-hover:hidden md:block top-[50px] right-[105px] bottom-0";
      default:
        return "absolute hidden group-hover:hidden md:block top-[-50px] left-[-40px] bottom-0";
    }
  };
  const handleShowDesc = () => {
    setShowDescription(!showDescription);
  };

  const getHoverImage = (title) => {
    switch (title) {
      case "Discovery Phase":
        return hoverHereDiscPng;
      case "Planning phase":
        return hoverHerePlanPng;
      default:
        return hoverHerePng;
    }
  };

  return (
    <div className="flex flex-col py-8 relative justify-center md:flex-row items-center w-full md:justify-between  rounded-lg group">
      <div className="relative">
        <img src={image} alt={title} className="relative z-10" />
        <img
          src={clickHerePng}
          alt="Click Here"
          className="absolute md:hidden top-[-40px] right-0 bottom-0"
        />
        <div className="absolute hidden md:block left-1/2 z-1  h-full border-l-2 border-dotted border-[#E5DBFC] duration-500 transform -translate-x-1/2 z-0"></div>
      </div>
      <div
        className={`relative ${
          showDescription ? "bg-white" : ""
        } group-hover:bg-white flex  py-5 my-2 flex-col text-sm bg-transparent max-w-[500px]  rounded-md gap-0`}
      >
        <h3
          onClick={handleShowDesc}
          className="text-2xl text-center md:text-left  md:text-4xl relative group-hover:cursor-pointer py-0 p-5"
        >
          {title}
          <div className="absolute inset-0"></div>
          {showDescription && (
            <div
              onClick={handleShowDesc}
              className="close-button md:hidden absolute top-0  right-5 w-10 h-10 flex items-center text-sm justify-center bg-purple-200 rounded-full"
            >
              X
            </div>
          )}
        </h3>
        <div
          className={`relative   overflow-hidden max-h-0 transition-[max-height] duration-300 ease-in-out group-hover:max-h-96  ${
            showDescription ? "max-h-96 group-hover:max-h-96 " : ""
          }`}
        >
          <div className=" p-5 rounded-md">
            <p className="flex flex-col gap-2 text-gray-500 font-thin">
              {description.map((desc, index) => (
                <span key={index}>{desc}</span>
              ))}
            </p>
          </div>
        </div>
        <img
          src={
            title === "Planning Phase" ? hoverHerePlanPng : getHoverImage(title)
          }
          alt="Hover Here"
          className={getImageStyle(title)}
        />
      </div>
    </div>
  );
};

export default ServicesAnimationCard;
