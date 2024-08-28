import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../component/ui/table";
import { EllipsisVertical, PencilOff, Trash2 } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../component/ui/popover";
import { Dialog, DialogTrigger } from "../../component/ui/dialog";
import { AlertDialog, AlertDialogTrigger } from "component/ui/alert-dialog";
import { DeleteDialog, UpdateDialog } from "components/admin/UpdateDialog";
import { AddProject } from "components/admin/AddProject";

const More = ({ projectId, onDelete, onUpdate }) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(true);
  const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(true);
  return (
    <PopoverContent className="bg-white rounded-lg shadow-md">
      <Dialog>
        <DialogTrigger asChild>
          <div
            className="flex justify-center py-3 px-6 items-center cursor-pointer gap-x-5 text-yellow-300 font-semibold border-b"
            projectId={projectId}
          >
            Update
            <PencilOff />
          </div>
        </DialogTrigger>
        {isUpdateDialogOpen && (
          <UpdateDialog
            projectId={projectId}
            onUpdate={onUpdate}
            setIsUpdateDialogOpen={setIsUpdateDialogOpen}
          />
        )}
      </Dialog>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <div
            className="flex py-3 px-6 justify-center items-center gap-x-5 text-red-700 font-semibold border-b cursor-pointer"
            projectId={projectId}
          >
            Delete
            <Trash2 />
          </div>
        </AlertDialogTrigger>
        {isDeleteDialogOpen && (
          <DeleteDialog
            projectId={projectId}
            onDelete={onDelete}
            setIsDeleteDialogOpen={setIsDeleteDialogOpen}
          />
        )}
      </AlertDialog>
    </PopoverContent>
  );
};

function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch(
        "http://lightwayhomesltd.com/backend/controller/project.php?action=getAllProject"
      );
      const data = await response.json();
      if (response.ok) {
        setProjects(data);
        console.log(data, "Data Projects");
      } else {
        console.log(data, "Data Projects");
      }
    } catch (error) {
      console.log(error, "Data Projects");
    }
  };

  const handleDelete = (projectId) => {
    setProjects(projects.filter((project) => project.id !== projectId));
  };

  const handleUpdate = (projectId, status) => {
    setProjects(
      projects.map((project) =>
        project.id === projectId ? { ...project, status } : project
      )
    );
  };

  const getProjectLink = (id) => {
    switch (id) {
      case "1":
        return "The-Naples";
      case "2":
        return "The-Roman-Height";
      case "3":
        return "The-Novara-Court";
      default:
        return "#";
    }
  };

  return (
    <>
      <div className="bg-gray-100 p-8 min-h-screen">
        <div className="bg-white rounded-lg w-full shadow-lg p-6">
          <div className="flex justify-between items-center my-4">
            <h1 className="text-2xl font-semibold mb-6 text-purple">
              Projects
            </h1>
            <Dialog>
              <DialogTrigger asChild>
                <button className="bg-purple text-white px-4 py-2.5 text-lg">
                  Save Project
                </button>
              </DialogTrigger>
              <AddProject
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
            </Dialog>
          </div>
          <div className="overflow-x-auto">
            <Table className="w-full bg-white">
              <TableHeader className="w-screen">
                <TableRow className="w-full">
                  <TableHead
                    colSpan={0.5}
                    className=" py-2 text-purple font-semibold"
                  >
                    No
                  </TableHead>
                  <TableHead
                    colSpan={2}
                    className="py-2 text-purple font-semibold"
                  >
                    Name
                  </TableHead>
                  <TableHead
                    colSpan={2}
                    className="text-purple font-semibold py-2"
                  >
                    Project Name
                  </TableHead>
                  <TableHead
                    colSpan={2}
                    className="text-purple font-semibold py-2"
                  >
                    Status
                  </TableHead>
                  <TableHead
                    colSpan={1}
                    className="text-purple font-semibold py-2 text-center"
                  >
                    Pricing
                  </TableHead>
                  <TableHead
                    colSpan={2}
                    className="text-purple font-semibold py-2"
                  >
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.map((project, index) => (
                  <TableRow key={project.id} className="text-purple">
                    <TableCell colSpan={0.5} className="py-2">
                      {index + 1}
                    </TableCell>
                    <TableCell colSpan={2} className="py-2">
                      {getProjectLink(project.project_name_id)}
                    </TableCell>
                    <TableCell colSpan={2} className="py-2">
                      {project.title}
                    </TableCell>
                    <TableHead
                      colSpan={2}
                      className="text-purple font-semibold py-2"
                    >
                      {project.status}
                    </TableHead>
                    <TableCell className="py-2 text-center">
                      {project.pricing}
                    </TableCell>
                    <TableCell colSpan={2} className="py-2r">
                      <Popover>
                        <PopoverTrigger asChild>
                          <EllipsisVertical className="cursor-pointer" />
                        </PopoverTrigger>
                        <More
                          projectId={project.id}
                          onDelete={handleDelete}
                          onUpdate={handleUpdate}
                        />
                      </Popover>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminProjects;
