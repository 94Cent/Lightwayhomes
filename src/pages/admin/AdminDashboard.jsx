import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../component/ui/table";
import { toast } from "react-toastify";

const AdminDashboard = () => {
  const [allSubscriber, setAllSubscriber] = useState([])
  const [projects, setProjects] = useState([]);
  const [allProjects, setAllProjects] = useState([])
  const [reservations, setReservations] = useState([]);
  const [allReservation, setAllReservation] = useState([])

  useEffect(() => {
    fetchSubscribers();
    fetchProjects();
    fetchReservations();
  }, []);

  const fetchSubscribers = async () => {
    try {
      const response = await fetch("https://lightwayhomesltd.com/backend/controller/subscriber.php?action=getsubscriber");
      const data = await response.json();
      setAllSubscriber(data)
      
    } catch (error) {
      toast.error("Failed to fetch subscribers.");
    }
  };

  const fetchProjects = async () => {
    try {
      const response = await fetch("https://lightwayhomesltd.com/backend/controller/project.php?action=getAllProject");
      const data = await response.json();
      setAllProjects(data)
      setProjects(data.slice(0, 5)); // Display 10 projects
    } catch (error) {
      toast.error("Failed to fetch projects.");
    }
  };

  const fetchReservations = async () => {
    try {
      const response = await fetch("https://lightwayhomesltd.com/backend/controller/reservation.php?action=getallreservation");
      const data = await response.json();
      setAllReservation(data)
      setReservations(data.slice(0, 5)); // Display 10 reservations
    } catch (error) {
      toast.error("Failed to fetch reservations.");
    }
  };

  return (
    <div className="bg-gray-100 p-8 min-h-screen">
      <h1 className="text-3xl font-semibold mb-8 text-purple">Admin Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Projects Section */}
        <div className="md:col-span-1 h-full flex flex-col">
        {/* Additional Section */}
      <div className="mb-6 lg:h-32 h-fit bg-white rounded-lg shadow-lg p-6 md:flex md:justify-around">
        <div className="text-center mb-4 md:mb-0">
          <h3 className="text-xl font-bold text-purple">Total Projects</h3>
          <p className="text-2xl text-gray-700">{allProjects.length}</p>
        </div>
        <div className="text-center mb-4 md:mb-0">
          <h3 className="text-xl font-bold text-purple">Total Subscribers</h3>
          <p className="text-2xl text-gray-700">{allSubscriber.length}</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold text-purple">Total Reservations</h3>
          <p className="text-2xl text-gray-700">{allReservation.length}</p>
        </div>
      </div>
        <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-bold text-purple mb-4">Recent Subscribers</h2>
            <div className="overflow-x-auto overflow-y-auto md:h-[36rem] h-[25rem]">
              <Table className="w-full bg-white">
                <TableHeader>
                  <TableRow>
                    <TableHead>No</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Date Subscribed</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="">
                  {allSubscriber.map((subscriber, index) => (
                    <TableRow key={subscriber.id} className="text-gray-700">
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{subscriber.email}</TableCell>
                      <TableCell>{new Date(subscriber.date_added).toLocaleDateString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
        </div>
        </div>

        <div className="md:col-span-1 flex flex-col gap-8">
          {/* Subscribers Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 min-h-[25rem]">
            
            <h2 className="text-xl font-bold text-purple mb-4">Projects</h2>
          <div className="overflow-x-auto">
            <Table className="w-full bg-white h-[90%]">
              <TableHeader>
                <TableRow>
                  <TableHead>No</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Pricing</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.map((project, index) => (
                  <TableRow key={project.id} className="text-gray-700">
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{project.title}</TableCell>
                    <TableCell>{project.status}</TableCell>
                    <TableCell>{project.pricing}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <Link to="/admin/projects" className="block mt-4 text-right text-purple hover:text-purple">
            See More
          </Link>
          </div>

          {/* Reservations Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 min-h-[25rem]">
            <h2 className="text-xl font-bold text-purple mb-4">Recent Reservations</h2>
            <div className="overflow-x-auto">
              <Table className="w-full bg-white">
                <TableHeader>
                  <TableRow>
                    <TableHead>No</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Date Reserved</TableHead>
                    <TableHead>Method</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reservations.map((reservation, index) => (
                    <TableRow key={reservation.id} className="text-gray-700">
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{reservation.name}</TableCell>
                      <TableCell>{reservation.project_title}</TableCell>
                      <TableCell>{new Date(reservation.date_added).toLocaleDateString()}</TableCell>
                      <TableCell>{reservation.method}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <Link to="/admin/reservations" className="block mt-4 text-right text-purple hover:text-purple">
              See More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
