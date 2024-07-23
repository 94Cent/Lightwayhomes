import React from 'react';

function News() {
  return (
    <section className="md:py-4">
      <div className="container mx-auto text-purple">
        <h2 className="md:text-3xl text-2xl font-normal text-center md:my-10 my-8">Our Latest News</h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-y-16 gap-y-4 gap-x-8 place-items-center">
          {Array(4).fill().map((_, index) => (
            <div key={index} className="md:w-[460px] w-[90%] shadow p-4 border-l-4 border-l-purple">
              <h3 className="md:text-2xl text-lg font-normal">Lightway Homes Plan For Expansion</h3>
              <p className="mt-2 w-full font-[200] leading-6 md:text-base text-sm">Lightway is planning to expand their business to European down to Asian countries... <a href="#" className="text-purple font-bold ">Learn More</a></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default News;
