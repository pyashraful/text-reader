import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import classes from "../styles/FileInput.module.css";
import { MdDeleteOutline } from "react-icons/md";

function FileInput({ image, setImage }) {
  const [loading, setLoading] = useState({ loading: true });
  const [readable, setRadable] = useState();

  const onDrop = useCallback(
    (acceptedFiles) => {
      let file = acceptedFiles[0];
      file = new File([file], `ashraful_${+new Date()}`, {
        type: file.type,
      });
      console.log(file);
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
  const { getRootProps, getInputProps, open } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    onDrop,
  });

  return (
    <div>
      {image ? (
        <div className={classes.image_view_container}>
          <div className={classes.image_wrapper}>
            <img
              className={classes.upload_image}
              src={readable}
              alt="uploaded"
            />
          </div>
          <button className={classes.delete_button}>
            <MdDeleteOutline size={24} onClick={() => setImage(null)} />
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
