function Login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var message = document.getElementById("message");
  if (username === "noura" && password === "123") {
    message.style.color = "Green";
    message.innerText = "تم تسجي الدخول بنجاح";
  } else {
    message.style.color = "red";
    message.innerText = "اسم المستخدم او كلمة المرور خاطئة";
  }
}
