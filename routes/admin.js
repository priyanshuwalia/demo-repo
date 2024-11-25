const { Router } = require(`express`);
const { adminModel} = require(`../db`);

const adminRouter = Router();

adminRouter.post(`/login`, (req,res)=>{
   res.json({
    Message: " admin login endpoint" 
   })
});
adminRouter.post(`/signup`, (req,res)=>{
    res.json({
        Message:"admin signup endpoint"
    })
});
adminRouter.post(`/createCourse`, (req, res)=>{
    res.json({
        message: "create course endpoint"
    })
});
adminRouter.post(`/deleteCouse`, (req, res)=>{
    res.json({
        message: "delete course endpoint"
    })
});
adminRouter.post(`/addCourseContent`, (req,res)=>{
    res.json({
        message: "add course content endpoint"
    })
});
module.exports = {
    adminRouter
};