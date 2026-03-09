const express = require("express");
const router = express.Router();
const multer = require("multer");

const diseaseController = require("../controllers/diseaseController");

// Image upload setup
const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, "uploads/");
  },
  filename: function(req, file, cb){
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage: storage });

router.get("/disease", (req,res)=>{
  res.render("disease/disease-detection");
});

router.post("/disease-detect",
  upload.single("cropImage"),
  diseaseController.detectDisease
);

module.exports = router;