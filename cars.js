document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Perform login logic here
    console.log(`Logging in with username: ${username} and password: ${password}`);
  });
  
  document.getElementById("forgot-password").addEventListener("click", function () {
    // Perform forgot password logic here
    console.log("Forgot password clicked");
  });