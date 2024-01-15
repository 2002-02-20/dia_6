import React from "react";

const Cards = ({img, nombre, roles, correo}) => {

  return (
    <>
    <li className="container">
        <div className="imgContainer">
        <img src={img} alt="logo" className="avatarImg"/>
        </div>
        <div className="containerText">
        <p>Nombre: {nombre}</p>
        <p>Roles: {roles}</p>
        <p>Correo: {correo}</p>
        </div>
      </li>
    </>
  );
};

export default Cards;
