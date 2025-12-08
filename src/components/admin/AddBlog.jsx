import { toast } from "react-toastify";
import { useState } from "react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../../component/ui/dialog";

export const AddBlog = ({ isOpen, setIsOpen }) => {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    category: "General",
    author: "Light Way Homes",
    content: "",
    images: [],
    link1: "",
    link2: ""
  });

  const [isLoading, setIsLoading] = useState(false);

  // Handle text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle images
  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      images: e.target.files,
    }));
  };

  // Submit blog
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const blogData = new FormData();

    blogData.append("title", formData.title);
    blogData.append("subtitle", formData.subtitle);
    blogData.append("category", formData.category);
    blogData.append("author", formData.author);

    // IMPORTANT FIX
    blogData.append("body", formData.content);

    blogData.append("link1", formData.link1);
    blogData.append("link2", formData.link2);

    // handle multiple images
    for (let i = 0; i < formData.images.length; i++) {
      blogData.append("images[]", formData.images[i]);
    }

    try {
      const response = await fetch(
        "http://localhost/backend/controller/blog.php?action=save_blog",
        {
          method: "POST",
          body: blogData,
        }
      );

      const result = await response.json();

      if (response.ok) {
        toast.success("Blog published successfully!");
      } else {
        toast.error(result?.message || "Failed to publish blog");
      }
    } catch (error) {
      toast.error("An error occurred while publishing the blog");
      console.log(error);
    } finally {
      setIsLoading(false);
      setIsOpen(false);
      window.location.reload();
    }
  };

  return (
    <>
      {isOpen && (
        <DialogContent className="sm:max-w-[500px] h-full my-4">
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Publish New Blog Article</DialogTitle>
            </DialogHeader>

            <div className="sm:max-w-[500px] p-4 overflow-y-scroll h-[80vh]">
              
              {/* TITLE */}
              <div className="flex flex-col gap-2 mb-3">
                <label>Title</label>
                <input
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="border px-4 py-3 rounded"
                  required
                />
              </div>

              {/* SUBTITLE */}
              <div className="flex flex-col gap-2 mb-3">
                <label>Subtitle</label>
                <input
                  name="subtitle"
                  value={formData.subtitle}
                  onChange={handleChange}
                  className="border px-4 py-3 rounded"
                />
              </div>

              {/* CATEGORY */}
              <div className="flex flex-col gap-2 mb-3">
                <label>Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="border px-4 py-3 rounded"
                >
                  <option value="General">General</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Construction">Construction</option>
                  <option value="Investment">Investment</option>
                </select>
              </div>

              {/* AUTHOR */}
              <div className="flex flex-col gap-2 mb-3">
                <label>Author</label>
                <input
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  className="border px-4 py-3 rounded"
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-col gap-2 mb-3">
                <label>Content</label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  className="border px-4 py-3 rounded h-40"
                  required
                ></textarea>
              </div>

              {/* OPTIONAL LINKS */}
              <div className="flex flex-col gap-2 mb-3">
                <label>Link 1 (optional)</label>
                <input
                  name="link1"
                  value={formData.link1}
                  onChange={handleChange}
                  className="border px-4 py-3 rounded"
                />
              </div>

              <div className="flex flex-col gap-2 mb-3">
                <label>Link 2 (optional)</label>
                <input
                  name="link2"
                  value={formData.link2}
                  onChange={handleChange}
                  className="border px-4 py-3 rounded"
                />
              </div>

              {/* IMAGES */}
              <div className="flex flex-col gap-2 mb-3">
                <label>Featured Images</label>
                <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="border px-4 py-3 rounded"
                />
              </div>

              <DialogFooter>
                <button
                  type="submit"
                  className="bg-purple text-white px-4 py-2 rounded"
                  disabled={isLoading}
                >
                  {isLoading ? "Publishing..." : "Publish Blog"}
                </button>
              </DialogFooter>
            </div>
          </form>
        </DialogContent>
      )}
    </>
  );
};
