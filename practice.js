const firebaseConfig = {
  apiKey: "AIzaSyB8KaE6mmVVDVjHYLV_Vpb9BugMg92_1XA",
  authDomain: "practise-d17ee.firebaseapp.com",
  databaseURL: "https://practise-d17ee-default-rtdb.firebaseio.com",
  projectId: "practise-d17ee",
  storageBucket: "practise-d17ee.appspot.com",
  messagingSenderId: "579148984265",
  appId: "1:579148984265:web:3214048c41657c7fb88218",
  measurementId: "G-G9NQ5JJTMM"
};
function username() {
    var username = document.getElementById("user_name").value;
    firebase.database().ref("/").child(username).update({
        purpose: "adding user"
    });
}