import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../component/ui/table";

import { EllipsisVertical, Pencil, Trash2 } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../component/ui/popover";

import { Dialog, DialogTrigger } from "../../component/ui/dialog";

import { AlertDialog, AlertDialogTrigger } from "../../component/ui/alert-dialog";

import { DeleteDialog, UpdateDialog } from "../../components/admin/UpdateDialog";
import { AddBlog } from "../../components/admin/AddBlog";


// Action Menu Component
const More = ({ blogId, onDelete, onUpdate }) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false);

  return (
    <PopoverContent className="bg-white rounded-lg shadow-md">

      {/* Update */}
      <Dialog open={isUpdateDialogOpen} onOpenChange={setIsUpdateDialogOpen}>
        <DialogTrigger asChild>
          <div
            className="flex justify-center py-3 px-6 items-center cursor-pointer gap-x-5 text-yellow-600 font-semibold border-b"
          >
            Update
            <Pencil />
          </div>
        </DialogTrigger>
        <UpdateDialog
          blogId={blogId}
          onUpdate={onUpdate}
          setIsUpdateDialogOpen={setIsUpdateDialogOpen}
        />
      </Dialog>

      {/* Delete */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogTrigger asChild>
          <div
            className="flex py-3 px-6 justify-center items-center gap-x-5 text-red-700 font-semibold cursor-pointer"
          >
            Delete
            <Trash2 />
          </div>
        </AlertDialogTrigger>

        <DeleteDialog
          blogId={blogId}
          onDelete={onDelete}
          setIsDeleteDialogOpen={setIsDeleteDialogOpen}
        />
      </AlertDialog>

    </PopoverContent>
  );
};



// MAIN BLOG ADMIN PAGE
function AdminBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(
        "https://lightwayhomesltd.com/backend/controller/blog.php?action=getAllBlog"
      );
      const data = await response.json();

      if (response.ok) {
        setBlogs(data);
      }
    } catch (error) {
      console.log("Error fetching blogs:", error);
    }
  };

  const handleDelete = (blogId) => {
    setBlogs(blogs.filter((b) => b.id !== blogId));
  };

  const handleUpdate = (blogId, updatedData) => {
    setBlogs(
      blogs.map((b) =>
        b.id === blogId ? { ...b, ...updatedData } : b
      )
    );
  };


  return (
    <div className="bg-gray-100 p-8 min-h-screen">
      <div className="bg-white rounded-lg w-full shadow-lg p-6">

        {/* Header */}
        <div className="flex justify-between items-center my-4">
          <h1 className="text-2xl font-semibold text-purple">Blogs</h1>

          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <button className="bg-purple text-white px-4 py-2.5 rounded">
                New Blog
              </button>
            </DialogTrigger>
            <AddBlog isOpen={isOpen} setIsOpen={setIsOpen} />
          </Dialog>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <Table className="w-full bg-white">

            <TableHeader>
              <TableRow>
                <TableHead>No</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Author</TableHead>
                <TableHead className="text-center">Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {blogs.map((blog, index) => (
                <TableRow key={blog.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{blog.title}</TableCell>
                  <TableCell>{blog.category}</TableCell>
                  <TableCell>{blog.author}</TableCell>

                  <TableCell className="text-center">
                    <Popover>
                      <PopoverTrigger asChild>
                        <EllipsisVertical className="cursor-pointer" />
                      </PopoverTrigger>

                      <More
                        blogId={blog.id}
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
  );
}

export default AdminBlogs;
