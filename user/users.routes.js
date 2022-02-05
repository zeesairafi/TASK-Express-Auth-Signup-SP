const express = require('express');
const router = express.Router();


const { signUp } = require('./users.controllers');


router.post('/signup', signUp);
router.post('/signin', signIn);



module.exports = router;
