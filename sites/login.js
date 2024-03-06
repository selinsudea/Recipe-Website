function loginFunc(e) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var user = localStorage.getItem(username);
  var data = JSON.parse(user);
  if (user == null) {
    alert("Yanlış Kullanıcı Adı");
  } else if (username == data.username && password == data.password) {
    alert("Giriş başarılı.");
    window.location.href = "recipes_list.html";
  } else if (username == data.username && password != data.password) {
    alert("Eşleşmeyen Parola.");
  }
}
