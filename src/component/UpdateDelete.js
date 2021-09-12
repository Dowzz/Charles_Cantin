import React from "react";
import { useState } from "react/cjs/react.development";
import firebase from "../firebaseConfig";
import Uploader from "./Uploader";

const UpdateDelete = ({ item }) => {
  const [update, setUpdate] = useState(false);
  const [nameUpdate, setUpdateName] = useState(null);
  const [categorieUpdate, setUpdateCategorie] = useState(null);
  const [sourceUpdate, setUpdateSource] = useState(null);
  const [isLoading, setIsloading] = useState(true);

  async function onFileChange(e) {
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setUpdateSource(await fileRef.getDownloadURL().then(setIsloading(false)));
  }

  const updateItem = () => {
    setIsloading(true);
    let photo = firebase.database().ref("photoDB").child(item.id);

    if (nameUpdate !== null) {
      photo.update({
        Name: nameUpdate,
      });
    }
    if (categorieUpdate !== null) {
      photo.update({
        Categorie: categorieUpdate,
      });
    }
    if (sourceUpdate !== null) {
      photo.update({
        Source: sourceUpdate,
      });
    }
    setUpdate(false);
    setIsloading(true);
  };

  const deleteItem = () => {
    let photo = firebase.database().ref("photoDB").child(item.id);

    photo.remove();
  };

  return (
    <li>
      {update === false && (
        <>
          <div className="item-container">
            <h4>{item.Name}</h4>
            <p>{item.Categorie}</p>
            <img src={item.Source} alt=""></img>
          </div>
          <div className="button-container">
            <button onClick={() => setUpdate(!update)}>Mise à jour</button>
            <button onClick={deleteItem}>Supprimer</button>
          </div>
        </>
      )}
      {update && (
        <div className="item-container-update">
          <input
            type="text"
            defaultValue={item.name}
            onChange={(e) => setUpdateName(e.target.value)}
          />
          <select
            id="dropdown"
            name="Catégorie"
            onChange={(e) => setUpdateCategorie(e.target.value)}
          >
            <option value="">Choix catégorie</option>
            <option value="Mariage">Mariage</option>
            <option value="Grossesse">Grossesse</option>
            <option value="Bébé">Bébé</option>
            <option value="Famille">Famille</option>
            <option value="Bapteme">Bapteme</option>
            <option value="Couple">Couple</option>
            <option value="Portrait">Portrait</option>
          </select>
          <Uploader
            placeholder="Source"
            value={sourceUpdate}
            onChange={onFileChange}
          />
          {isLoading && sourceUpdate ? null : (
            <button onClick={updateItem}>Ajouter</button>
          )}
        </div>
      )}
    </li>
  );
};

export default UpdateDelete;
