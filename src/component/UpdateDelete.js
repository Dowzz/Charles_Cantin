import React from "react";
import { useState } from "react/cjs/react.development";
import firebase from "../firebaseConfig";

const UpdateDelete = ({ item }) => {
  const [update, setUpdate] = useState(false);
  const [nameUpdate, setUpdateName] = useState(null);
  const [categorieUpdate, setUpdateCategorie] = useState(null);
  const [sourceUpdate, setUpdateSource] = useState(null);

  const updateItem = () => {
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
        <div classname="item-container-update">
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
          <input
            type="file"
            onChange={(e) => setUpdateSource(e.target.value)}
          />
          <button onClick={updateItem}>valider changements</button>
        </div>
      )}
    </li>
  );
};

export default UpdateDelete;
