const { Router } = require('express');

const userRouter = Router();

userRouter.post('/signup', (req, res) => {
    res.json({
        Message: "signup endpoint"
    });
});

userRouter.post('/signin', (req, res) => {
    res.json({
        Message: "signin endpoint"
    });
});

userRouter.get('/purchase', (req, res) => {
    res.json({
        Message: "to purchase course endpoint."
    });
});

module.exports = {
    userRouter
};
