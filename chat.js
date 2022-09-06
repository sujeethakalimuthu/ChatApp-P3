function Add_User()
{
    user = document.getElementById("user_input").value;
    localStorage.setItem("user", user);
    window.location = "chat_room.html";
}