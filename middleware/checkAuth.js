exports.isLoggedIn = (req,res,next) => {
    if(req.user) {
        next();
    }
    else
    {
        return res.status(401).send({Message : 'Access Denied'});
    }
}