import React from "react";
import lightBulbIcon from "../../assets/bulb.png";
import planeIcon from "../../assets/sendicon.png";

const Contact = () => {
  return (
    <section className="max-w-[1280px] w-full mx-auto font-cursive bg-white relative rounded-lg shadow-md px-6 mt-12">
      <div className="absolute hidden md:block left-[100px] h-full border-l border-[#7134ff] duration-500 transform -translate-x-1/2 z-0"></div>
      <h2 className="text-3xl font-bold mb-4 text-center py-5 text-[#813A96] font-cursive">
        Write to us your craziest ideas!
      </h2>
      <div className="absolute w-full pb-5 h-full pt-[100px] overflow-hidden max-h-[500px] flex flex-col justify-between gap-5 top-0 left-0">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="h-[2px] w-full bg-gray-400 opacity-50"></div>
        ))}
      </div>
      <div className="absolute top-4 right-4 text-gray-500 font-cursive">
        <span className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2">
          1 jun 2024
        </span>
        <img
          src={lightBulbIcon}
          alt="Idea"
          className="w-full max-w-[200px] inline-block ml-2"
        />
      </div>
      <div className="relative z-2">
        <form className="space-y-4 relative font-cursive px-20 text-3xl flex flex-col gap-0">
          <div className="flex flex-col gap-2">
            <div className="relative">
              <label
                htmlFor="name"
                className="block text-gray-700 font-cursive"
              >
                Hello CodeStruck 👋
              </label>
            </div>
            <div className="relative gap-1 flex flex-wrap items-center">
              <label htmlFor="">I am</label>
              <input
                type="text"
                id="name"
                className="min-w-fit  max-w-full outline-none border-b border-dashed border-spacing-5 border-gray-700 bg-transparent font-cursive resize-none overflow-hidden"
                placeholder="Name"
              />
              <span className="text-gray-500 font-cursive">
                and I'm looking for passionate team to work with
              </span>
            </div>
          </div>
          <div>
            <div className="relative">
              <label
                htmlFor="idea"
                className="block font-cursive text-gray-700 font-cursive"
              >
                I have this insane idea that I want to work upon. Here's the
                gist of the idea
              </label>
            </div>
            <div className="relative pt-3">
              <textarea
                id="idea"
                className="w-full py-0 outline-none border-b border-dashed border-spacing-5 border-gray-700 bg-transparent font-cursive  overflow-hidden"
                placeholder="About what you're building in brief"
                rows="1"
              ></textarea>
            </div>
          </div>
          <div>
            <div className="relative pt-20">
              <label
                htmlFor="contact"
                className="block text-gray-700 font-cursive"
              >
                Contact me at
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                id="contact"
                className="w-full outline-none border-none bg-transparent font-cursive"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="flex justify-end ">
            <button
              type="submit"
              className="bg-[#813A96] text-white p-3 rounded-md flex items-center space-x-2 hover:bg-[#6C2E7D] transition duration-300"
            >
              <span>Send Message</span>
              <img src={planeIcon} />
            </button>
          </div>
          <br />
        </form>
      </div>
    </section>
  );
};

export default Contact;
