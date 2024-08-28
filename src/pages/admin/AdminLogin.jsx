import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    console.log(formData,"formFormData")
    try {
      const response = await fetch(
        "https://lightwayhomesltd.com/backend/controller/admin.php?action=loginAdmin",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      setIsLoading(false);
      if (data.status === "success") {
        localStorage.setItem("adminToken", data.status);
        navigate("/admin");
      } else {
        toast.error("Login failed. Please check your credentials.");
        setIsLoading(false);
      }
    } catch (error) {
      toast.error("Error during login:", error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center py-12 bg-gray-100">
        <form
          onSubmit={handleLogin}
          className="bg-white md:max-w-[460px] max-w-[310px] min-h-[100px] p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Admin Login
          </h2>
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
            className="mb-4 px-2.5 py-3.5 w-full border border-gray-300 rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
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
              Login
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default AdminLogin;
