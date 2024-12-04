const express = require("express");
const router = express.Router();
const Formmodulecontrollers = require("../controllers/formmodule-controller");

const multer = require("multer");
const fs = require("fs");
const path = require("path");
const bodyparser = require("body-parser");

router.use(bodyparser.urlencoded({extended:true}));
router.use(express.static(path.resolve(__dirname,'public')))

const storage = multer.diskStorage({
    destination: function(req,file, cb){
      if(!fs.existsSync("public")){
          fs.mkdirSync("public");
      }
      if(!fs.existsSync("public/sidebar")){
          fs.mkdirSync("public/sidebar");
      }
      cb(null, "public/sidebar");
    },
    filename: function(req,file,cb){
      cb(null, Date.now() + file.originalname);
    },
  });
  
  const upload = multer({
      storage:storage,
  })

router.route("/createpages").post(Formmodulecontrollers.create_pages);
router.route("/updatepages/:id").patch(Formmodulecontrollers.update_pages);

router.route("/get/:id").get(Formmodulecontrollers.getdata);
router.route("/getall").get(Formmodulecontrollers.getall);
router.route("/delete/:id").delete(Formmodulecontrollers.deletedata);
router.route("/deletefield/:id").delete(Formmodulecontrollers.deletefield);
// router.route("/addsidebaricon").post(Formmodulecontrollers.addsidebaricon);
router.post("/addsidebaricon",upload.single('icon'),Formmodulecontrollers.addsidebaricon);
router.route("/getSidebarOptions").get(Formmodulecontrollers.getSidebarOptions);
router.route("/addtemplate").post(Formmodulecontrollers.addtemplate);
router.route("/gettemplates").get(Formmodulecontrollers.gettemplates);
router.route("/getpage/:id").get(Formmodulecontrollers.getpage);







module.exports = router;