import React from 'react';
import PhaseComponent from './PhaseCompoent';


const ServiceDetail = () => {
  const phases = [
    {
      icon: '/images/vision-crafting.png',
      title: 'Discovery Phase',
      description: [
        'Our product scoping process starts with a discovery phase. During this phase, we work with you to understand your vision for the product, your target audience, and your product’s unique value proposition.',

        "We also identify any potential roadblocks that could hinder the product's success, such as technical limitations or market saturation.",

        'By the end of the discovery phase, we have a deep understanding of your product and the business goals you want to achieve.'
      ],
    },
    {
      icon: '/images/vision-crafting.png',
      title: 'Scoping Phase',
      description: [
        "During this phase, we use the information gathered in the discovery phase to define the product's features, requirements, and goals. We take a user-centered approach to scope, focusing on the needs and desires of the end users.",

        "We also consider the technical requirements of the product, such as the technology stack, scalability, and security.?",

        "The scoping phase is where we define the scope of the product. This includes the product's features, functionality, and design.",

        "We also define the product's MVP (Minimum Viable Product), which is the version of the product that contains the essential features needed to launch. Defining the MVP is a critical step in the scoping process, as it ensures that the product is delivered to the market as quickly as possible."
      ],
    },
    {
      icon: '/images/vision-crafting.png',
      title: 'Planning Phase',
      description: [
        "Once we have defined the product scope and MVP, we move on to the planning phase. During this phase, we create a roadmap for the product's development.",

        "This roadmap outlines the development milestones, the timeline for each milestone, and the resources needed to achieve them. The roadmap is designed to ensure that the development process is efficient and cost-effective.",

        "At CodeStruk, we understand that software development is an iterative process. As such, we don't consider the scoping process to be a one-and-done task.",

        "Instead, we view it as an ongoing process that evolves as the product develops. As the development process progresses, we revisit the product scope and make any necessary adjustments."
      ],
    },
  ];
  return (
    <div className='mt-10 font-sen'>
      <div className="flex justify-center items-center md:text-xl   text-sm ml-4 md:ml-0 mr-2 md:mr-0 mx-auto space-x-4">
        <div className="hover:font-bold hover:cursor-pointer w-32">CodeStruk</div>
        <img
          src="/images/breadcrumb_arrow.svg"
          alt="Arrow"
          className="h-6 w-10 md:text-xl md:mr-6"
        />
        <div className="hover:font-bold hover:cursor-pointer w-32">Services</div>
        <img
          src="/images/breadcrumb_arrow.svg"
          alt="Arrow"
          className="h-6 w-10 md:text-xl md:mr-6"
        />
        <div className="font-bold whitespace-nowrap w-32 text-[#813A96]">Product-Scoping</div>
      </div>
      <div className="flex flex-col font-khand items-center mt-4 justify-center md:min-h-screen">
        <div className="flex items-center justify-center w-full px-20">
          <span className="text-2xl md:text-7xl font-bold">Product</span>
          <div className="flex items-center justify-center max-w-[500px]">
            <img src="/images/product-scoping.png" alt="Logo" className="object-contain" />
          </div>
          <span className="text-2xl md:text-7xl font-bold text-[#813A96]">Scoping</span>
        </div>
      </div>
      <div className="mt-10 justify-center items-center md:text-xl md:mx-32 ml-4 mr-4 ">
        <p className="text-gray-800 leading-7 mb-4">
          As a team of engineers and creative designers, we know the importance of planning and preparation. Just like you wouldn't build a house without a blueprint, you shouldn't launch a software product without a solid product scope.
        </p>
        <p className="text-gray-800 leading-7 mb-4">
          We believe that product scoping is a critical part of the development process, and it's an area where we excel because of our prior experience of working with tech startups.
        </p>
        <p className="text-gray-800 leading-7 mb-4">
          Product scoping is the process of defining the features, requirements, and goals of your software product. It's a crucial step in the product development process as it lays the foundation for everything that comes after.
        </p>
        <p className="text-gray-800 leading-7 mb-4">
          At CodeStruk, we take a comprehensive approach to product scoping to ensure that every aspect of your product is defined in detail.
        </p>

      </div>





      {/* <div className="relative flex flex-col items-center justify-center md:mx-32 mt-10 ml-4 mr-4">
        <div className="flex items-start">

          <div className="w-[26rem] h-[14rem] rounded-full bg-violet-300 flex items-center justify-center">
            <img src="/images/vision-crafting.png" alt="Circle 1" className="w-32 h-32 object-cover rounded-full" />
          </div>

          <div className="ml-4">
            <h3 className="text-3xl font-semibold uppercase">Discovery Phase</h3>
            <p className="text-gray-800 leading-7 mb-4 font-inter">
              Our product scoping process starts with a discovery phase. During this phase, we work with you to understand your vision for the product, your target audience, and your product’s unique value proposition.
            </p>
            <p className="text-gray-800 leading-7 mb-4 font-inter">
              We also identify any potential roadblocks that could hinder the product's success, such as technical limitations or market saturation.
            </p>
            <p className="text-gray-800 leading-7 mb-4 font-inter">
              By the end of the discovery phase, we have a deep understanding of your product and the business goals you want to achieve.
            </p>
          </div>
        </div>

        <div className="relative w-full h-[13rem]">
          <div className="absolute ml-[7rem] border-l-4 border-dashed border-violet-300 h-full"></div>
        </div>

        <div className="flex items-start ">
          <div className="w-[36rem] h-[14rem] rounded-full bg-violet-300 flex items-center justify-center">
            <img src="/images/vision-crafting.png" alt="Circle 2" className="w-32 h-32 object-cover rounded-full" />
          </div>
          <div className="ml-4">
            <h3 className="text-3xl font-bold uppercase">Scoping Phase</h3>
            <p className="text-gray-800 leading-7 mb-4">
              During this phase, we use the information gathered in the discovery phase to define the product's features, requirements, and goals. We take a user-centered approach to scope, focusing on the needs and desires of the end users.
            </p>
            <p className="text-gray-800 leading-7 mb-4">
              We also consider the technical requirements of the product, such as the technology stack, scalability, and security.
            </p>
            <p className="text-gray-800 leading-7 mb-4">
              The scoping phase is where we define the scope of the product. This includes the product's features, functionality, and design.
            </p>
            <p className="text-gray-800 leading-7 mb-4">
              We also define the product's MVP (Minimum Viable Product), which is the version of the product that contains the essential features needed to launch. Defining the MVP is a critical step in the scoping process, as it ensures that the product is delivered to the market as quickly as possible.
            </p>
          </div>
        </div>

        <div className="relative w-full h-[13rem]">
          <div className="absolute ml-[7rem] border-l-4 border-dashed border-violet-300 h-full"></div>
        </div>

        <div className="flex items-start ">
          <div className="w-[28rem] h-[14rem] rounded-full bg-violet-300 flex items-center justify-center">
            <img src="/images/vision-crafting.png" alt="Circle 3" className="w-32 h-32 object-cover rounded-full" />
          </div>
          <div className="ml-4">
            <h3 className="text-3xl uppercase font-bold">Planning Phase</h3>
            <p className="text-gray-800 leading-7 mb-4">
              Once we have defined the product scope and MVP, we move on to the planning phase. During this phase, we create a roadmap for the product's development.
            </p>
            <p className="text-gray-800 leading-7 mb-4">
              This roadmap outlines the development milestones, the timeline for each milestone, and the resources needed to achieve them. The roadmap is designed to ensure that the development process is efficient and cost-effective.
            </p>
            <p className="text-gray-800 leading-7 mb-4">
              At CodeStruk, we understand that software development is an iterative process. As such, we don't consider the scoping process to be a one-and-done task.
            </p>
            <p className="text-gray-800 leading-7 mb-4">
              Instead, we view it as an ongoing process that evolves as the product develops. As the development process progresses, we revisit the product scope and make any necessary adjustments.
            </p>
          </div>
        </div>


      </div>


 */}


      <div className="max-w-4xl mx-auto p-4">
        {phases.map((phase, index) => (
          <PhaseComponent
            key={index}
            icon={phase.icon}
            title={phase.title}
            description={phase.description}
            isLast={index === phases.length - 1}
          />
        ))}
      </div>









      {/* 
      <div className="flex flex-col md:flex-row justify-center md:mx-32  mt-10 ml-4 mr-4">
        <div className="flex flex-col items-center md:mr-10">
          <div className="bg-violet-300 rounded-full w-64 h-64 flex justify-center items-center text-white font-bold mb-2">
            <img src="/images/vision-crafting.png" alt="Step 1" className="w-32 h-32 object-cover rounded-full" />
          </div>
          <div className="h-64 border-l-2 border-violet-300 border-dashed"></div>
          <div className="bg-violet-300 rounded-full w-64 h-64 flex justify-center items-center text-white font-bold mb-2">
            <img src="/images/vision-crafting.png" alt="Step 2" className="w-32 h-32 object-cover rounded-full" />
          </div>
          <div className="h-64 border-l-2 border-violet-300 border-dashed"></div>
          <div className="bg-violet-300 rounded-full w-64 h-64 flex justify-center items-center text-white font-bold mb-2">
            <img src="/images/vision-crafting.png" alt="Step 3" className="w-32 h-32 object-cover rounded-full" />
          </div>
        </div>
        <div className="md:ml-10 ">
          <div className="mb-8">
            <h3 className="font-bold  text-4xl mb-2">Discovery</h3>
            <p className="text-gray-800 leading-7">
              We start by understanding your business goals, target audience, and the problem you're trying to solve with your software product.
            </p>
          </div>
          <div className="mb-8">
            <h3 className="font-bold  text-4xl mb-2">Planning</h3>
            <p className="text-gray-800 leading-7">
              Based on our discovery phase, we create a detailed product roadmap that outlines the features, timeline, and resources needed to bring your product to life.
            </p>
          </div>
          <div className="mb-8">
            <h3 className="font-bold text-4xl  mb-2">Execution</h3>
            <p className="text-gray-800 leading-7">
              Our team of experienced developers and designers work closely with you to build and iterate on your product, ensuring that it meets your requirements and exceeds your expectations.
            </p>
          </div>
        </div>
      </div> */}


      <div className='ml-4 mr-4 md:mx-32'>
        <div className="flex flex-col md:flex-row justify-center items-start mt-10 mb-10">
          <div class="md:mr-10 md:w-1/4">
            <div class="uppercase font-bold md:text-3xl text-xl ml-2 mr-2 md:ml-0">
              Why is product scoping so essential?
            </div>
          </div>
          <div class="md:w-3/4 ml-2 mr-2 md:ml-0 ">
            <p>
              As a team of engineers and creative designers, we know the importance of planning and preparation. Just like you wouldn't build a house without a blueprint, you shouldn't launch a software product without a solid product scope.
            </p>
            <p>
              We believe that product scoping is a critical part of the development process, and it's an area where we excel because of our prior experience of working with tech startups.
            </p>
            <p>
              Product scoping is the process of defining the features, requirements, and goals of your software product. It's a crucial step in the product development process as it lays the foundation for everything that comes after.
            </p>
            <p>
              At CodeStruk, we take a comprehensive approach to product scoping to ensure that every aspect of your product is defined in detail.
            </p>
          </div>
        </div>
      </div>
    </div>



  );
};

export default ServiceDetail;