import React from 'react';

const ContactUs = () => {
  return (
    <div className="grid grid-cols-1   md:grid-cols-2 md:gap-4 grid-auto-rows-auto">
      <div className=" ">
        <img
          src="/images/greatidea.png"
          alt="great image"
          className="rounded-lg w-full md:h-[41rem]"
        />
      </div>
      <div className="flex flex-col ml-2 md:mr-0 mr-2 md:ml-0">
        <h2 className="text-2xl font-bold">Get in touch</h2>
        <p className="mb-1">Our friendly team would love to hear from you</p>
        <form className="grid grid-cols-1 gap-2 ">
          {/* Full Name */}
          <div className='mb-1'>
            <label htmlFor="fullName" className="font-semibold">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Full Name"
              name="fullName"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          {/* Email */}
          <div className='mb-1'>
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@company.com"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          {/* Mobile Number */}
          <div className='mb-1'>
            <label htmlFor="mobileNumber" className="font-semibold">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobileNumber"
              placeholder="+91 123456789"
              name="mobileNumber"
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          {/* Checkbox for WhatsApp */}
          <div className="flex items-center mb-1">
            <input
              type="checkbox"
              id="isWhatsApp"
              name="isWhatsApp"
              className="mr-2"
            />
            <label htmlFor="isWhatsApp">Is this your WhatsApp number?</label>
          </div>
          <div className="flex flex-col md:flex-row mb-1 flex-wrap">
            <div className="flex items-center mr-4">
              <input
                type="radio"
                id="webDesign"
                name="services"
                value="webDesign"
                className="mr-1"
              />
              <label htmlFor="webDesign" className="whitespace-nowrap">
                Web Design
              </label>
            </div>
            <div className="flex items-center mr-4">
              <input
                type="radio"
                id="logoDesign"
                name="services"
                value="logoDesign"
                className="mr-1"
              />
              <label htmlFor="logoDesign" className="whitespace-nowrap">
                Logo Design
              </label>
            </div>
            <div className="flex items-center mr-4">
              <input
                type="radio"
                id="webDevelopment"
                name="services"
                value="webDevelopment"
                className="mr-1"
              />
              <label htmlFor="webDevelopment" className="whitespace-nowrap">
                Web Development
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="other"
                name="services"
                value="other"
                className="mr-1"
              />
              <label htmlFor="other" className="whitespace-nowrap">
                Other
              </label>
            </div>
          </div>
          {/* Textarea for explaining ideas */}
          <div>
            <label htmlFor="ideasExplanation" className="font-semibold">
              Explain your ideas in brief
            </label>
            <textarea
              id="ideasExplanation"
              placeholder="Leave us a message..."
              name="ideasExplanation"
              rows="5"
              className="w-full border border-gray-300 rounded-md p-2"
            ></textarea>
          </div>
          {/* Checkbox for agreement */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="agreeCheckbox"
              name="agreeCheckbox"
              className="mr-2"
            />
            <label htmlFor="agreeCheckbox">
              You agree to our friendly{' '}
              <span className="ml-2 underline">privacy policy</span>
            </label>
          </div>
          <button
            type="submit"
            className="bg-[#7F56D9] border border-solid border-1 text-white py-2  px-4 rounded-md"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;