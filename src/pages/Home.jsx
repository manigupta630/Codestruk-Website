import React from 'react'
import ContactUs from '../components/ContactUs';
import Process from '../components/Process';
import Slider from '../components/Slider';
import RightSideImageService from '../components/RightSideImageService';
import LeftSideImageService from '../components/LeftSideImageService';
import SectionHeading from '../components/SectionHeading';
import SubHeading from '../components/SubHeading';

export default function Home() {

  const gradientStyle = {
    backgroundImage: 'linear-gradient(90deg, #6941c6ff 0%, #ffadb9ff 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0px 5px 5px rgba(0, 0, 0, 0.1)',
  };
  const slides = [
    {
      background: '#FFADB9',
      rating: 4,
      text: 'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
      author: {
        name: 'Renee Wells',
        position: 'Product Designer, Quotient'
      },
      image: {
        src: '/images/nature.jpg'
      },
      video: {
        src: 'https://www.youtube.com/embed/Zv11L-ZfrSg'
      }
    },
    {
      background: '#FFADB9',
      rating: 3,
      text: 'lorem djfydhifd djfdhfhj ddhdjfhd dfjdhf. We can’t imagine working without it.',
      author: {
        name: 'Renee Wells',
        position: 'Product Designer, Quotient'
      },
      image: {
        src: '/images/nature.jpg'
      },
      video: {
        src: 'https://www.youtube.com/embed/Zv11L-ZfrSg'
      }
    },
  ];
  // Define your data structure
  const services = [
    {
      id: 1,
      title: 'Vision Crafting',
      description: 'Sculpting the blueprint for your digital masterpiece. Sculpting the blueprint for your digital masterpiece. Sculpting the blueprint for your digital masterpiece. Sculpting the blueprint for your digital masterpiece.',
      imageSrc: '/images/vision-crafting.png',
      imageAlt: 'Vision Crafting Image'
    },
    {
      id: 2,
      title: 'Aesthetic Engineering',
      description: 'Sculpting the blueprint for your digital masterpiece. Sculpting the blueprint for your digital masterpiece. Sculpting the blueprint for your digital masterpiece. Sculpting the blueprint for your digital masterpiece.',
      imageSrc: '/images/asthetic.png',
      imageAlt: 'Aesthetic Engineering Image'
    },
    {
      id: 3,
      title: 'MVP Genesis',
      description: 'Sculpting the blueprint for your digital masterpiece. Sculpting the blueprint for your digital masterpiece. Sculpting the blueprint for your digital masterpiece. Sculpting the blueprint for your digital masterpiece.',
      imageSrc: '/images/asthetic.png',
      imageAlt: 'MVP Genesis Image'
    },
    {
      id: 4,
      title: 'Prototype Symphony',
      description: 'Sculpting the blueprint for your digital masterpiece. Sculpting the blueprint for your digital masterpiece. Sculpting the blueprint for your digital masterpiece. Sculpting the blueprint for your digital masterpiece.',
      imageSrc: '/images/prototype.png',
      imageAlt: 'Prototype Symphony Image'
    },
    {
      id: 5,
      title: 'SaaS & Software Development',
      description: 'Sculpting the blueprint for your digital masterpiece. Sculpting the blueprint for your digital masterpiece. Sculpting the blueprint for your digital masterpiece. Sculpting the blueprint for your digital masterpiece.',
      imageSrc: '/images/development.png',
      imageAlt: 'SaaS & Software Development Image'
    },
    // Add more items as needed
  ];
  const process = [
    {
      number: 1,
      title: "Intital User Survey",
      content: `This non-binding call is for you to get to know our team and pitch us your idea.
      We provide an exemplary overview of how we would handle your project based on your idea.
      We'll provide a breakdown of functionalities/modules with estimated timeframe and budget, along with recommendations.`,

      imageUrl: "/images/user-survey.png",
      backgroundColor: "bg-rose-300",
    },
    {
      number: 2,
      title: "Concept",
      content: `During this stage, you receive a comprehensive proposal for your project covering all aspects of your initial idea.
      We provide you with a concept on how to execute your idea both technically and from all other project-specific perspectives.
      We are naturally open to discussions and changes to ensure that the concept aligns with your agreement.`,
      imageUrl: "/images/concept.png",
      backgroundColor: "bg-violet-300",
    },
    {
      number: 3,
      title: "Development",
      content: `Once the concept is finalized, our team initiates the development of your idea.
      To ensure the project aligns with your vision, we provide meetings after each milestone to discuss progress.
      Given the agility of this process, we offer multiple feedback loops and development iterations upon request.`,
      imageUrl: "images/development.png",
      backgroundColor: "bg-rose-300",
    },
    {
      number: 4,
      title: "Launch",
      content: `Finally, we launch your SaaS solution, striving for a seamless introduction to the market.
      We will provide maintenance and handle further improvements, as well as the addition of new functionalities in future versions.`,
      imageUrl: "/images/launch.png",
      backgroundColor: "bg-violet-300",
    },
  ];
  return (

    <section className="section pt-12 pb-20" id="home">

      <div className="md:mx-10">
        <div className="lg:flex justify-center">
          <div className="text-center">
            {/* 
            <h1 style={{
              backgroundImage: 'linear-gradient(90deg, #6941C6 40.22%, #FFADB9 61.65%)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }} className="text-xl font-bold whitespace-nowrap font-semibold leading-[50px] text-transparent bg-clip-text bg-gradient-to-l from-pink-400 to-blue-600 mb-10">
              Super. Simple. Service.
            </h1> */}

            <div className='md:px-[15rem]'>
              <h1 className="text-2xl md:text-6xl font-bold font-khand  mb-10">
                We <span className='text-fuchsia-600'>build</span>  your ideas , while you spark interest in <span className='text-fuchsia-600'>your customers</span>
              </h1>
            </div>
            <h1 className="text-xl font-sen  mb-10">
              Simple, Transparent IT Services.
            </h1>
            <div className="flex ">
              <img src="/images/flow.png" alt="Logo" className="w-full h-[363px] object-contain " />
            </div>
          </div>
        </div>

        <div className='p-4'>
          {/* <h1 className="text-2xl font-bold text-center mb-10">
            How Our System Works
          </h1> */}
          <SubHeading text="How Our System Works" />
          {/* Map over the process array and render a process component for each object */}
          {process.map((item, index) => (
            <Process
              key={index}
              number={item.number}
              title={item.title}
              content={item.content}
              imageUrl={item.imageUrl}
              backgroundColor={item.backgroundColor}
            />
          ))}
        </div>


        <div className="py-4 px-6 sm:py-8 sm:px-10 ">
          <SectionHeading title="Services" />
          <SubHeading text="We can help you with" />
        </div>


        <div className="max-w-screen-[710px]  mr-2">
          {services.map((service, index) => (
            index % 2 === 0 ? (
              <RightSideImageService
                key={index}
                id={service.id}
                title={service.title}
                description={service.description}
                imageSrc={service.imageSrc}
                imageAlt={service.imageAlt}
              />
            ) : (
              <LeftSideImageService
                key={index}
                id={service.id}
                title={service.title}
                description={service.description}
                imageSrc={service.imageSrc}
                imageAlt={service.imageAlt}
              />
            )
          ))}
        </div>


        <div className="py-4 px-6 sm:py-8 sm:px-10 ">
          <SectionHeading title="Testimonials" />
          <SubHeading text="What Clients Say" />
        </div>
        <div className="flex justify-center items-center ">
          <Slider slides={slides} />
        </div>

        <div className='mt-5'>
          <ContactUs />
        </div>
      </div>
    </section>


  )
}
