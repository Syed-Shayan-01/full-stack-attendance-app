import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import ImageUploading from "react-images-uploading";
import baseUrl from "@/config/baseUrl";

export default function Component() {
  const [image, setimage] = useState(null);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [course, setcourse] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  console.log(image);
  const [imageUrl, setImageUrl] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { image, name, email, password, course, phoneNumber };
    const formData = new FormData();
    formData.append("image", image);
    try {
      const response = await fetch(`${baseUrl}upload`, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log("Success:", result.image);
    } catch (err) {
      throw err;
    }
    // try {
    //   const response = await fetch(`${baseUrl}/attend`, {
    //     method: "POST", // or 'PUT'
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   });

    //   const result = await response.json();
    //   console.log("Success:", result);
    // } catch (err) {
    //   throw err;
    // }
  };
  const handleImage = (e) => {
    const file = e.target.files[0];
    setimage(file);
    // Display the selected image in the form
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
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
                  <img
                    className="w-32 h-32 mx-auto rounded-full object-cover cursor-pointer"
                    height="200"
                    src={imageUrl}
                    style={{
                      aspectRatio: "200/200",
                      objectFit: "cover",
                    }}
                    width="200"
                  />
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
