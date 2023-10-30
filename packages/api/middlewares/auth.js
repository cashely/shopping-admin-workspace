import passport from "passport";
// import LocalStrategy from 'passport-local';
const LocalStrategy = require('passport-local');

passport.use(new LocalStrategy(function local(re, u, p, done) {
  console.log('----local', re, u, p, done)
  done(null, "sdsd")
}));

console.log('------------------')

passport.serializeUser((user, done) => {
  console.log('serializeUser', user, done)
  done(null, 'asasas');
});

passport.deserializeUser((id, done) => {
  console.log('deserializeUser', id)
  done(null, id)
})



export default passport.authenticate('local', {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  });