import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserOutlined } from "@ant-design/icons";
import { imageContext } from "./pages/ImageContext";
// export const imageContext=createContext();
export default function Profile() {
  const {imageValue,setImageValue}=useContext(imageContext);
  console.log("imageValue in profile.jsx: " , imageValue);
  const [image, setImage] = useState("");
  const email = localStorage.getItem("email");
  const getSpecificUserDetails = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/get-usersbyemail/${email}`)
      .then((res) => {
        console.log("Backend response Success:", res);
        if (res.data.status === 1) {
          console.log("user details", res.data.users.firstname);
          // setName(res.data.data.name);
          // setFirstname(res.data.users.firstname);
          // setLastname(res.data.users.lastname);
          setImage(res.data.users.image);
          setImageValue(res.data.users.image);
        } else {
          alert(`${res.data.message}`);
        }
      })
      .catch((err) => {
        console.log("Backend response failes:", err.message);
      });
  };
  // console.log("imagValue",imageValue);
  const handleImage = (e) => {
    e.preventDefault();
    console.log("e", e.target.files[0]);
    if (
      e.target.files[0].type == "image/png" ||
      e.target.files[0].type == "image/jpg" ||
      e.target.files[0].type == "image/jpeg"
    ) {
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      axios
        .post(`REACT_APP_BACKEND_URL/api/profileupload/${email}`, formData, {
          Headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log("backend success response for image uploading", res);
          if (res.data.status == 1) {
            setImage(res.data.filename);
            setImageValue(res.data.filename);
          }
        })
        .catch((error) => {
          console.log("backend error for image uploading", error);
        });
    } else {
      alert("image file  should be png, jpg or jpeg only!");
    }
  };

  useEffect(() => {
    getSpecificUserDetails();
  }, [email]);
  console.log("image", image);
  return (
    <div>
      <div>
        <label>My pic</label>
        <br />
        <input
          type="file"
          name="image"
          onChange={(e) => handleImage(e)}
        ></input>
      </div>
      {image ? (
        <>
          <img
            src={`${process.env.REACT_APP_BACKEND_URL}/profile/${image}`}
            width={100}
            height={100}
            style={{ borderRadius: "50%", margin: "5px" }}
          ></img>
        </>
      ) : (
        <UserOutlined style={{ height: "100px", width: "100px" }} />
      )}
    </div>
  );
}
