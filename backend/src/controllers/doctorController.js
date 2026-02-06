//src/controllers/doctorController.js 

const doctorService = require('../services/doctorService');

exports.getTopDoctors = async (req, res) => {
    try {
        const limit = req.query.limit || 10; 
        const topDoctors = await doctorService.getTopDoctors(limit);
        res.status(200).json(topDoctors);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching top doctors', error });
    }
};

exports.getAllDoctors = async (req, res) => {
    try {
        const doctors = await doctorService.getAllDoctors();
        res.status(200).json(doctors);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching doctors', error });
    }
};

exports.saveDoctorInfo = async (req, res) => {
    try {
        const doctorData = req.body;
        const result = await doctorService.saveDoctorInfo(doctorData);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Error saving doctor information', error });
    }
};

exports.getDoctorDetails = async (req, res) => {
    try {
        const doctorId = req.query.id;
        const doctorDetails = await doctorService.getDoctorDetails(doctorId);
        res.status(200).json(doctorDetails);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching doctor details', error });
    }
};

exports.bulkCreateSchedule = async (req, res) => {
    try {
        const scheduleData = req.body;
        const result = await doctorService.bulkCreateSchedule(scheduleData);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Error creating schedule', error });
    }
};

exports.getScheduleByDate = async (req, res) => {
    try {
        const doctorId = req.query.doctorId;
        const date = req.query.date;
        const schedule = await doctorService.getScheduleByDate(doctorId, date);
        res.status(200).json(schedule);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching schedule', error });
    }
};

exports.getExtraInfoById = async (req, res) => {
    try {
        const doctorId = req.query.doctorId;
        const extraInfo = await doctorService.getExtraInfoById(doctorId);
        res.status(200).json(extraInfo);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching extra information', error });
    }
};

exports.getProfileDoctorById = async (req, res) => {
    try {
        const doctorId = req.query.doctorId;
        const profile = await doctorService.getProfileDoctorById(doctorId);
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching doctor profile', error });
    }
};

exports.getListPatientForDoctor = async (req, res) => {
    try {
        const doctorId = req.query.doctorId;
        const date = req.query.date;
        const patients = await doctorService.getListPatientForDoctor(doctorId, date);
        res.status(200).json(patients);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching patient list', error });
    }
};

exports.sendRemedy = async (req, res) => {
    try {
        const remedyData = req.body;
        const result = await doctorService.sendRemedy(remedyData);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Error sending remedy', error });
    }
};

exports.getDoctorProfile = async (req, res) => {
    try {
        const doctorId = req.query.doctorId;
        const profile = await doctorService.getDoctorProfile(doctorId);
        res.status(200).json(profile);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching doctor profile', error });
    }
};

exports.getDoctorSchedule = async (req, res) => {
    try {
        const doctorId = req.query.doctorId;
        const schedule = await doctorService.getDoctorSchedule(doctorId);
        res.status(200).json(schedule);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching doctor schedule', error });
    }
};

