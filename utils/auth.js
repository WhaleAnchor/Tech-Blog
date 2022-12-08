// helper function to verify if user is logged in
const auth = (req, res, next) => {
  if (!req.session.loggedIn) {
    // If the user has not logged in, redirect to the login page
    res.redirect('/login');
    // Else go to the next instance
  } else {
    next();
  }
};

module.exports = auth;
