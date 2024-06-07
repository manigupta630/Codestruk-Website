import React from "react";
import mainBg from "../assets/bg-1.png";
import discoveryPhaseBg from "../assets/Artwork 1.png";
import scopingPhaseBg from "../assets/Artwork 2.png";
import planningPhaseBg from "../assets/Artwork 3.png";
import hoverHerePng from "../assets/hover-here.png";
import hoverHereDiscPng from "../assets/indicator-dic.png";
import hoverHerePlanPng from "../assets/indicator-plan.png";
import lightBulbIcon from "../assets/bulb.png";
import clickHerePng from "../assets/clickhere.png";
import planeIcon from "../assets/sendicon.png";
import Breadcrumb from "../components/services/BreadScrumbIcon";
import ServicesAnimationCard from "../components/services/ServicesAnimationCard";
import Contact from "../components/services/Contact";

const breadcrumbItems = [
  { text: "Codestruck", link: "/codestruck" },
  { text: "Service", link: "/codestruck/service" },
  { text: "Product-Shopping", link: "/codestruck/service/product-shopping" },
];

const Services = () => {
  const card = [
    {
      title: "Discovery Phase",
      image: discoveryPhaseBg,
      description: [
        "Our product scoping process starts with a discovery phase.During this phase, we work with you to understand your vision for the product, your target audience, and your product’s unique value proposition.",
        "We also identify any potential roadblocks that could hinder the product's success, such as technical limitations or market saturation.",
        "By the end of the discovery phase, we have a deep understanding of your product and the business goals you want to achieve.",
      ],
    },
    {
      title: "Scoping  Phase",
      image: scopingPhaseBg,
      description: [
        "During this phase, we use the information gathered in the discovery phase to define the product's features, requirements, and goals. We take a user-centered approach to scope, focusing on the needs and desires of the end users.",
        "We also consider the technical requirements of the product, such as the technology stack, scalability, and security.",
        "The scoping phase is where we define the scope of the product. This includes the product's features, functionality, and design.          We also define the product's MVP (Minimum Viable Product),      which is the version of the product that contains the      essential features needed to launch. Defining the MVP is      a critical step in the scoping process, as it ensures that      the product is delivered to the market as quickly as possible.",
      ],
    },
    {
      title: "Planning phase",
      image: planningPhaseBg,
      description: [
        "Once we have defined the product scope and MVP, we move on to the planning phase. During this phase, we create a roadmap for the product's development.",
        "This roadmap outlines the development milestones, the timeline for each milestone, and the resources neededto achieve them. The roadmap is designed to ensure that the development process is efficient and cost-effective.",
        "At CodeStruck Studios, we understand that software development is an iterative process. As such, we don't consider the scoping process to be a one-and-done task.Instead, we view it as an ongoing process that evolves as the product develops. As the development process progresses, we revisit the product scope and make any necessary adjustments.",
      ],
    },
  ];
  return (
    <div className="bg-purple-50  max-w-[1440px] mx-auto min-h-screen">
      <div className="mx-auto relative p-5 w-fit">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      <main className="max-w-[931px] mx-auto py-8 px-5">
        <div className="flex   justify-center items-center  max-w-full mx-auto gap-5 py-8 ">
          {/* <h1 className="text-4xl font-bold ">Product</h1> */}
          <img src={mainBg} alt="Product Scoping" className="mx-auto w-auto" />
          {/* <h1 className="text-4xl font-bold ">Scoping</h1> */}
        </div>

        <div className="flex flex-col w-full  mx-auto">
          <section className="text-gray-700 flex flex-col gap-2 text-left mb-10">
            <p>
              As a team of engineers and creative designers, we know the
              importance of planning and preparation.
              <span className="text-gray-700 block md:inline md:py-0 py-4">
                Just like you wouldn't build a house without a blueprint, you
                shouldn't launch a software product without a solid product
                scope.
              </span>
            </p>

            <p className="text-gray-700">
              We believe that product scoping is a critical part of the
              development process, and it's an area where we excel. Eliminate
              all your stress instead of working with stark startups.
            </p>
            <p className="text-gray-700">
              Product scoping is the process of defining the features,
              requirements, and goals of your software product.
              <span className="text-gray-700 block md:inline md:py-0 py-4">
                It's a crucial stage in the product development process as it
                lays the foundation for everything that comes after.
              </span>
            </p>

            <p>
              At CodeStruck Studios, we take a comprehensive approach to product
              scoping to ensure that every aspect of your product is defined in
              detail.
            </p>
          </section>

          <section className="grid  relative text-2xl h-full md:text-5xl w-full font-bold grid-cols-1   gap-12 pt-10 ">
            {/* <div className="flex flex-col  relative justify-center md:flex-row  items-center w-full md:justify-between  p-6 rounded-lg "> */}
            {card?.map((cardDetails) => (
              <ServicesAnimationCard
                image={cardDetails.image}
                title={cardDetails.title}
                description={cardDetails.description}
              />
            ))}
            <div className="absolute hidden md:block left-[125px]  h-full border-l-2 border-dotted border-[#E5DBFC] duration-500 transform -translate-x-1/2 z-0"></div>
          </section>

          <section className="bg-white h-auto relative z-3  rounded-lg  mb-12">
            <div className="p-10 w-full  border-b-2 border-dotted  border-[#813A96] transform ">
              <h2 className="text-2xl md:text-4xl font-bold  text-[#813A96]">
                WHY IS PRODUCT SCOPING SO ESSENTIAL?
              </h2>
            </div>
            <div className=" px-10 py-5 md:max-w-[80%]">
              <p className="text-gray-700 mb-4">
                As a team of engineers and creative designers, we understand the
                importance of planning and preparation. Just as you wouldn't
                build a house without a blueprint, launching a software product
                without a solid product scope is equally essential.
              </p>
              <p className="text-gray-700 mb-4">
                At CodentTide Studios, we excel in product scoping due to our
                prior experience with top startups. Product scoping involves
                defining features, requirements, and goals, making it a critical
                stage in the development process.
              </p>
              <p className="text-gray-700">
                Our comprehensive approach ensures that every aspect of your
                product is meticulously defined.
              </p>
            </div>
          </section>

          {/* <section className="bg-white relative  rounded-lg ">
            <h2 className="text-3xl font-bold mb-4 text-center py-5 text-[#813A96]">
              Write to us your craziest ideas!
            </h2>
            <div className="absolute w-full pb-5 h-full overflow-hidden max-h-[400px] flex flex-col justify-between gap-5">
              <div className="h-[2px] w-full bg-gray-400 opacity-50"></div>

              <div className="h-[2px] w-full bg-gray-400 opacity-50"></div>
            </div>
            <div className="relative z-2">
              <form className="space-y-4 flex flex-col gap-0">
                <div className="flex  flex-col gap-2">
                  <div className="relative">
                    <label htmlFor="name" className="block px-10 text-gray-700">
                      Hello CodentTide 👋
                    </label>
                    <div className="h-[2px] absolute w-full bg-gray-400 opacity-50"></div>
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      className="w-full px-10 outline-none border-gray-300 bg-transparent rounded-md"
                      placeholder="I am"
                    />
                    <div className="h-[2px] absolute w-full bg-gray-400 opacity-50"></div>
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <label htmlFor="idea" className="block px-10 text-gray-700">
                      I have this insane idea that I want to work upon. Here’s
                      the gist of the idea
                    </label>
                    <div className="h-[2px] absolute w-full bg-gray-400 opacity-50"></div>
                  </div>
                  <div className="relative pt-3">
                    <textarea
                      id="idea"
                      rows="3"
                      className="w-full px-10 py-0 outline-none border-gray-300 bg-transparent rounded-md"
                      placeholder="About what you’re building in brief"
                    ></textarea>
                    <div className="h-[2px] absolute w-full bg-gray-400 opacity-50"></div>
                  </div>
                </div>
                <div>
                  <div className="relative pt-20">
                    <label
                      htmlFor="contact"
                      className="block px-10 text-gray-700"
                    >
                      Contact me at
                    </label>
                    <div className="h-[2px] absolute w-full bg-gray-400 opacity-50"></div>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      id="contact"
                      className="w-full px-10 outline-none border-gray-300 bg-transparent rounded-md"
                    />
                  </div>
                  <div className="h-[2px] absolute w-full bg-gray-400 opacity-50"></div>
                </div>
                <button
                  type="submit"
                  className="bg-purple-600 text-white px-6 py-2 bg-transparent rounded-md"
                >
                  Submit Message
                </button>
              </form>
            </div>
          </section> */}
        </div>
      </main>
      <Contact />
    </div>
  );
};

export default Services;
