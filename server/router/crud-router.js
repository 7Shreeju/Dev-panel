const express = require("express");
const router = express.Router();

const Crudcontrollers = require("../controllers/crud-controller");


// const multer = require("multer");
// const fs = require("fs");
// const path = require("path");
// const bodyparser = require("body-parser");

// router.use(bodyparser.urlencoded({extended:true}));
// router.use(express.static(path.resolve(__dirname,'public')))

//     const storage = multer.diskStorage({
//         destination: function(req,file, cb){
//         if(!fs.existsSync("public")){
//             fs.mkdirSync("public");
//         }
//         if(!fs.existsSync("public/allimages")){
//             fs.mkdirSync("public/allimages");
//         }
    
//         cb(null, "public/allimages");
//         },
//         filename: function(req,file,cb){
//         cb(null, Date.now() + file.originalname);
//         },
//     });
  
//     const upload = multer({
//         storage:storage,
//     })


router.route("/add").post(Crudcontrollers.add);
router.route("/delete/:id").delete(Crudcontrollers.deletemodule);
router.route("/status/:id").patch(Crudcontrollers.status);
router.route("/updatedata/:id").patch(Crudcontrollers.update);

module.exports = router;