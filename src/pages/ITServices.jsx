import React from 'react'
import ContactUs from '../components/ContactUs';
import RightSideImageService from '../components/RightSideImageService';
import LeftSideImageService from '../components/LeftSideImageService';
import SectionHeading from '../components/SectionHeading';
import SubHeading from '../components/SubHeading';

export default function ITServices() {
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

  return (
    <div>
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
        <div className='mt-5'>
          <ContactUs />
        </div>
    </div>
  )
}

