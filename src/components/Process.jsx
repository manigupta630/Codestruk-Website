import React from 'react';

const Process = ({ number, title, content, imageUrl, backgroundColor }) => {
  const paragraphs = content.split('.').map((paragraph, index, array) => {
    if (index < array.length - 1) {
      paragraph += '.';
    }

    return (
      <p key={index}>
        {paragraph}
        {index < array.length - 1 && <><br /><br /></>}
      </p>
    );
  });

  return (
    <div className={`flex flex-col md:flex-row font-sen items-center justify-between max-w-[740px] mx-auto my-8 p-6 rounded-[40px] ${backgroundColor}`}>
      <div className="flex-1 mb-4 md:mb-0">
        <h3 className="text-lg font-bold mb-2">{number}. {title}</h3>
        <div className='text-sm'>{paragraphs}</div>
      </div>
      <div className="flex-shrink-0 w-48 h-48 md:ml-4 flex justify-center items-center">
        <img
          src={imageUrl}
          alt="Image"
          className="w-full h-32 object-contain"
        />
      </div>
    </div>
  );
};

export default Process;
