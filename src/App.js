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
    <>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="/">CRUD de Usuarios</a>
        </div>
      </nav>

      <div className="container py-4">
        <h1 className="mb-4">Gestionar Usuarios</h1>
        <form onSubmit={handleSubmit} className="mb-4">
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            className="form-control mb-2"
          />
          <input
            type="email"
            placeholder="Correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
            className="form-control mb-2"
          />
          <input
            type="text"
            placeholder="Rol"
            value={rol}
            onChange={(e) => setRol(e.target.value)}
            required
            className="form-control mb-2"
          />
          <button type="submit" className="btn btn-success w-100">
            {editIndex !== null ? 'Actualizar' : 'Agregar'}
          </button>
        </form>

        <table className="table table-bordered">
          <thead className="table-light">
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
                  <button onClick={() => handleEdit(index)} className="btn btn-warning btn-sm me-2">Editar</button>
                  <button onClick={() => handleDelete(index)} className="btn btn-danger btn-sm">Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <footer className="bg-light text-center py-3 mt-auto">
        <div className="container">
          <p className="mb-1">© 2025 - CrudUsuariosReact - Privacidad</p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            alt="React Logo"
            style={{ width: '40px', height: '40px' }}
          />
        </div>
      </footer>
    </>
  );
};

export default App;
