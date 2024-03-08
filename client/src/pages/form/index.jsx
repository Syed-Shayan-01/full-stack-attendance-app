import React, { useState } from "react";
import axios from "axios";
import { Label } from "@/page/ui/label";
import { Input } from "@/page/ui/input";
import { Button } from "@/page/ui/button";
import baseUrl from "@/config/baseUrl";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Form() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    image: null,
    name: "",
    email: "",
    password: "",
    course: "",
    phoneNumber: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleImage = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      const data = {
        image: formData.image,
        name: formData.name,
        email: formData.email,
        password: formData.password,
        course: formData.course,
        phoneNumber: formData.phoneNumber,
      };
      axios
        .post(`${baseUrl}attendance`, data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          if (response) {
            router.replace("./student");
          }
        });

      // Success message
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
    } finally {
      setIsSubmitting(false); // Enable submissions for future attempts
    }
  };

  return (
    <div className="mx-auto max-w-[350px] space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Student Attendance Form</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Please fill in the details below
        </p>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="student-image">Upload Student Image</Label>
              <Input
                id="student-image"
                type="file"
                accept="image/*"
                onChange={handleImage}
                className="hidden"
              />
              <div className="mt-4">
                <label htmlFor="student-image">
                  {formData.image ? (
                    <Image
                      className="w-32 h-32 mx-auto rounded-full object-cover cursor-pointer"
                      height={200}
                      src={URL.createObjectURL(formData.image)}
                      style={{
                        aspectRatio: "200/200",
                        objectFit: "cover",
                      }}
                      alt="profile image"
                      width={200}
                    />
                  ) : (
                    <Image
                      className="w-32 h-32 mx-auto border-[1px] border-gray-300 rounded-full object-cover cursor-pointer"
                      height={200}
                      src="/profile.png"
                      alt="profile image"
                      style={{
                        aspectRatio: "200/200",
                        objectFit: "cover",
                      }}
                      width={200}
                    />
                  )}
                </label>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="student-name">Student Name</Label>
              <Input
                id="student-name"
                value={formData.name}
                onChange={handleChange}
                name="name"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="john@example.com"
                type="email"
                value={formData.email}
                onChange={handleChange}
                name="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                value={formData.password}
                onChange={handleChange}
                type="password"
                name="password"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="course">Course</Label>
              <Input
                id="course"
                value={formData.course}
                onChange={handleChange}
                placeholder="Computer Science"
                name="course"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone-number">Phone Number</Label>
              <Input
                id="phone-number"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="+1 234 567 890"
                name="phoneNumber"
              />
            </div>
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
