import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
const CreateUser = () => {

  const initialValue = {
    name: '',
    lastname: '',
    age: 18,
    phone: 0,
    email: ''
  }

  let {id} = useParams()
  const [subId , setSubId] = useState(id)

  const [user,setUser] = useState(initialValue)
  const captureData = (e) =>{
    const {name, value} = e.target
    setUser({...user, [name]: value})
  }

  const getInformation = async (id) => {
    if (id) {
      const urlInfo = `http://localhost:4000/api/users/${id}`
      const res = await axios.get(urlInfo)
      setUser({
        name: res.data.name,
        lastname: res.data.lastname,
        age: res.data.age,
        email: res.data.email,
        phone: res.data.phone
      })
    }
  }

  useEffect(()=>{
    if(subId !==''){
      getInformation(subId)
    }
  },[subId])

  const saveData = async (e) =>{
    e.preventDefault()

    const newUser = {
      name: user.name,
      lastname: user.lastname,
      age: user.age,
      phone: user.phone,
      email: user.email
    }

    console.log(newUser)
    const urlPost = 'http://localhost:4000/api/users'
    await axios.post(urlPost, newUser)

    setUser({...initialValue})
  }

  const updateUser = async(e)=>{
    e.preventDefault()
    if (subId){
      const newUser = {
        name: user.name,
        lastname: user.lastname,
        age: user.age,
        phone: user.phone,
        email: user.email
      }
      const urlPut = 'http://localhost:4000/api/users/'+subId
      await axios.put(urlPut, newUser)
      setUser({...initialValue})
      setSubId('')
    }
  }

  return (
    <div className="col-md-6 offset-md-3">
      <div className="card card-body">
        <form onSubmit={saveData}>
          <h2 className="text-center mb-3">Crear Usuario</h2>
          <div className="mb-3"> 
            <label>Nombre: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese el nombre del usuario"
              required
              name= 'name'
              value={user.name}
              onChange = {captureData}
            />
          </div>
          <div className="mb-3">
            <label>Apellido: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese el apellido del usuario"
              required
              name='lastname'
              value={user.lastname}
              onChange = {captureData}
            />
          </div>
          <div className="mb-3">
            <label>Edad: </label>
            <input
              type="number"
              className="form-control"
              placeholder="Ingrese la edad del usuario"
              required
              min={0}
              name='age'
              value={user.age}
              onChange = {captureData}
            />
          </div>
          <div className="mb-3">
            <label>Teléfono: </label>
            <input
              type="number"
              className="form-control"
              placeholder="Ingrese el teléfono del usuario"
              required
              min={0}
              name='phone'
              value={user.phone}
              onChange = {captureData}
            />
          </div>
          <div className="mb-3">
            <label>Correo: </label>
            <input
              type="email"
              className="form-control"
              placeholder="Ingrese el correo del usuario"
              required
              name='email'
              value={user.email}
              onChange = {captureData}
            />
          </div>
          <button type='submit' className="btn btn-primary form-control">
            Guardar Usuario
          </button>
        </form>
        <form onSubmit={updateUser}>
        <button type='submit' className="btn btn-danger form-control">
          Actualizar Usuario
        </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
