const { Router } = require('express');

const courseRouter = Router();

courseRouter.get('/courses', (req, res) => {
    res.json({
        Message: "courses"
    });
});

courseRouter.get('/purchases', (req, res) => {
    res.json({
        Message: "purchased courses endpoint"
    });
});

module.exports = {
    courseRouter
};
