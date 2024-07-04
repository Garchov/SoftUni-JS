const registerForm = document.getElementById("register");
registerForm.addEventListener("submit", onRegister);

const loginForm = document.getElementById("login");
loginForm.addEventListener("submit", onLogin);

async function onLogin(event) {
  event.preventDefault();
  const formData = new FormData(event.target);

  const email = formData.get("email");
  const password = formData.get("password");
  const response = await fetch("http://localhost:3030/users/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    return alert("Error logging in:\n" + error.message);
  }
  const result = await response.json();
  localStorage.setItem("accessToken", result.accessToken);
}
async function onRegister(event) {
  event.preventDefault();
  const formData = new FormData(event.target);

  const email = formData.get("email");
  const password = formData.get("password");
  const repass = formData.get("repass");

  //**** validation *****
  if (!email || !password || !repass) {
    return alert("All fields are required!");
  }
  if (password !== repass) {
    return alert("Passwords do not match!");
  }

  //*** post request to user register***
  const response = await fetch("http://localhost:3030/users/register", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    return alert("Error creating user:\n" + error.message);
  }
  //*Convert the response from the request to JSON format
  const result = await response.json();

  //!Save the accessToken from the result object to localStorage
  localStorage.setItem("accessToken", result.accessToken);
}

async function makeRequest() {
  const options = {
    method: "get", //? doesnt need to make a get but is only for the example
    headers: {}, //!The headers object is created empty to be populated later
  };

  const accessToken = localStorage.getItem("accessToken");
  //*Check if the token exists
  if (accessToken) {
    //! If the token exists, add it to the headers as 'X-Authorization'
    options.headers["X-Authorization"] = accessToken; //!X-Authorization' is the name of the header used for authorization and token is the value the client must provide
  }
  const response = await fetch("http://localhost:3030/jsonstore/demo", options);

  if (!response.ok) {
    const error = await response.json();
    return alert("Error reading data:\n" + error.message);
  }

  const result = await response.json();

  console.log(result);
}

//!Why this token was needed:
//* • Authentication: The token proves that the user is legitimate.
//* • Authorization: The token defines what resources and actions are allowed for the user.
//* • Security: The token reduces the risk of misuse of sensitive information such as passwords. */
