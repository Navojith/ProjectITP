const Patient = require('../models/patientModel');
const mongoose = require('mongoose');

// get all patients
const getAllPatients = async (req, res) => {
  const patients = await Patient.find({}).sort({ createdAt: -1 });

  res.status(200).json(patients);
};

// get a patient
const getAPatient = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such Patient' });
  }

  const patient = await Patient.findById(id);

  if (!patient) {
    return res.status(404).json({ error: 'No such Patient' });
  }

  res.status(200).json(patient);
};

// create a patient
const createPatient = async (req, res) => {
  const { firstName, lastName, NIC, tpNo, gender } = req.body;

  let emptyFields = [];

  if (!firstName) {
    emptyFields.push('firstName');
  }
  if (!lastName) {
    emptyFields.push('lastName');
  }
  if (!NIC) {
    emptyFields.push('NIC');
  }
  if (!tpNo) {
    emptyFields.push('tpNo');
  }
  if (!gender) {
    emptyFields.push('gender');
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all the fields' });
  }

  // add doc to db
  try {
    const patient = await Patient.create({
      firstName,
      lastName,
      NIC,
      tpNo,
      gender,
    });
    res.status(200).json(patient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a patient
const deletePatient = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404), json({ error: 'No such patient' });
  }

  const patient = await Patient.findByIdAndDelete({ _id: id });

  if (!patient) {
    return res.status(404), json({ error: 'No such patient' });
  }

  res.status(200).json(patient);
};

// Update a patient
const updatePatient = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such patient' });
  }

  const patient = await Patient.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!patient) {
    return res.status(400).json({ error: 'No such patient' });
  }

  return res.status(200).json(patient);
};

module.exports = {
  getAllPatients,
  getAPatient,
  updatePatient,
  deletePatient,
  createPatient,
};
