import { useState } from "react";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../../component/ui/alert-dialog";
import { Button } from "../../component/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../component/ui/dialog";
import { toast } from "react-toastify";

// Delete Dialog Component
export const DeleteDialog = ({
  projectId,
  onDelete,
  setIsDeleteDialogOpen,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("id", projectId);

      const response = await fetch(
        "https://lightwayhomesltd.com/backend/controller/project.php?action=deleteProject",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      if (data.status === "success") {
        toast.success("Project deleted successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        if (onDelete) onDelete(projectId); // Notify parent component if you need to update the UI
      } else {
        toast.error("Failed to delete project", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error("An error occurred while deleting the project", error);
      toast.error("An error occurred while deleting the project", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setIsLoading(false);
      setIsDeleteDialogOpen(false);
    }
  };

  return (
    <>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the
            project and remove the data from the servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isLoading}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-600"
            onClick={handleDelete}
            disabled={isLoading}
          >
            {isLoading ? "Deleting..." : "Continue"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </>
  );
};

// Update Dialog Component
export const UpdateDialog = ({
  projectId,
  onUpdate,
  setIsUpdateDialogOpen,
}) => {
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdate = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("id", projectId);
      formData.append("status", status);

      const response = await fetch(
        "https://lightwayhomesltd.com/backend/controller/project.php?action=updateProjectStatus",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      if (data.status === "sucess") {
        toast.success("Project updated successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        if (onUpdate) onUpdate(projectId, status); // Notify parent component to update the UI
      } else {
        toast.error("Failed to update project", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error("An error occurred while updating the project", error);
      toast.error("An error occurred while updating the project", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setIsLoading(false);
      setIsUpdateDialogOpen(false);
    }
  };

  return (
    <>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Status</DialogTitle>
          <DialogDescription>
            Make changes to the project status here. Click save when you're
            done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="status" className="text-right">
              Status :
            </label>
            <input
              id="status"
              placeholder="Completed"
              className="col-span-3 border rounded border-gray-300 p-3 outline-none"
              onChange={(e) => setStatus(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={handleUpdate}
            type="submit"
            className="bg-purple ml-auto"
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Save changes"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </>
  );
};
