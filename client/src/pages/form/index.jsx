import { Label } from "@/page/ui/label";
import { Input } from "@/page/ui/input";
import { Button } from "@/page/ui/button";
import { useState } from "react";
import baseUrl from "@/config/baseUrl";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Form() {
  const router = useRouter();
  const [image, setimage] = useState(null);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [course, setcourse] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Add state to track submission

  const handleImage = (e) => {
    const file = e.target.files[0];
    setimage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("image", image);
      const response = await axios.post(`${baseUrl}upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const imageUrl = response.data.imageUrl;

      const data = {
        name,
        email,
        password,
        course,
        phoneNumber,
        imageUrl,
      };
      axios.post(`${baseUrl}attendance`, data).then((response) => {
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
                onChange={handleImage}
                className="hidden"
                // ref={imageRef}
              />
              <div className="mt-4">
                <label htmlFor="student-image">
                  {image ? (
                    <Image
                      className="w-32 h-32 mx-auto rounded-full object-cover cursor-pointer"
                      height={200}
                      src={URL.createObjectURL(image)}
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
                      src={"/profile.png"}
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
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="john@example.com"
                type="email"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                type="password"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="course">Course</Label>
              <Input
                id="course"
                value={course}
                onChange={(e) => {
                  setcourse(e.target.value);
                }}
                placeholder="Computer Science"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone-number">Phone Number</Label>
              <Input
                id="phone-number"
                value={phoneNumber}
                onChange={(e) => {
                  setphoneNumber(e.target.value);
                }}
                placeholder="+1 234 567 890"
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
