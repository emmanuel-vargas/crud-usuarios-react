
import React, { useState } from 'react';

const App = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [rol, setRol] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoUsuario = { nombre, correo, rol };

    if (editIndex !== null) {
      const usuariosActualizados = [...usuarios];
      usuariosActualizados[editIndex] = nuevoUsuario;
      setUsuarios(usuariosActualizados);
      setEditIndex(null);
    } else {
      setUsuarios([...usuarios, nuevoUsuario]);
    }

    setNombre('');
    setCorreo('');
    setRol('');
  };

  const handleEdit = (index) => {
    const usuario = usuarios[index];
    setNombre(usuario.nombre);
    setCorreo(usuario.correo);
    setRol(usuario.rol);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const usuariosFiltrados = usuarios.filter((_, i) => i !== index);
    setUsuarios(usuariosFiltrados);
  };

  return (
    <div className="container">
      <h1>CRUD de Usuarios</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Rol"
          value={rol}
          onChange={(e) => setRol(e.target.value)}
          required
        />
        <button type="submit">{editIndex !== null ? 'Actualizar' : 'Agregar'}</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index) => (
            <tr key={index}>
              <td>{usuario.nombre}</td>
              <td>{usuario.correo}</td>
              <td>{usuario.rol}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Editar</button>
                <button onClick={() => handleDelete(index)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
