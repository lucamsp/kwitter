
const firebaseConfig = {
      apiKey: "AIzaSyD8AAu0XEu5403febMkQa8SN7J9JSaZ19M",
      authDomain: "kwitter-adcfe.firebaseapp.com",
      databaseURL: "https://kwitter-adcfe-default-rtdb.firebaseio.com",
      projectId: "kwitter-adcfe",
      storageBucket: "kwitter-adcfe.appspot.com",
      messagingSenderId: "649501822416",
      appId: "1:649501822416:web:10e291d6d8ff5b2fef3dd5"
    };
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send()
    {
      msg = document.getElementById("msg").ariaValueMax;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
    }
    

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Comece a programar aqui

//Termine de programar aqui
      } });  }); }
getData();
