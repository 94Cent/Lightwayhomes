import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost/backend/controller/blog.php?action=get_blogs")
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="w-full px-6 lg:px-20 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        <div className="col-span-2 space-y-10">
          {blogs.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[400px] object-cover"
                />
              </div>

              <div className="p-6">
                
                <Link to={`/blog/${post.id}`}>
                  <h2 className="text-2xl font-semibold text-gray-800 hover:text-purple transition-colors">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-gray-600 mt-3 leading-relaxed">
                  {post.body.substring(0, 150)}...
                </p>

                <Link
                  to={`/blog/${post.id}`}
                  className="text-purple font-medium flex items-center gap-1 hover:text-red-600 mt-3"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* SIDEBAR */}
        <div className="space-y-6">
          {/* your sidebar remains exactly the same */}
        </div>
      </div>
    </div>
  );
}
