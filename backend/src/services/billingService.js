//src/services/billingService.js 

const billing =  require('../models/billingModel');

exports.generateInvoice = async (billingData) => {
    try {
        const invoice = await billing.create(billingData);
        return invoice;
    } catch (error) {
        throw new Error('Error generating invoice: ' + error.message);
    }
};

exports.getInvoice = async (invoiceId) => {
    try {
        const invoice = await billing.findById(invoiceId);
        if (!invoice) {
            throw new Error('Invoice not found');
        }
        return invoice;
    } catch (error) {        
        throw new Error('Error retrieving invoice: ' + error.message);
    }
};

exports.updateInvoice = async (invoiceId, updateData) => {
    try {
        const updatedInvoice = await billing.findByIdAndUpdate(invoiceId, updateData, { new: true });
        if (!updatedInvoice) {
            throw new Error('Invoice not found');
        }
        return updatedInvoice;
    } catch (error) {
        throw new Error('Error updating invoice: ' + error.message);
    }
};

exports.deleteInvoice = async (invoiceId) => {
    try {
        const deletedInvoice = await billing.findByIdAndDelete(invoiceId);
        if (!deletedInvoice) {
            throw new Error('Invoice not found');
        }
        return deletedInvoice;
    } catch (error) {
        throw new Error('Error deleting invoice: ' + error.message);
    }
};

exports.listInvoices = async () => {
    try {
        const invoices = await billing.find();
        return invoices;
    } catch (error) {
        throw new Error('Error listing invoices: ' + error.message);
    }
};

