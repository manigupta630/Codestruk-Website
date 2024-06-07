import React, { useState, useEffect } from "react";
import hoverHerePng from "../../assets/hover-here.png";
import hoverHereDiscPng from "../../assets/indicator-dic.png";
import hoverHerePlanPng from "../../assets/indicator-plan.png";
import clickHerePng from "../../assets/clickhere.png";
import vectorPng from "../../assets/Vector.png";

const ServicesAnimationCard = React.memo(({ image, title, description }) => {
  const [showDescription, setShowDescription] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const getImageStyle = (title) => {
    switch (title) {
      case "Discovery Phase":
        return `absolute hidden   ease-in-out ${
          showDescription ? "hidden" : "md:block"
        }  top-[-33px] cursor-pointer sm:right-[-0px] lg:right-[-90px] bottom-0`;
      case "Planning phase":
        return `absolute hidden ${
          showDescription ? "hidden" : "md:block"
        }  top-[60px] cursor-pointer  ease-in-out sm:right-[-0px] lg:right-[-65px] bottom-0`;
      default:
        return `absolute hidden ${
          showDescription ? "hidden" : "md:block"
        }  top-[-40px] left-[-15px] cursor-pointer  ease-in-out bottom-0`;
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
  const handleMouseEnter = () => {
    clearTimeout(timeoutId); // Clear any existing timeout
    const newTimeoutId = setTimeout(() => setShowDescription(true), 200); // Delay for 200ms
    setTimeoutId(newTimeoutId);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutId); // Clear the timeout
    const newTimeoutId = setTimeout(() => setShowDescription(false), 200); // Delay for 200ms
    setTimeoutId(newTimeoutId);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId); // Clean up the timeout on component unmount
    };
  }, [timeoutId]);
  return (
    <div
      className={`flex flex-col  pb-8 relative  justify-center  md:gap-12 md:flex-row ${
        showDescription ? "items-start" : "items-center"
      }  w-full md:justify-start  rounded-lg group`}
    >
      {showDescription && (
        <div
          onClick={handleShowDesc}
          className="close-button md:hidden absolute top-[-50px]  right-5 w-10 h-10 flex items-center text-sm justify-center bg-purple-200 rounded-full"
        >
          X
        </div>
      )}
      <div
        className={`relative  rounded-full   mx-auto md:mx-0 flex items-center justify-center `}
      >
        <div
          className={`relative   w-[250px] h-[250px]  ${
            showDescription ? "h-fit bg-transparent" : "bg-[rgb(195,222,255)]"
          } z-[10] group-hover:bg-transparen flex items-center justify-center z- rounded-full`}
        >
          <img src={image} alt={title} className="max-w-[200px] " />
        </div>

        <img
          src={clickHerePng}
          alt="Click Here"
          className={`absolute md:hidden ${
            showDescription ? "hidden " : "block"
          } top-[-50px] right-1/2 left-1/2 bottom-0`}
        />
        {/* <div className="absolute hidden md:block left-1/2  h-full border-l-2 border-dotted border-[#E5DBFC] duration-500 transform -translate-x-1/2 z-0"></div> */}
      </div>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`relative ${
          showDescription ? "bg-white" : ""
        } group-hover:bg-whit flex w-fit max-w-[450px]    py-5 my-2 flex-col text-sm bg-transparent   rounded-md gap-0`}
      >
        <h3
          onClick={handleShowDesc}
          className="text-2xl text-center md:text-left h-fit  md:text-[50px] p-5 py-0  relative cursor-pointer "
        >
          {title}
          <div className="absolute inset-0"></div>
        </h3>
        <div
          className={`relative   overflow-hidden  max-h-0 transition-[max-height]   eas  ${
            showDescription ? "max-h-96 group-hove:max-h-96 " : ""
          }`}
        >
          <div className=" p-5 rounded-md ">
            <p className="flex text-[15px] flex-col gap-2 text-gray-700 font-thin">
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
});

export default ServicesAnimationCard;
