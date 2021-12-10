function checkCookie(req,res,next) {

    next()
    
    if (req.cookies.remember != undefined) {
         req.session.user = {
             bgColor : colorFromCookie,
             name : nameFromCookie
         }
    }
 
}

module.exports= checkCookie;