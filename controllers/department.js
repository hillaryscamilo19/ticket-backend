const Departament = require("../models/Department");

// Obtener todos los clientes
const getDepartament= async (req, res) => {
  try {
    const departament = await Departament.find();
    res.json(departament);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los departamentos" });
  }
};

// Crear un cliente
const createDepartament = async (req, res) => {
  try {
    const newClient = new Departament(req.body);
    await newClient.save();
    res.status(201).json(newClient);
  } catch (error) {
    res.status(500).json({ message: "Error al crear Departamento" });
  }
};

// Actualizar cliente por ID
const updateDepartament = async (req, res) => {
  try {
    const updatedClient = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedClient);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar Departamento" });
  }
};

// Eliminar cliente por ID
const deleteDepartament = async (req, res) => {
  try {
    await Client.findByIdAndDelete(req.params.id);
    res.json({ message: "Departamento eliminado" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar Departamento" });
  }
};

module.exports = { getDepartament, createDepartament, updateDepartament, deleteDepartament };
