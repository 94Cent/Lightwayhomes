import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../component/ui/table";
import { toast } from "react-toastify";

// DashboardCard component for total counts
const DashboardCard = ({ title, count }) => (
  <div className="text-center">
    <h3 className="text-xl font-bold text-purple">{title}</h3>
    <p className="text-2xl text-gray-700">{count}</p>
  </div>
);

// TableSection component to handle tables
const TableSection = ({ title, columns, data, renderRow, link, linkText }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 min-h-[25rem]">
    <h2 className="text-xl font-bold text-purple mb-4">{title}</h2>
    <div className="overflow-x-auto">
      <Table className="w-full bg-white">
        <TableHeader>
          <TableRow>
            {columns.map((col, index) => (
              <TableHead key={index}>{col}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => renderRow(item, index))}
        </TableBody>
      </Table>
    </div>
    {link && (
      <Link to={link} className="block mt-4 text-right text-purple hover:text-purple">
        {linkText}
      </Link>
    )}
  </div>
);

const AdminDashboard = () => {
  const [allSubscriber, setAllSubscriber] = useState([]);
  const [projects, setProjects] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [reservations, setReservations] = useState([]);
  const [allReservation, setAllReservation] = useState([]);
  const [allDownloads, setAllDownloads] = useState([]);
  const [filteredDownloads, setFilteredDownloads] = useState([]); // State for filtered downloads
  const [selectedBrochure, setSelectedBrochure] = useState(""); // State for the selected brochure

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // Filter downloads when a brochure is selected
    if (selectedBrochure) {
      setFilteredDownloads(
        allDownloads.filter(download => download.brochure === selectedBrochure)
      );
    } else {
      setFilteredDownloads(allDownloads); // Show all downloads if no brochure is selected
    }
  }, [selectedBrochure, allDownloads]);

  const fetchData = () => {
    fetchSubscribers();
    fetchProjects();
    fetchReservations();
    fetchDownloadActivities();
  };

  const fetchSubscribers = async () => {
    try {
      const response = await fetch("https://lightwayhomesltd.com/backend/controller/subscriber.php?action=getsubscriber");
      const data = await response.json();
      setAllSubscriber(data);
    } catch (error) {
      toast.error("Failed to fetch subscribers.");
    }
  };

  const fetchDownloadActivities = async () => {
    try {
      const response = await fetch("https://lightwayhomesltd.com/backend/controller/subscriber.php?action=getDownloaders");
      const data = await response.json();
      setAllDownloads(data);
      setFilteredDownloads(data); // Set initial downloads
    } catch (error) {
      toast.error("Failed to fetch downloads.");
    }
  };

  const fetchProjects = async () => {
    try {
      const response = await fetch("https://lightwayhomesltd.com/backend/controller/project.php?action=getAllProject");
      const data = await response.json();
      setAllProjects(data);
      setProjects(data.slice(0, 5)); // Display first 5 projects
    } catch (error) {
      toast.error("Failed to fetch projects.");
    }
  };

  const fetchReservations = async () => {
    try {
      const response = await fetch("https://lightwayhomesltd.com/backend/controller/reservation.php?action=getallreservation");
      const data = await response.json();
      setAllReservation(data);
      setReservations(data.slice(0, 5)); // Display first 5 reservations
    } catch (error) {
      toast.error("Failed to fetch reservations.");
    }
  };

  const handleBrochureFilterChange = (e) => {
    setSelectedBrochure(e.target.value);
  };

  return (
    <div className="bg-gray-100 p-8 min-h-screen">
      <h1 className="text-3xl font-semibold mb-8 text-purple">Admin Dashboard</h1>

      {/* Overview Cards */}
      <div className="lg:h-32 h-fit bg-white rounded-lg shadow-lg p-6 md:flex md:justify-around mb-6">
        <DashboardCard title="Total Projects" count={allProjects.length} />
        <DashboardCard title="Total Subscribers" count={allSubscriber.length} />
        <DashboardCard title="Total Reservations" count={allReservation.length} />
        <DashboardCard title="Total Downloads" count={allDownloads.length} />
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col gap-8">
          {/* Subscribers Section */}
          <TableSection
            title="Recent Subscribers"
            columns={["No", "Email", "Date Subscribed"]}
            data={allSubscriber}
            renderRow={(subscriber, index) => (
              <TableRow key={subscriber.id} className="text-gray-700">
                <TableCell>{index + 1}</TableCell>
                <TableCell>{subscriber.email}</TableCell>
                <TableCell>{new Date(subscriber.date_added).toLocaleDateString()}</TableCell>
              </TableRow>
            )}
          />

          {/* Download Activities Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 min-h-[25rem]">
            <h2 className="text-xl font-bold text-purple mb-4">Download Activities</h2>

            {/* Brochure Filter Dropdown */}
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">Filter by Brochure</label>
              <select
                className="w-full border border-gray-300 rounded-md p-2"
                value={selectedBrochure}
                onChange={handleBrochureFilterChange}
              >
                <option value="">All Brochures</option>
                <option value="The Naples Estate">The Naples Estate</option>
                <option value="Novara Court">Novara Court</option>
                <option value="Roman Heights">Roman Heights</option>
              </select>
            </div>

            {/* Table of Filtered Downloads */}
            <div className="overflow-x-auto">
              <Table className="w-full bg-white">
                <TableHeader>
                  <TableRow>
                    <TableHead>No</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Brochure</TableHead>
                    <TableHead>Date Downloaded</TableHead>
                    <TableHead>Phone Number</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredDownloads.map((download, index) => (
                    <TableRow key={download.id} className="text-gray-700">
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{download.name}</TableCell>
                      <TableCell>{download.email}</TableCell>
                      <TableCell>{download.brochure}</TableCell>
                      <TableCell>{new Date(download.date).toLocaleDateString()}</TableCell>
                      <TableCell>{download.phone_number}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {/* Projects Section */}
          <TableSection
            title="Projects"
            columns={["No", "Title", "Status", "Pricing"]}
            data={projects}
            renderRow={(project, index) => (
              <TableRow key={project.id} className="text-gray-700">
                <TableCell>{index + 1}</TableCell>
                <TableCell>{project.title}</TableCell>
                <TableCell>{project.status}</TableCell>
                <TableCell>{project.pricing}</TableCell>
              </TableRow>
            )}
            link="/admin/projects"
            linkText="See More"
          />

          {/* Reservations Section */}
          <TableSection
            title="Recent Reservations"
            columns={["No", "Name", "Title", "Date Reserved", "Method"]}
            data={reservations}
            renderRow={(reservation, index) => (
              <TableRow key={reservation.id} className="text-gray-700">
                <TableCell>{index + 1}</TableCell>
                <TableCell>{reservation.name}</TableCell>
                <TableCell>{reservation.project_title}</TableCell>
                <TableCell>{new Date(reservation.date_added).toLocaleDateString()}</TableCell>
                <TableCell>{reservation.method}</TableCell>
              </TableRow>
            )}
            link="/admin/reservations"
            linkText="See More"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
