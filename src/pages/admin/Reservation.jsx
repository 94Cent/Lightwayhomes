import React, { useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "../../component/ui/table";

const Reservation = () => {
  const [reservation, setReservation] = useState([]);

    useEffect(() => {
        fetchReservation();
    }, []);

    const fetchReservation = async () => {
        try {
          const response = await fetch(
            "https://lightwayhomesltd.com/backend/controller/reservation.php?action=getallreservation"
          );
          const data = await response.json();
          if (response.ok) {
            setReservation(data);
            console.log(data, "Data reservation");
          } else {
            console.log(data, "Data reservation");
          }
        } catch (error) {
          console.log(error, "Data reservation");
        }
      };
  return (
    <div className="bg-gray-100 p-8 min-h-screen">
      <div className="bg-white rounded-lg w-full shadow-lg p-6">
        <h1 className="text-2xl font-semibold mb-6 text-purple">Reservations</h1>
        <div className="overflow-x-auto">
          <Table className="w-full bg-white">
            <TableHeader className="w-screen">
              <TableRow className="w-full">
                <TableHead colSpan={0.5} className=" py-2 text-purple font-semibold">No</TableHead>
                <TableHead colSpan={2} className="py-2 text-purple font-semibold">Name</TableHead>
                <TableHead colSpan={2} className="text-purple font-semibold py-2">Email</TableHead>
                <TableHead colSpan={1} className="text-purple font-semibold py-2 text-center">Phone No</TableHead>
                <TableHead colSpan={2} className="text-purple font-semibold py-2">Method</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reservation.map((user, index) => (
                <TableRow key={user.id} className="text-purple">
                  <TableCell colSpan={0.5}  className="py-2">{index + 1}</TableCell>
                  <TableCell colSpan={2} className="py-2">{user.name}</TableCell>
                  <TableCell colSpan={2} className="py-2">{user.email}</TableCell>
                  <TableCell className="py-2 text-center">{user.phone_number}</TableCell>
                  <TableCell colSpan={2} className="py-2r">
                    {user.method}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default Reservation