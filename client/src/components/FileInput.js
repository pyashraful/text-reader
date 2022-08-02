import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import classes from "../styles/FileInput.module.css";
import { MdDeleteOutline } from "react-icons/md";

function FileInput({ image, setImage, setImgError, setImgErrorMsg }) {
  const [loading, setLoading] = useState({ loading: true });
  const [readable, setRadable] = useState();

  const onDrop = useCallback(
    (acceptedFiles, fileRejections) => {
      let file = acceptedFiles[0];
      let rejectFile = fileRejections[0];

      if (rejectFile) {
        setImgError(true);
        setImgErrorMsg(rejectFile.errors[0].message);
        return;
      }

      if (file) {
        setImage(false);
        setImgError("");
        const reader = new FileReader();
        reader.onloadstart = () => {
          setLoading(true);
        };
        reader.onloadend = () => {
          setLoading(false);
        };
        reader.onload = () => {
          setRadable(reader.result);
        };
        reader.readAsDataURL(file);
        setImage(file);
      }
    },
    [setImage, setImgError, setImgErrorMsg]
  );
  const { getRootProps, getInputProps, open } = useDropzone({
    noClick: true,
    noKeyboard: true,
    onDrop,
    accept: {
      "image/jpeg": [".jpeg", ".png"],
    },
    maxSize: 1000000,
  });

  return (
    <div>
      {image ? (
        <div className={classes.image_view_container}>
          <div className={classes.image_wrapper}>
            <img
              className={classes.upload_image}
              src={readable || image}
              alt="uploaded"
            />
          </div>
          <button className={classes.delete_button}>
            <MdDeleteOutline
              className={classes.delete_icon}
              size={24}
              onClick={() => setImage(null)}
            />
          </button>
        </div>
      ) : (
        <div className={classes.file_upload} {...getRootProps()}>
          <input {...getInputProps()} />
          <h5>Drag & drop image here</h5>
          <button
            type="button"
            className={`btn ${classes.upload_button}`}
            onClick={open}
          >
            select file
          </button>
          <small>Upload 280*280 image</small>
        </div>
      )}
    </div>
  );
}

export default FileInput;
