import React from "react";
import House2 from "../assets/images/House2.jpeg";
// Import more images here if you want multiple cards

export default function BlogLayout() {
  
  // 👉 Array of multiple blog posts
  const blogPosts = [
    {
      id: 1,
      title: "B.A.G: The High Rise Residential District of Lagos",
      description:
        "Bourdillon, Alexander and Gerrard are popular roads in Ikoyi, the most affluent neighbourhood in Lagos...",
      img: House2,
      author: "CW Real Estate",
      date: "December 24, 2021",
    },
    {
      id: 2,
      title: "Why Now Is the Best Time to Invest in Ikoyi Real Estate",
      description:
        "Ikoyi remains one of the strongest real estate markets in Africa with long-term investment potential...",
      img: House2,
      author: "CW Real Estate",
      date: "January 10, 2022",
    },
    // Add more posts here...
  ];

  return (
    <div className="w-full px-6 lg:px-20 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* LEFT SIDE: BLOG FEED */}
        <div className="col-span-2 space-y-10">

          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden">

              {/* Image + Badge */}
              <div className="relative">
                <span className="absolute top-4 left-4 bg-purple text-white px-4 py-1 rounded-full text-sm">
                  Guide
                </span>

                <img
                  src={post.img}
                  alt="Blog"
                  className="w-full h-[400px] object-cover"
                />
              </div>

              {/* Blog Details Section */}
              <div className="p-6">

                {/* Title */}
                <div className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-red-500 mt-1"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                  </svg>

                  <h2 className="text-2xl font-semibold text-gray-800">
                    {post.title}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-gray-600 mt-3 leading-relaxed">
                  {post.description}
                </p>

                <div className="border-t my-5"></div>

                {/* Footer Section */}
                <div className="flex justify-between items-center">

                  {/* Author + Date */}
                  <div className="flex items-center gap-6">
                    
                    {/* Author */}
                    <div className="flex items-center gap-2 text-gray-700">
                      <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                      <span className="font-medium">{post.author}</span>
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-2 text-gray-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3.75 8.25h16.5M4.5 12h15m-12 4.5h9"
                        />
                      </svg>
                      <span>{post.date}</span>
                    </div>
                  </div>

                  {/* Read More */}
                  <button className="text-purple font-medium flex items-center gap-1 hover:text-red-600">
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 12l-6.75 6.75M17.25 12L10.5 5.25"
                      />
                    </svg>
                  </button>

                </div>
              </div>
            </div>
          ))}

        </div>

        {/* RIGHT SIDE: SIDEBAR */}
        <div className="space-y-6">

          {/* Search Box */}
          <div className="bg-white rounded-xl shadow p-4">
            <div className="flex items-center gap-2 border rounded-lg px-3 py-2">
              <input
                type="text"
                placeholder="Search"
                className="w-full outline-none"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 7.5 7.5a7.5 7.5 0 0 0 9.15 9.15Z"
                />
              </svg>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-semibold text-lg mb-4">Recent Posts</h2>

            <ul className="space-y-3">
              <li className="flex items-start cursor-pointer hover:text-purple">
                <span className="mr-2 text-lg">›</span>
                How Serviced Apartments in Lagos Help You Earn More and Live Better
              </li>
              <li className="flex items-start cursor-pointer hover:text-purple">
                <span className="mr-2 text-lg">›</span>
                Why Now Is the Best Time to Invest in Ikoyi Real Estate
              </li>
              <li className="flex items-start cursor-pointer hover:text-purple">
                <span className="mr-2 text-lg">›</span>
                How Much is 2-Bedroom Off-Plan Apartments in Lagos
              </li>
              <li className="flex items-start cursor-pointer hover:text-purple">
                <span className="mr-2 text-lg">›</span>
                Best Shortlet Apartments in Lagos 2025
              </li>
            </ul>
          </div>

          {/* Recent Comments */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-semibold text-lg mb-4">Recent Comments</h2>

            <ul className="space-y-4 text-[15px]">
              <li>
                <span className="font-medium text-gray-700">USA traffic</span>
                <span className="text-gray-500"> on </span>
                <span className="text-purple cursor-pointer">
                  Inside The Belmonte: A Closer Look at Lagos’s Luxury Apartments
                </span>
              </li>

              <li>
                <span className="font-medium text-gray-700">polygon</span>
                <span className="text-gray-500"> on </span>
                <span className="text-purple cursor-pointer">
                  Inside The Belmonte: A Closer Look at Lagos’s Luxury Apartments
                </span>
              </li>

              <li>
                <span className="font-medium text-gray-700">minswap</span>
                <span className="text-gray-500"> on </span>
                <span className="text-purple cursor-pointer">
                  Inside The Belmonte: A Closer Look at Lagos’s Luxury Apartments
                </span>
              </li>

              <li>
                <span className="font-medium text-gray-700">iziswap</span>
                <span className="text-gray-500"> on </span>
                <span className="text-purple cursor-pointer">
                  Inside The Belmonte: A Closer Look at Lagos’s Luxury Apartments
                </span>
              </li>

              <li>
                <span className="font-medium text-gray-700">Ibukun</span>
                <span className="text-gray-500"> on </span>
                <span className="text-purple cursor-pointer">
                  Quick Tips for Inspecting a Property Before Buying.
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
