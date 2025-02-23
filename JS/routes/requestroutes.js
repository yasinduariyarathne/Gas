const express = require('express');
const { createRequest, getRequest } = require('../controllers/requestController');

const router = express.Router();

router.post('/requests', createRequest);
router.get('/requests/:request_id', getRequest);

module.exports = router;