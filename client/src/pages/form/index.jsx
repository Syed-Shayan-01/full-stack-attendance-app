import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import ImageUploading from "react-images-uploading";

export default function Component() {
  const [image, setimage] = useState(null);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [course, setcourse] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  console.log(image);
  const [imageUrl, setImageUrl] = useState(null);

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
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="student-image">Upload Student Image</Label>

            <Input
              id="student-image"
              required
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
            <Input id="student-name" placeholder="John Doe" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="john@example.com"
              required
              type="email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" required type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="course">Course</Label>
            <Input id="course" placeholder="Computer Science" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone-number">Phone Number</Label>
            <Input id="phone-number" placeholder="+1 234 567 890" required />
          </div>
          <Button className="w-full" type="submit">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
