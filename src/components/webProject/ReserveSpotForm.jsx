import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../component/ui/card";
import { Button } from "../../component/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../component/ui/select";
import { Input } from "../../component/ui/input";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReserveSpotForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    method: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSelectChange = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      method: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Create form data
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("phone_number", formData.phone);
    data.append("method", formData.method);

    try {
      const response = await fetch(
        "https://lightwayhomesltd.com/backend/controller/reservation.php?action=save_reservation",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();
      if (response.ok) {
        toast.success("Reservation successful");
        setIsSubmitted(true); // Close the form on success
      } else {
        toast.error("Error: " + result.message);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {!isSubmitted && (
        <Card className="lg:w-[500px] shadow-md md:w-[400px] w-[90vw] text-purple mx-auto py-4 px-0 border-0 rounded-none">
          <CardHeader>
            <CardTitle className="text-center">Reserve Your Spot Now</CardTitle>
            <p className="text-center">
              You can reserve your spot for our first-class apartments. We're
              here for you.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Enter Your Name"
                  className="w-full border-customLightPurple outline-none py-6"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isLoading}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter Your Email"
                  className="w-full border-customLightPurple outline-none py-6"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isLoading}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <Input
                  type="tel"
                  id="phone"
                  placeholder="Enter Your Phone Number"
                  className="w-full border-customLightPurple outline-none py-6"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isLoading}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="contactMethod"
                >
                  How would you like us to reach you?
                </label>
                <Select onValueChange={handleSelectChange} disabled={isLoading} required>
                  <SelectTrigger className="w-full border-customLightPurple outline-none py-6">
                    <SelectValue placeholder="How would you like us to reach you ?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup className="text-purple">
                      <SelectLabel>
                        How would you like us to reach you ?
                      </SelectLabel>
                      <SelectItem
                        value="Phone Call"
                        className="text-purple hover:bg-purple focus-visible:bg-purple py-4"
                      >
                        Phone Call
                      </SelectItem>
                      <SelectItem
                        value="Email"
                        className="text-purple hover:bg-purple focus-visible:bg-purple py-4"
                      >
                        Email
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="text-center">
                <Button
                  type="submit"
                  className="w-full bg-purple text-white py-6"
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ReserveSpotForm;
