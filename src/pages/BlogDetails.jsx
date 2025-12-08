import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function BlogDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost/backend/controller/blog.php?action=get_blog&id=${id}`)
      .then(res => res.json())
      .then(data => setPost(data))
      .catch(err => console.log(err));
  }, [id]);

  if (!post) return <p className="p-10">Loading...</p>;

  return (
    <div className="w-full px-6 lg:px-20 py-10">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <img src={post.image} className="w-full h-[400px] object-cover" />

        <div className="p-6">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            {post.title}
          </h1>

          <div className="text-gray-700 leading-relaxed whitespace-pre-line">
            {post.body}
          </div>

          <div className="mt-10">
            <Link to="/blog" className="text-purple hover:text-red-600">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
