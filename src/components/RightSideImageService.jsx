import { NavLink } from "react-router-dom";

const RightSideImageService = ({
  id,
  title,
  description,
  imageSrc,
  imageAlt,
}) => (
  <div className="flex flex-col items-center justify-center mb-10  ml-2 md:ml-[-5rem]">
    <div className="flex flex-col max-w-[39rem] w-full">
      <div className="md:grid w-full">
        <div className="relative bg-rose-300 rounded-3xl ">
          {/* Image for small screens */}
          <div className="md:hidden flex justify-center py-8 px-4">
            <div
              className="rounded-full border-2 border-rose-300 border-solid max-md:px-5 max-md:max-w-full relative"
              style={{ width: "13rem", height: "13rem" }}
            >
              <div
                className="rounded-full overflow-hidden"
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  loading="lazy"
                  src={imageSrc}
                  className="ml-3 w-full h-full aspect-auto max-md:ml-2.5"
                  alt={imageAlt}
                  style={{
                    objectFit: "cover",
                    maxHeight: "100%",
                    maxWidth: "100%",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center  p-[3.5rem] px-8 md:items-start self-stretch my-auto w-full text-gray-900 bg-rose-300 rounded-3xl shadow-xl relative">
            {/* Title */}
            <div className="text-xl md:text-2xl font-bold">{title}</div>
            {/* Description */}
            <div className="mt-4 text-sm md:w-[19rem]">{description}</div>
            {/* Button */}
            <div className="relative inline-block text-lg group mt-6 w-32">
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3  bg-violet-500"></span>
                <span className="absolute left-0 w-40 h-40 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <NavLink
                  to={`/service-detail/${id}`}
                  className="relative whitespace-nowrap"
                >
                  Learn more
                </NavLink>
                {/* <button  className="relative whitespace-nowrap">
                  Learn more
                </button> */}
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </div>
          </div>

          {/* Image for medium and large screens */}
          <div className="image-div bg-transparent hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 md:w-1/3 z-0">
            <div
              className="flex flex-col justify-center px-8 py-8 w-full rounded-full border-2 border-rose-300 border-solid max-md:px-5 max-md:max-w-full relative bg-violet-50 justify-self-end"
              style={{
                width: "22rem",
                height: "22rem",
                position: "absolute",
                top: "50%",
                right: "-46%",
                transform: "translateY(-50%)",
              }}
            >
              <div
                className="rounded-full overflow-hidden"
                style={{
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  loading="lazy"
                  src={imageSrc}
                  className="ml-3 w-full h-full aspect-auto max-md:ml-2.5"
                  alt={imageAlt}
                  style={{
                    objectFit: "cover",
                    maxHeight: "100%",
                    maxWidth: "100%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RightSideImageService;
