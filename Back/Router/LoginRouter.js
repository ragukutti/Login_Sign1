const express = require('express');
const router = express.Router();
const {getvalue,Register,getbyId,Login} = require('../Controller/LoginController');

router.get('/',getvalue);
router.get('/:id',getbyId);
router.post('/sign',Register);
router.post('/login',Login);


module.exports = router;