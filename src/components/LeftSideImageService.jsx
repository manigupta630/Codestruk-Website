const LeftSideImageService = ({ title, description, imageSrc, imageAlt }) => (
  <div className="flex flex-col items-center justify-center ml-2 md:ml-[-5rem] mb-10 ">
    <div className="flex flex-col max-w-[39rem] w-full md:ml-[12.5rem]">
      <div className="md:grid  w-full">
        <div className="relative bg-violet-300 rounded-3xl">
          {/* Image for small screens */}
          <div className="md:hidden flex justify-center py-8 px-4">
            <div
              className="rounded-full border-2 border-violet-300 border-solid max-md:px-5 max-md:max-w-full relative "
              style={{ width: '13rem', height: '13rem' }}
            >
              <div
                className="rounded-full overflow-hidden h-full flex items-center justify-center"
              >
                <img
                  loading="lazy"
                  src={imageSrc}
                  className="ml-3 w-full h-full object-cover max-md:ml-2.5"
                  alt={imageAlt}
                />
              </div>
            </div>
          </div>

          <div
            className="flex flex-col p-[3.5rem] px-8 md:items-end self-stretch my-auto w-full text-gray-900 bg-violet-300 rounded-3xl shadow-xl relative"
            style={{ marginTop: '-0.5rem', marginBottom: '-0.5rem' }}
          >
            <div className="text-xl md:text-2xl font-bold md:w-[19rem] text-left">
              {title}
            </div>
            <div className="mt-4 text-sm md:w-[19rem] text-left">
              {description}
            </div>
            <div className="relative inline-block text-lg group w-32 mt-6 md:mr-[10rem]">
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out rounded-tl-lg rounded-br-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-tl-lg rounded-br-lg bg-violet-500"></span>
                <span className="absolute left-0 w-40 h-40 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <button className="relative whitespace-nowrap">
                  Learn more
                </button>
              </span>
              <span
                className="absolute bottom-0 left-0 w-full h-12 -mb-1 -ml-1 transition-all duration-200 ease-linear bg-gray-900 rounded-tl-lg rounded-br-lg group-hover:mb-0 group-hover:ml-0"
                data-rounded="rounded-lg"
              ></span>
            </div>
          </div>

          {/* Image for medium and large screens */}
          <div className="image-div bg-transparent hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 md:w-1/3">
            <div
              className="flex flex-col justify-center px-8 py-8 w-full rounded-full border-2 border-violet-300 border-solid max-md:px-5 max-md:max-w-full relative bg-violet-50 justify-self-start"
              style={{
                width: '22rem',
                height: '22rem',
                position: 'absolute',
                top: '50%',
                left: '-46%',
                transform: 'translateY(-50%)',
              }}
            >
              <div
                className="rounded-full overflow-hidden h-full flex items-center justify-center"
              >
                <img
                  loading="lazy"
                  src={imageSrc}
                  className="ml-3 w-full h-full object-cover max-md:ml-2.5"
                  alt={imageAlt}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default LeftSideImageService;