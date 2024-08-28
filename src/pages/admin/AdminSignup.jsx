import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminSignup = () => {
  const [fName, setFname] = useState("");
  const [lName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [level, setLevel] = useState("0");
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    const formData = new FormData();
    formData.append("first_name", fName);
    formData.append("last_name", lName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("level", level);

    try {
      const response = await fetch(
        "https://lightwayhomesltd.com/backend/controller/admin.php?action=addAdmin",
        {
          method: "POST",
          body: formData,
        }
      );

      console.log(formData, "formFormData");
      const data = await response.json();
      setIsLoading(false);
      if (data.status === "success") {
        toast.success("Signup successful. Please login.");
        navigate("/admin/auth/login");
      } else {
        setIsLoading(false);
        toast.error("Signup failed. Please try again.");
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error during signup:", error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center py-12 bg-gray-100">
        <form
          onSubmit={handleSignup}
          className="bg-white md:max-w-[460px] max-w-[310px] min-h-[100px] p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Admin Signup
          </h2>
          <input
            type="fname"
            placeholder="First Name"
            className="mb-4 px-2.5 py-3.5 w-full border border-gray-300 rounded-lg"
            value={fName}
            onChange={(e) => setFname(e.target.value)}
            required
          />
          <input
            type="lName"
            placeholder="Last Name"
            className="mb-4 px-2.5 py-3.5 w-full border border-gray-300 rounded-lg"
            value={lName}
            onChange={(e) => setlName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="mb-4 px-2.5 py-3.5 w-full border border-gray-300 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="mb-4 p-2.5 py-3.5 w-full border border-gray-300 rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <select
            className="mb-4 p-2.5 py-3.5 w-full border border-gray-300 rounded-lg"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            required
          >
            <option value="0">Admin</option>
            <option value="1">Superadmin</option>
          </select>
          {loading ? (
            <button
              disabled
              className="w-full bg-purple text-white px-2.5 py-3.5 rounded-lg"
            >
              Loading...
            </button>
          ) : (
            <button
              type="submit"
              className="w-full bg-purple text-white px-2.5 py-3.5 rounded-lg"
            >
              Signup
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default AdminSignup;
