//src/services/patientService.js 

const Patient = require('../models/patientModel');

exports.getAllPatients = async () => {
    return await Patient.find();
}

exports.getPatientById = async (id) => {
    return await Patient.findById(id);
}

exports.createPatient = async (patientData) => {
    const patient = new Patient(patientData);
    return await patient.save();
}

exports.updatePatient = async (id, patientData) => {
    return await Patient.findByIdAndUpdate(id, patientData, { new: true });
}

exports.deletePatient = async (id) => {
    return await Patient.findByIdAndDelete(id);
}   

