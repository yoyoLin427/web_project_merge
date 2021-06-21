const express = require('express');
const router = express.Router();
const api = require('./api');



router.post('/login', (req, res, next) => {
    api.login(req, res, next);
});
router.post('/register', (req, res, next) => {
    api.register(req, res, next);
});
router.post('/book', (req, res, next) => {
    api.book(req, res, next);
});

/* yoyo */
router.post('/writeDiary', (req, res, next) => {
    api.writeDiary(req, res, next);
});

router.post('/checkDiaryDate', (req, res, next) => {
    api.checkDiaryDate(req, res, next);
});
module.exports = router;