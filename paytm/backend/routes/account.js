const express = require('express');
const router = express.Router();

// GET /account
router.get('/', (req, res) => {
    // Handle GET request for account
    res.send('Get account');
});

// POST /account
router.post('/', (req, res) => {
    // Handle POST request for account
    res.send('Create account');
});

// PUT /account/:id
router.put('/:id', (req, res) => {
    // Handle PUT request for account
    const accountId = req.params.id;
    res.send(`Update account ${accountId}`);
});

// DELETE /account/:id
router.delete('/:id', (req, res) => {
    // Handle DELETE request for account
    const accountId = req.params.id;
    res.send(`Delete account ${accountId}`);
});

module.exports = router;
