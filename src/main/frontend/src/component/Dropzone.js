import React, { useCallback } from "react";

import axios from "axios";
import { useDropzone } from "react-dropzone";

const Dropzone = ({ userProfileId }) => {
  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append('file', file);
    axios.post(
      `http://localhost:8080/api/v1/user-profile/${userProfileId}/image/upload`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    ).then(() => {
      console.log('Image uploaded successfully')
    }).catch(err => {
      console.log('Error occurred while uploading the image', err)
    })
  }, [userProfileId]);
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the image here ...</p> :
          <p>Drag 'n' drop profile image, or click to select an image</p>
      }
    </div>
  )
};

export default Dropzone;