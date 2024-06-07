import React, { useState } from "react";
import ReactStars from "react-stars";
import { BsPlayFill } from "react-icons/bs";

const VideoOverlay = ({ onClick }) => (
  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
    <button
      onClick={onClick}
      className="text-white transition duration-300 ease-in-out transform hover:scale-110"
    >
      <BsPlayFill size={64} />
    </button>
  </div>
);

const Modal = ({ isOpen, onClose, videoSrc }) => (
  <div
    className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50 ${
      isOpen ? "block" : "hidden"
    }`}
  >
    <div className="relative w-3/4 h-3/4 max-w-6xl max-h-4xl">
      <button
        onClick={onClose}
        className="absolute top-[-2rem] right-[-2rem] text-xl text-white hover:text-gray-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <iframe
        src={videoSrc}
        title="YouTube Video"
        className="w-full h-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
);

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center self-stretch px-4 pt-6 pb-12 bg-violet-50 max-md:px-5">
      <div className="flex justify-center items-center w-full max-w-screen-xl max-md:max-w-full">
        <div className="w-full lg:w-3/4 rounded-3xl">
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col w-full lg:w-3/4 max-md:w-full bg-gradient-to-r from-[#FFADB9] to-[#D2D2F8] rounded-tl-2xl rounded-bl-2xl">
              <div className="flex flex-col grow justify-center px-12 py-8 max-md:px-5 max-md:max-w-full h-auto">
                <div className="flex flex-col max-md:max-w-full">
                  <div className="flex self-start">
                    <ReactStars
                      count={5}
                      value={slides[currentSlide].rating}
                      size={24}
                      color2={"#ffd700"}
                      edit={false}
                    />
                  </div>
                  <div className="mt-6 text-3xl font-medium tracking-tighter leading-10 text-gray-900 max-md:max-w-full">
                    {slides[currentSlide].text}
                  </div>
                  <div className="flex flex-col mt-8 text-gray-900 max-md:max-w-full">
                    <div className="text-lg font-semibold leading-7 max-md:max-w-full">
                      - {slides[currentSlide].author.name}
                    </div>
                    <div className="mt-1 text-base leading-6 max-md:max-w-full">
                      {slides[currentSlide].author.position}
                    </div>
                  </div>
                  <div className="flex justify-center gap-4 self-start mt-8">
                    {slides.map((_, index) => (
                      <div
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`shrink-0 w-2.5 h-2.5 rounded-full cursor-pointer ${
                          index === currentSlide ? "bg-violet-400" : "bg-white"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-tr-2xl rounded-br-2xl w-full lg:w-2/3 max-md:w-full">
              <div className="overflow-hidden relative flex-col grow justify-center items-center self-stretch md:min-h-[478px] max-md:max-w-full">
                <img
                  loading="lazy"
                  src={slides[currentSlide].image.src}
                  className="w-full h-full aspect-auto rounded-tr-2xl rounded-br-2xl"
                  alt="videoImage"
                  style={{
                    objectFit: "cover",
                    maxHeight: "100%",
                    maxWidth: "100%",
                  }}
                />
                {slides[currentSlide].video && (
                  <VideoOverlay onClick={openModal} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          videoSrc={slides[currentSlide].video.src}
        />
      )}
    </div>
  );
};

export default Slider;
