const { Users } = require('../models/user_SQL');

const ControllerUserSQL = {
    // Crear un nuevo usuario
    createUser: async (req, res) => {
      try {
        const newUser = await Users.create(req.body);
        res.status(201).json(newUser);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
    
    // Obtener todos los usuarios
    getUsers: async (req, res) => {
      try {
        const users = await Users.findAll();
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
    
    // Obtener un usuario por ID
    getUserById: async (req, res) => {
      try {
        const user = await Users.findByPk(req.params.id);
        if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
    
    // Actualizar un usuario
    updateUser: async (req, res) => {
      try {
        const resultado = await Users.update(req.body, { where: { id: req.params.id } });
        if (resultado[0] === 0) return res.status(404).json({ message: 'Usuario no encontrado' });
        res.status(200).json({ message: 'Usuario actualizado' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
    
    // Eliminar un usuario
    deleteUser: async (req, res) => {
      try {
        const resultado = await Users.destroy({ where: { id: req.params.id } });
        if (!resultado) return res.status(404).json({ message: 'Usuario no encontrado' });
        res.status(200).json({ message: 'Usuario eliminado' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    },
}

module.exports = ControllerUserSQL;