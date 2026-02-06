//src/services/appointmentService.js 

const Appointment = require('../models/Appointment');

exports.book = async ({ patientId, doctorId, date, time }) => {
    const exists = await Appointment.findOne({ doctorId, date, time });
    if (exists) {
        throw new Error('Time slot already booked');
    }
    const appointment = new Appointment({ patientId, doctorId, date, time });
    return await appointment.save();
};

exports.getByPatient = async (patientId) => {
    return await Appointment.find({ patientId }).populate('doctorId', 'name specialty');
};

exports.getByDoctor = async (doctorId) => {
    return await Appointment.find({ doctorId }).populate('patientId', 'name');
};

exports.cancel = async (appointmentId, patientId) => {
    const appointment = await Appointment.findOne({ _id: appointmentId, patientId });
    if (!appointment) {
        throw new Error('Appointment not found or unauthorized');
    }
    return await Appointment.deleteOne({ _id: appointmentId });
};

exports.reschedule = async (appointmentId, patientId, newDate, newTime) => {
    const appointment = await Appointment.findOne({ _id: appointmentId, patientId });
    if (!appointment) {
        throw new Error('Appointment not found or unauthorized');
    }
    const exists = await Appointment.findOne({ doctorId: appointment.doctorId, date: newDate, time: newTime });
    if (exists) {
        throw new Error('New time slot already booked');
    }
    appointment.date = newDate;
    appointment.time = newTime;
    return await appointment.save();
};

