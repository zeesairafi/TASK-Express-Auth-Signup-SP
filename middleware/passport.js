const LocalStrategy = require("passport-local").Strategy

exports.localStrategy = new LocalStrategy(async (username, password, done) => {
    try{ 
        const user = await user.findOne({ username: username})
        if(user){
           const checkPassword =  await bcrypt.compare(password.user.password)
           if(checkPassword){
            } else {
                done(null, false)

            } else {
        } catch (error) {
            done(error)
        }
    // console.log(username, password);
            
            )}