//src/controllers/appointmentController.js 

const appointmentService = require('../services/appointmentService');

exports.bookAppointment = async (req, res) => {
    try {
        const { doctorId, patientId, dateTime } = req.body;
        const appointment = await appointmentService.bookAppointment(doctorId, patientId, dateTime);
        res.status(201).json(appointment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAppointments = async (req, res) => {
    try {
        const appointments = await appointmentService.getAppointments();
        res.status(200).json(appointments);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.cancelAppointment = async (req, res) => {
    try {
        const { appointmentId } = req.params;
        await appointmentService.cancelAppointment(appointmentId);
        res.status(200).json({ message: 'Appointment cancelled successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.rescheduleAppointment = async (req, res) => {
    try {
        const { appointmentId } = req.params;
        const { newDateTime } = req.body;
        const updatedAppointment = await appointmentService.rescheduleAppointment(appointmentId, newDateTime);
        res.status(200).json(updatedAppointment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getDoctorAppointments = async (req, res) => {
    try {
        const { doctorId } = req.params;
        const appointments = await appointmentService.getDoctorAppointments(doctorId);
        res.status(200).json(appointments);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getPatientAppointments = async (req, res) => {
    try {
        const { patientId } = req.params;
        const appointments = await appointmentService.getPatientAppointments(patientId);
        res.status(200).json(appointments);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAvailableSlots = async (req, res) => {
    try {
        const { doctorId, date } = req.query;
        const availableSlots = await appointmentService.getAvailableSlots(doctorId, date);
        res.status(200).json(availableSlots);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getAppointmentDetails = async (req, res) => {
    try {
        const { appointmentId } = req.params;
        const appointmentDetails = await appointmentService.getAppointmentDetails(appointmentId);
        res.status(200).json(appointmentDetails);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

