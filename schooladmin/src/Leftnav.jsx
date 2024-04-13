import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
export default function Leftnav() {
  const email = localStorage.getItem("email");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [idIsTrue, setIdIsTrue] = useState(false);
  const getSpecificUserDetails = () => {
    axios
      .get(`http://localhost:9090/api/get-usersbyemail/${email}`)
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
                <img src="/assets/images/faces/face1.jpg" alt="profile" />
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
            <Link
              to="/dashboard"
              className="nav-link ml-2 hover:bg-gray-500 p-2 rounded-md"
            >
              Home
            </Link>
            {/* </a> */}
          </li>
          <li className="nav-item">
            <i className="mdi mdi-crosshairs-gps menu-icon"></i>
            <Link
              to="/dashboard/student"
              className="nav-link ml-2 hover:bg-gray-500 p-2 rounded-md"
            >
              Attendance
            </Link>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="pages/icons/mdi.html"> */}
            <i className="mdi mdi-contacts menu-icon"></i>
            <Link
              to="/dashboard/student-test"
              className="nav-link ml-2 hover:bg-gray-500 p-2 rounded-md"
            >
              Test
            </Link>
            {/* </a> */}
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="pages/forms/basic_elements.html"> */}
            <i className="mdi mdi-format-list-bulleted menu-icon"></i>
            <Link
              to="/dashboard/study-material"
              className="nav-link ml-2 hover:bg-gray-500 p-2 rounded-md"
            >
              Study Materials
            </Link>
            {/* </a> */}
          </li>
          <li className="nav-item">
            <i className="mdi mdi-chart-bar menu-icon"></i>
            <Link
              to="/dashboard/faculty-feedback"
              className="nav-link ml-2 hover:bg-gray-500 p-2 rounded-md"
            >
              Faculty Feedback
            </Link>
          </li>

          <li className="nav-item">
            <i className="mdi mdi-file-document-box menu-icon"></i>
            <NavLink
              to="/dashboard/student-documentation"
              className="nav-link ml-2 hover:bg-gray-500 p-2 rounded-md active:bg-black"
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
