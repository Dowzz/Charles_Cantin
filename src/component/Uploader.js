import React, { useEffect, useRef } from "react";

const Uploader = ({ value, ...rest }) => {
  const inputRef = useRef();

  useEffect(() => {
    if (value === "") {
      inputRef.current.value = "";
    } else {
      inputRef.current.file = value;
    }
  }, [value]);

  return <input {...rest} type="file" ref={inputRef} />;
};

export default Uploader;
