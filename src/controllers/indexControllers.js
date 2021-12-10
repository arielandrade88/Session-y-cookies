const { validationResult } = require("express-validator");

module.exports = {
    home : (req,res) => {
        return res.render('index')
    },
    procesarRegistro : (req,res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let {name,bgColor,email,age} = req.body;

           
            if (req.body.remember != undefined) {
                res.cookie('bgColor',req.body.bgColor,{maxAge:60000})
                res.cookie('name',req.body.name,{maxAge:60000})
            }
          
            res.render('index',{name,bgColor,email,age})
        } else {
            res.render('index',{errors:errors.mapped(),old:req.body})
        }

    },
    user:(req,res)=>{
        res.render('user',{
            bgColor: req.session.user.bgColor,
            name: req.session.user.name,
        })        
    },
    reset:(req,res)=>{
        req.session.destroy();
        res.clearCookie('name');
        res.clearCookie('bgColor');
        res.redirect("/");
    }
}