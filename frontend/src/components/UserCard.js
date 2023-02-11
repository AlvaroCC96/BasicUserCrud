import React from 'react';
import { Link } from "react-router-dom";

const UserCard = ({ user, deleteUser }) => (
  <div className="col-md-4 p-2">
    <div className="card">
      <div className="card-header">
        <h5> Nombre: {user.name} </h5>
      </div>
      <div className="card-body">
        <p>Apellido: {user.lastname}</p>
        <p>Edad: {user.age}</p>
        <p>Correo: {user.email}</p>
        <p>Telefono: {user.phone}</p>
      </div>
      <div className="card-footer">
        <button className="btn btn-danger" onClick={() => deleteUser(user._id)}>
          Eliminar
        </button>
        <Link className="btn btn-primary" to={`/edit/${user._id}`}> Actualizar</Link>
      </div>
    </div>
  </div>
);

export default UserCard;