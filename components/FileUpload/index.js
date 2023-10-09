import React from "react";
import { useDropzone } from "react-dropzone";

const FileUpload = ({ jsonData, setJsonData }) => {

  const onDrop = (acceptedFiles) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        setJsonData(JSON.parse(reader.result));
      } catch (error) {
        setJsonData(null);
      }
    };
    acceptedFiles.forEach((file) => reader.readAsText(file));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: ".json",
  });

  return (
    <div>
      <div
        {...getRootProps()}
        className={`dropzone ${isDragActive ? "active" : ""} file_dropzone`}
      >
        <input {...getInputProps()} />
        <p>Drag & drop a JSON file here, or click to select one</p>
      </div>
    </div>
  );
};

export default FileUpload;
