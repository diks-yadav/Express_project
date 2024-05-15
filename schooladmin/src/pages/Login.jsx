import React, { useContext, useState } from "react";
import Leftnav from "../Leftnav";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";
import axios from "axios";
import IncDec from "./IncDec";
import Profile from "../Profile";
import PropsDriling from "./PropsDriling";
import { set, values } from "@ant-design/plots/es/core/utils";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
  alert("please enter all required fields");
};

export default function Login() {
  const [message, setMessage] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/dashboard");
  };
  const onFinish = (values) => {
    const filter =
      "/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/";
    if (
      /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(
        values.username
      )
    ) {
      setMessage("Email address valid");
      setIsEmailValid(true);
      console.log("backend url=",process.env.REACT_APP_BACKEND_URL)
      // return;
      try {
        axios
          .post(`${process.env.REACT_APP_BACKEND_URL}/login`, {
            email: values.username,
            password: values.password,
          })
          .then((res) => {
            console.log("Backend response Success:", res);
            if (res.data.status == 1) {
              // alert(`${res.data.message}`);
              localStorage.setItem("email", values.username);
              setMessage(res.data.message);
              setTimeout(()=>{
                navigate("/dashboard");
              },2000)
            } else {
              // alert(`${res.data.message}`);
              setMessage(res.data.message);

            }
          })
          .catch((err) => {
            alert(`${err?.message} ` + " try again after sometime ");
          });
      } catch (error) {
        console.log("error", error);
        alert(`${error.message}`);
      }
    } else {
      setMessage("Email address invalid");
      setIsEmailValid(false);
    }
    
  };

  console.log("message", message, isEmailValid);

  //   useEffect(()=>{
  // const filter='/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/';
  //     if(filter.test(values.username))
  //   },[values.username])

  return (
    <div className="m-5">
      <h1 className="justify text-center">Login </h1>
      <center>
        <div className="mt-5">
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              style={{ fontWeight: "30px" }}
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          {isEmailValid ? (
            <span className='text-green-500 capitalize'>
              {message}
            </span>
          ) : (
            <span className='text-red-500 capitalize'>
              {message}
            </span>
          )}
        </div>
      </center>
      {/* <IncDec/> */}
      {/* <Profile/> */}
      {/* <PropsDriling/> */}
    </div>
  );
}
