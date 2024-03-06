function signup(e) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var repassword = document.getElementById("repassword").value;
  var email = document.getElementById("e_mail").value;
  var user = localStorage.getItem(username);
  var data = JSON.parse(user);
  if (
    username == "" ||
    password == "" ||
    repassword == "" ||
    email == ""
  ) {
    alert("Boş alan bırakmayınız.");
  } else {
    if (user == null) {
      if (password == repassword) {
        var user = {
          email: email,
          username: username,
          password: password,
          repassword: repassword,
        };
        var json = JSON.stringify(user);
        localStorage.setItem(username, json);
        alert("Kullanıcı başarıyla eklendi.");
        window.location.href = "login.html";
      } else {
        alert("Parola eşleşmiyor.");
      }
    } else if (username == data.username) {
      alert("Kullanıcı adı zaten sistemde kayıtlıdır.");
    } else if (email == data.email) {
      alert("Bu email zaten sistemde kayıtlıdır.");
    }
  }
}
