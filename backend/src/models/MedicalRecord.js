//src/models/MedicalRecord.js 

const mongoose = require('mongoose');

const medicalRecordSchema = new mongoose.Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    diagnosis: {
        type: String,
        required: true
    },
    treatment: {
        type: String,
        required: true
    },
    prescriptions: [{
        medication: String,
        dosage: String,
        frequency: String   
    }],
    notes: String,
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('MedicalRecord', medicalRecordSchema);
