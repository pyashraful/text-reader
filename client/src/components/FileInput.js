import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import classes from "../styles/FileInput.module.css";

function FileInput() {
  const [loading, setLoading] = useState({ loading: true });
  const [readable, setRadable] = useState();
  const [image, setImage] = useState();

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
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
    },
    [setImage]
  );
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className={classes.file_upload} {...getRootProps()}>
      <input {...getInputProps()} />
      <h5>Drag & drop image here</h5>
      <button className={`btn ${classes.upload_button}`}>select file</button>
      <small>Upload 280*280 image</small>
    </div>
  );
}

export default FileInput;
