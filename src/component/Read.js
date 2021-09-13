import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import firebase from "../firebaseConfig";
import UpdateDelete from "./UpdateDelete";
import ScrollUp from "../component/ScrollUp";

const Read = () => {
  const [photolist, setPhotolist] = useState([]);
  useEffect(() => {
    const photosDB = firebase.database().ref("photoDB");

    photosDB.on("value", (snapshot) => {
      let previewsList = snapshot.val();
      let list = [];
      for (let id in previewsList) {
        list.push({ id, ...previewsList[id] });
      }
      setPhotolist(list);
    });
  }, []);
  return (
    <div className="lecture">
      <ul>
        {photolist &&
          photolist.map((item, index) => (
            <UpdateDelete item={item} key={index} />
          ))}
      </ul>
      <ScrollUp />
    </div>
  );
};

export default Read;
