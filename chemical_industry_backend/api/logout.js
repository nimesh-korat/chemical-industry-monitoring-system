const connectDB = require("../db/dbConnect");

async function Logout(req, res) {
  const sessions = req.session.user;
  if (!sessions) {
    return res.status(401).json({ success: false, message: "Already Logged Out" });
  } else {
    try {
      req.session.destroy((err) => {
        if (err) {
          console.error("Error destroying session:", err);
          res.status(500).json({ success: false, message: "Logout Failed!" }); // or handle the error as appropriate
        } else {
          res.clearCookie("connect.sid"); // Optional: Clear the session cookie if needed
          res.status(200).json({ success: true, message: "Logout Successful!" });
        }
      });
    } catch (error) {
      return res.status(500).json({ success: false, error: error.message });
    }
  }
}

module.exports = Logout;
