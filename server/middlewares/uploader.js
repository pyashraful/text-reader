import multer from "multer";

const upload = multer({
  dest: "uploads/",
  limits: {
    fileSize: 1000000,
  },
});

export default upload;
