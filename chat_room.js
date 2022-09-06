// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyB6p5waq6fXGTl-fhK3YV7QIYXZq3qkwSg",
    authDomain: "chatapp-ba82c.firebaseapp.com",
    databaseURL: "https://chatapp-ba82c-default-rtdb.firebaseio.com",
    projectId: "chatapp-ba82c",
    storageBucket: "chatapp-ba82c.appspot.com",
    messagingSenderId: "1005639204521",
    appId: "1:1005639204521:web:b9883c562ed6b91638f3b8",
    measurementId: "G-8K6ZMPLQC0"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
var user = localStorage.getItem("user");
document.getElementById("user").innerHTML = "Welcome "+user;
var room_name;
function Add_Room()
{
   room_name = document.getElementById("room_input").value;
   localStorage.setItem("room", room_name);
   window.location = "chat_page.html";
}
    function getData() {firebase.database().ref("/").on('value',
    function(snapshot) {document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
    childKey = childSnapshot.key;
    Room_names = childKey;
//Start code
    row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML += row
//End code
});});}
getData();
function redirectToRoomName()
{
    
   localStorage.setItem("room", room_name);
    window.location = "chat_page.html"
}