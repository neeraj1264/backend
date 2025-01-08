const express = require('express');
const CustomerData = require('../models/customerdata');
const router = express.Router();

// Create a new order
router.post('/', async (req, res) => {
    try {
      const { id, timestamp, name, phone, address } = req.body;
  
      // Check if a customer with the same phone number already exists
      const existingCustomer = await CustomerData.findOne({ phone });
      if (existingCustomer) {
        console.log(`Customer with phone ${phone} already exists. Skipping addition.`);
        return res.status(200).json({ message: 'Customer already exists, no changes made.' });
      }
  
      // Create a new customer entry if no match is found
      const customer = new CustomerData({ id, timestamp, name, phone, address });
      await customer.save();
      res.status(201).json({ message: 'Customer added successfully.', customer });
    } catch (error) {
      console.error("Error saving customer:", error);
      res.status(500).json({ message: 'Failed to create customer', error });
    }
  });  

// Fetch all CustomerData
router.get('/', async (req, res) => {
    try {
      const customers = await CustomerData.find(); // Use the correct model
      res.status(200).json(customers);
    } catch (error) {
      console.error("Error fetching customer data:", error); // Add logging
      res.status(500).json({ message: 'Failed to fetch customer data', error });
    }
  });  
  
module.exports = router;
