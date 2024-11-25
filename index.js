const express = require('express');
const app = express();

// Importing routes
const { userRouter } = require('./routes/user');
const { courseRouter } = require('./routes/course');
const { adminRouter }= require(`./routes/admin`)

// Middleware to use routers
app.use('/user', userRouter);
app.use('/course', courseRouter);
app.use(`/admin`, adminRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
