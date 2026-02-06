//src/models/Billing.js 

const mongoose = require('mongoose');

const billingSchema = new mongoose.Schema({
    PatientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
    },
    appointmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment',
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },  
    paymentStatus: {
        type: String,
        enum: ['Pending', 'Paid', 'Failed'],
        default: 'Pending'
    },
    paymentMethod: {
        type: String,
        enum: ['Credit Card', 'Debit Card', 'Cash', 'Insurance'],
        required: true
    },
    billingDate: {
        type: Date,
        default: Date.now
    }
});

const Billing = mongoose.model('Billing', billingSchema);

module.exports = Billing;

