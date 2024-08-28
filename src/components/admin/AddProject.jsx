import { toast } from "react-toastify";
import { useState } from "react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../../component/ui/dialog";
export const AddProject = ({ isOpen, setIsOpen }) => {
  const [formData, setFormData] = useState({
    title: "",
    details: "",
    pricing: "",
    status: "in progress",
    address: "",
    nameID: "",
    engineer: "lightway homes",
    pictures: [],
  });

  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      pictures: e.target.files,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    const projectData = new FormData();
    projectData.append("title", formData.title);
    projectData.append("details", formData.details);
    projectData.append("pricing", formData.pricing);
    projectData.append("status", formData.status);
    projectData.append("engineer", formData.engineer);
    projectData.append("nameID", formData.nameID);
    projectData.append("address", formData.address);
    for (let i = 0; i < formData.pictures.length; i++) {
      projectData.append("pictures[]", formData.pictures[i]);
    }

    try {
      const response = await fetch(
        "https://lightwayhomesltd.com/backend/controller/project.php?action=save_project",
        {
          method: "POST",
          body: projectData,
        }
      );

      if (response.ok) {
        toast.success("Project saved successfully");
        // Add further actions like redirecting the user or showing a success message
      } else {
        toast.error("Failed to save project");
      }
    } catch (error) {
      toast.error("An error occurred while saving the project", error);
    } finally {
      setIsLoading(false); // Stop loading
      setIsOpen(false);
    }
  };

  return (
    <>
      {isOpen && (
        <DialogContent className="sm:max-w-[425px] h-full my-4">
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Add Project</DialogTitle>
            </DialogHeader>
            <div className="sm:max-w-[425px] p-4 overflow-y-scroll h-[80vh]">
              <div className="flex flex-col justify-center gap-2">
                <label htmlFor="title">Title</label>
                <input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="4 Bedroom + BQ"
                  className="border-gray-400 border px-4 py-3 rounded"
                  required
                  disabled={isLoading} // Disable input while loading
                />
              </div>
              <div className="flex flex-col justify-center gap-2">
                <label htmlFor="details">Details</label>
                <input
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="OffPlan"
                  className="border-gray-400 border px-4 py-3 rounded"
                  required
                  disabled={isLoading} // Disable input while loading
                />
              </div>
              <div className="flex flex-col justify-center gap-2">
                <label htmlFor="pricing">Pricing</label>
                <input
                  id="pricing"
                  name="pricing"
                  type="number"
                  value={formData.pricing}
                  onChange={handleChange}
                  placeholder="62,000,000"
                  className="border-gray-400 border px-4 py-3 rounded"
                  required
                  disabled={isLoading} // Disable input while loading
                />
              </div>
              <div className="flex flex-col justify-center gap-2">
                <label htmlFor="engineer">Engineer</label>
                <input
                  id="engineer"
                  name="engineer"
                  value={formData.engineer}
                  onChange={handleChange}
                  placeholder="Lightway homes"
                  className="border-gray-400 border px-4 py-3 rounded"
                  required
                  disabled={isLoading} // Disable input while loading
                />
              </div>
              <div className="flex flex-col justify-center gap-2">
                <label htmlFor="nameID">nameID</label>
                <input
                  id="nameID"
                  name="nameID"
                  type="number"
                  max={3}
                  value={formData.nameID}
                  onChange={handleChange}
                  placeholder="1"
                  className="border-gray-400 border px-4 py-3 rounded"
                  required
                  disabled={isLoading} // Disable input while loading
                />
              </div>
              <div className="flex flex-col justify-center gap-2">
                <label htmlFor="address">Address</label>
                <input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="No. 4, Oyewo close, Clay Busstop, Juli Estate"
                  className="border-gray-400 border px-4 py-3 rounded"
                  required
                  disabled={isLoading} // Disable input while loading
                />
              </div>
              <div className="flex flex-col justify-center gap-2">
                <label htmlFor="status">Status</label>
                <select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="border-gray-400 border px-4 py-3 rounded"
                  required
                  disabled={isLoading} // Disable select while loading
                >
                  <option value="in progress">In Progress</option>
                  <option value="completed">Completed</option>
                  <option value="upcoming">Upcoming</option>
                </select>
              </div>
              <div className="flex flex-col justify-center gap-2">
                <label htmlFor="pictures">Upload Pictures</label>
                <input
                  id="pictures"
                  name="pictures"
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="border-gray-400 border px-4 py-3 rounded"
                  disabled={isLoading} // Disable file input while loading
                />
              </div>
              <DialogFooter className="flex justify-end my-4">
                <button
                  type="submit"
                  className="bg-purple text-white px-4 py-2 rounded"
                  disabled={isLoading}
                >
                  {isLoading ? "Saving..." : "Save project"}
                </button>
              </DialogFooter>
            </div>
          </form>
        </DialogContent>
      )}
    </>
  );
};
