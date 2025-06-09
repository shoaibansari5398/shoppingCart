const { validateUser, registerUser } = require("../model/userModel");

async function checkUser(request, response) {
  var userObj = request.body;

  try {
    var result = await validateUser(userObj);

    if (result) {
      response.json({ status: true, message: "User Login success" });
    } else {
      response.status(401).json({ status: true, message: "User Login failed" });
    }
  } catch (error) {
    response.status(500).json({ status: false, message: error.message });
  }
}

async function addUser(request, response) {
  var userObj = request.body;
  try {
    var result = await registerUser(userObj)
          response.json({ status: true, message: "User added success" });

  } catch (error) {
   response.status(400).json({ status: false, message: error.message }); 
  }
}

module.exports = { checkUser, addUser };
