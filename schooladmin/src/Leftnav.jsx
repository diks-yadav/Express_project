import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { imageContext } from "./pages/ImageContext";
import { UserOutlined } from "@ant-design/icons";
export default function Leftnav() {
  const { imageValue, setImageValue } = useContext(imageContext);
  const email = localStorage.getItem("email");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [idIsTrue, setIdIsTrue] = useState(false);
  const getSpecificUserDetails = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/get-usersbyemail/${email}`)
      .then((res) => {
        console.log("Backend response Success:", res);
        if (res.data.status == 1) {
          console.log("user details", res.data.users.firstname);
          setName(res.data.users.firstname + " " + res.data.users.lastname);
          setId(res.data.users._id);
          // setName(res.data.data.name);
        } else {
          alert(`${res.data.message}`);
        }
      })
      .catch((err) => {
        console.log("Backend response failes:", err.message);
      });
  };

  const handleOver = () => {
    setIdIsTrue(true);
    setId(id);
  };
  const handleOut = () => {
    setIdIsTrue(false);
  };
  useEffect(() => {
    getSpecificUserDetails();
  }, [email]);
  return (
    <div>
      <nav
        className="sidebar sidebar-offcanvas"
        id="sidebar"
        style={{ position: "fixed", top: "0", height: "100%" }}
      >
        <div className="text-center sidebar-brand-wrapper d-flex align-items-center">
          <a className="sidebar-brand brand-logo" href="index.html">
            <img src="/assets/images/logo.svg" alt="logo" />
          </a>
          <a
            className="sidebar-brand brand-logo-mini pl-4 pt-3"
            href="index.html"
          >
            <img src="/assets/images/logo-mini.svg" alt="logo" />
          </a>
        </div>
        <ul className="nav">
          <li className="nav-item nav-profile">
            <a href="#" className="nav-link">
              <div className="nav-profile-image">
                {imageValue ? (
                  <img
                    src={`${process.env.REACT_APP_BACKEND_URL}/profile/${imageValue}`}
                    width={100}
                    height={100}
                    style={{ borderRadius: "50%", margin: "5px" }}
                  ></img>
                ) : (
                  <UserOutlined />
                )}

                <span className="login-status online"></span>
                {/* <!--change to offline or busy as needed--> */}
              </div>
              <div className="nav-profile-text d-flex flex-column pr-3">
                <span className="font-weight-bold mb-2 text-transform:capitalize">
                  {name.toUpperCase()}
                </span>
                <span
                  className="font-weight-bold text-wrap"
                  onMouseOver={() => handleOver()}
                  onMouseOut={() => handleOut()}
                >
                  Id:-{" "}
                  <span className="text-wrap">
                    {idIsTrue ? id : id.slice(0, 10)}...
                  </span>
                </span>
              </div>
            </a>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="index.html"> */}
            <i className="mdi mdi-home menu-icon"></i>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "nav-link ml-2 bg-blue-500 p-3 rounded-md active:bg-black"
                  : "nav-link ml-2 hover:bg-gray-500 p-2 rounded-md active:bg-black"
              }
            >
              Home
            </NavLink>
            {/* </a> */}
          </li>
          <li className="nav-item">
            <i className="mdi mdi-crosshairs-gps menu-icon"></i>
            <NavLink
              to="/dashboard/student"
              className={({ isActive }) =>
                isActive
                  ? "nav-link ml-2 bg-blue-500 p-3 rounded-md active:bg-black"
                  : "nav-link ml-2 hover:bg-gray-500 p-2 rounded-md active:bg-black"
              }
            >
              Attendance
            </NavLink>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="pages/icons/mdi.html"> */}
            <i className="mdi mdi-contacts menu-icon"></i>
            <NavLink
              to="/dashboard/student-test"
              className={({ isActive }) =>
                isActive
                  ? "nav-link ml-2 bg-blue-500 p-3 rounded-md active:bg-black"
                  : "nav-link ml-2 hover:bg-gray-500 p-2 rounded-md active:bg-black"
              }
            >
              Test
            </NavLink>
            {/* </a> */}
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="pages/forms/basic_elements.html"> */}
            <i className="mdi mdi-format-list-bulleted menu-icon"></i>
            <NavLink
              to="/dashboard/study-material"
              className={({ isActive }) =>
                isActive
                  ? "nav-link ml-2 bg-blue-500 p-3 rounded-md active:bg-black"
                  : "nav-link ml-2 hover:bg-gray-500 p-2 rounded-md active:bg-black"
              }
            >
              Study Materials
            </NavLink>
            {/* </a> */}
          </li>
          <li className="nav-item">
            <i className="mdi mdi-chart-bar menu-icon"></i>
            <NavLink
              to="/dashboard/faculty-feedback"
              className={({ isActive }) =>
                isActive
                  ? "nav-link ml-2 bg-blue-500 p-3 rounded-md active:bg-black"
                  : "nav-link ml-2 hover:bg-gray-500 p-2 rounded-md active:bg-black"
              }
            >
              Faculty Feedback
            </NavLink>
          </li>

          <li className="nav-item">
            <i className="mdi mdi-file-document-box menu-icon"></i>
            <NavLink
              to="/dashboard/student-documentation"
              className={({ isActive }) =>
                isActive
                  ? "nav-link ml-2 bg-blue-500 p-3 rounded-md active:bg-black"
                  : "nav-link ml-2 hover:bg-gray-500 p-2 rounded-md active:bg-black"
              }
            >
              Student Documentation
            </NavLink>
          </li>
          <hr />
          <li className="nav-item sidebar-actions">
            <div className="nav-link">
              <div className="mt-4">
                <div className="border-none">
                  <p className="text-black">Virtual PTM</p>
                </div>
                <ul className="mt-4 pl-0">
                  <li>Sign Out</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
