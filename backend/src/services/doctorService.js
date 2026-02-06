//src/services/doctorService.js

const Doctor = require('../models/Doctor');

exports.getAllDoctors = async () => {
    return await Doctor.find();
};

exports.getDoctorById = async (id) => {
    return await Doctor.findById(id);
};

exports.createDoctor = async (doctorData) => {
    const doctor = new Doctor(doctorData);
    return await doctor.save();
};

exports.updateDoctor = async (id, doctorData) => {
    return await Doctor.findByIdAndUpdate(id, doctorData, { new: true });
};

exports.deleteDoctor = async (id) => {
    return await Doctor.findByIdAndDelete(id);
};



