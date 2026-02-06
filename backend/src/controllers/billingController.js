//src/controllers/billingController.js 

const billingService = require('../services/billingService');

exports.generateBill = async (req, res) => {
    try {
        const billData = req.body;
        const bill = await billingService.generateBill(billData);
        res.status(200).json(bill);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getBill = async (req, res) => {
    try {
        const billId = req.params.id;
        const bill = await billingService.getBill(billId);
        if (!bill) {
            return res.status(404).json({ error: 'Bill not found' });
        }
        res.status(200).json(bill);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.payBill = async (req, res) => {
    try {
        const billId = req.params.id;
        const paymentData = req.body;
        const paymentResult = await billingService.payBill(billId, paymentData);
        if (!paymentResult.success) {
            return res.status(400).json({ error: paymentResult.message });
        }
        res.status(200).json({ message: 'Payment successful' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getBillingHistory = async (req, res) => {
    try {
        const userId = req.params.userId;
        const billingHistory = await billingService.getBillingHistory(userId);
        res.status(200).json(billingHistory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.refundBill = async (req, res) => {
    try {
        const billId = req.params.id;
        const refundResult = await billingService.refundBill(billId);
        if (!refundResult.success) {
            return res.status(400).json({ error: refundResult.message });
        }
        res.status(200).json({ message: 'Refund successful' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getOutstandingBills = async (req, res) => {
    try {
        const userId = req.params.userId;
        const outstandingBills = await billingService.getOutstandingBills(userId);
        res.status(200).json(outstandingBills);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getRevenueReport = async (req, res) => {
    try {
        const reportData = req.query;
        const revenueReport = await billingService.getRevenueReport(reportData);
        res.status(200).json(revenueReport);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getExpenseReport = async (req, res) => {
    try {
        const reportData = req.query;
        const expenseReport = await billingService.getExpenseReport(reportData);
        res.status(200).json(expenseReport);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getProfitReport = async (req, res) => {
    try {
        const reportData = req.query;
        const profitReport = await billingService.getProfitReport(reportData);
        res.status(200).json(profitReport);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

