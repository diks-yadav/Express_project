const express = require("express");
const Router = express.Router();
const fs=require("fs");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })
const checkFields = require("../middleware/check-fields");
const emailSend = require("../helper/email-send");
const rootController = require("../controllers/root.controller");
const homeController = require("../controllers/home.controller");
const registerController = require("../controllers/register.controller");
const loginController = require("../controllers/login.controller");
const getUsersController = require("../controllers/get-users.controller");
const userPostController = require("../controllers/user-post.controller");
const emailSendController = require("../controllers/email-send.controller");
const userUpdateController=require("../controllers/user-update.controller");
const userDeleteController=require("../controllers/user-delete.controller");
const forgotPasswordController=require("../controllers/forgot-password.controller");

Router.get("/", rootController.rootController);
Router.get("/home", homeController.homeController);
//post register api
Router.post(
  "/register",
  upload.single(),
  registerController.registerController
);
Router.post("/login", upload.single(), loginController.loginController);

//gwt userprofile
Router.get("/profile/:name",function(req,res){
  const image=req.params.name;
  fs.readFile(`uploads/${image}`, function(err,data){
    if(err){
      console.log("error",err);
    }else{
      console.log("success",data);
      res.send(data);
    }
  })
})
//get-users api
Router.get("/api/get-users", getUsersController.getUsersControllerfunction);

//get-user by email api
Router.get("/api/get-usersbyemail/:email", getUsersController.getUersByemailApi);
//user-post api
Router.post("/api/user-post", upload.single(), userPostController.userPost);
//email-send api
Router.post("/api/email-send", checkFields, emailSendController.emailSendController);


//user-update by email
Router.post("/api/user-updatebyEmail/:email",upload.single(),userUpdateController.userUpdateByEmailApi)

Router.post("/api/profileupload/:email",upload.single("image"),userUpdateController.userProfileUpload)

//user-deleta by email
Router.post("/api/user-deletebyEmail/:email",upload.single(),userDeleteController.userDeleteByEmailApi)

Router.post("/api/alluser-delete",userDeleteController.allUserDeleteApi);
//forgot-password api
Router.post("/api/forgot-password",forgotPasswordController.forgotPasswordApi);
//otp-verify api
Router.post("/api/otp-verify",forgotPasswordController.otpVerifyApi);
//reset-password api
Router.post("/api/reset-password",forgotPasswordController.resetPasswordApi);
module.exports = Router;
