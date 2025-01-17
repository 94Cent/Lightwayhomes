import React from 'react';

function Channels() {
  return (
    <section className="md:py-8 py-7">
      <div className="container px-3 mx-auto text-purple-700 text-center">
        <h2 className="md:text-3xl text-2xl font-normal text-center md:my-12 my-4 text-purple">Our Channels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-[80%] w-full mx-auto">
          <div className="bg-white md:rounded-lg rounded overflow-hidden shadow-lg">
            <iframe 
              className="w-full md:h-96 h-64"
              src="https://www.youtube.com/embed/Fy9W1zkfk1Q" 
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="bg-white md:rounded-lg rounded overflow-hidden shadow-lg">
            <iframe 
              className="w-full md:h-96 h-64"
              src="https://www.youtube.com/embed/53H6giagV3Q" 
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Channels;
